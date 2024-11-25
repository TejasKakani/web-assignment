"use client";

import { useQuery } from "@tanstack/react-query";
import ApiRequest from "@/helpers/apirequest";

import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { useCallback, useEffect } from "react";
import getAttributes from "@/helpers/arrtibutes";
import { motion } from "framer-motion";
import { homedir } from "os";
import { getHoverColor } from "chart.js/helpers";

export default function Metrics({ model, graphType }: { model: string, graphType?: string }): JSX.Element {
    
    const fetchMetrics = useCallback(async () => {
        const response = await ApiRequest("https://api.socialverseapp.com/admin/dashboard");
        return response;
    }, [model]);

    const { isLoading, data, error } = useQuery({
        queryKey: ["metrics"],
        queryFn: fetchMetrics,
    });

    if (isLoading) return <div>"Loading..."</div>;
    if (error) return <div>error</div>;

    if (!data) return <div>"No data"</div>;

    const metrics = data?.dashboard[model];  

    const dailyChartData = metrics.daily.chartData;
    const monthlyChartData = metrics.monthly.chartData;

    const {dailyAttributes, 
        monthlyAttributes
    } = getAttributes(metrics, "chartData");

    const dailyAttributesArray = Object.keys(dailyAttributes);
    const monthlyAttributesArray = Object.keys(monthlyAttributes);

    const dailyChartDataX: string[] = [];
    const dailyChartDataY: number[] = [];

    const monthlyChartDataX: string[] = [];
    const monthlyChartDataY: number[] = [];

    dailyChartData.forEach((data: { [key: string]: number }) => {
        dailyChartDataX.push(data.timestamp.toString());
        dailyChartDataY.push(data.count);
    });

    monthlyChartData.forEach((data: { [key: string]: number }) => {
        monthlyChartDataX.push(data.timestamp.toString());
        monthlyChartDataY.push(data.count);
    });
            
    let Graph = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
        ssr: false,
    });

    switch (graphType) {
        case "line":
            Graph = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line as any), {
                ssr: false,
            });
            break;
        case "pie":
            Graph = dynamic(() => import('react-chartjs-2').then((mod) => mod.Pie as any), {
                ssr: false,
            });
            break;
        default:
            break;
    }

    const dailyGraphData = {
        labels: dailyChartDataX,
        datasets: [
            {
                label: 'Daily Metrics',
                data: dailyChartDataY,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 2,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'black',
                tension: 0.1,
            },
        ],
    };

    const monthlyGraphData = {
        labels: monthlyChartDataX,
        datasets: [
            {
                label: 'Monthly Metrics',
                data: monthlyChartDataY,
                fill: false,
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 2,
                hoverBackgroundColor: 'red',
                hoverBorderColor: 'black',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="pt-14 md:pl-48 pl-16">
            <div>
            <h1 className="justify-self-center p-3">Daily Metrics</h1>
            <ul className="flex flex-wrap gap-2 justify-evenly">

               {
                     dailyAttributesArray.map((attribute: string, index: number) => {
                          return <motion.li 
                          whileHover={{ scale: 1.2 }}
                          whileDrag={{ scale: 1.2 }}
                          drag={true}
                          dragSnapToOrigin={true}
                          className="bg-gray-600 text-white rounded-md p-1" key={index}>{attribute}: {dailyAttributes[attribute]}</motion.li>
                     })
               }

            </ul>
            </div>
            <div style={{height: "450px"}} className="m-8 bg-white">
                <Graph data={dailyGraphData} options={options} />
            </div>
            <div>
            <h1 className="justify-self-center p-3">Monthly Metrics</h1>
            <ul className="flex flex-wrap gap-2 justify-evenly">

                { monthlyAttributesArray.map((attribute: string, index: number) => {
                    return <motion.li 
                    whileHover={{ scale: 1.2 }}
                    whileDrag={{ scale: 1.2 }}
                    drag={true}
                    dragSnapToOrigin={true}
                    className="bg-gray-600 text-white rounded-md p-1" key={index}>{attribute}: {monthlyAttributes[attribute]}</motion.li>
                })
                }

            </ul>
            </div>
            <div style={{height: "400px"}} className="m-8 chartContainer bg-white">
                <Graph data={monthlyGraphData} options={options} />
            </div>
        </div>
    );
}