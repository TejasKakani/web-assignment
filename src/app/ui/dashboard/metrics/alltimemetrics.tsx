"use client";

import getAttributes from "@/helpers/arrtibutes";
import { useCallback } from "react";
import ApiRequest from "@/helpers/apirequest";
import { useQuery } from "@tanstack/react-query";

import dynamic from 'next/dynamic';
import 'chart.js/auto';

export default function AllTimeMetrics({ model, graphType }: { model: string, graphType: string }) {

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

    const { allTimeAttributes } = getAttributes(metrics, "chartData");

    const allTimeChartDataX = Object.keys(allTimeAttributes);
    const allTimeChartDataY = Object.values(allTimeAttributes);

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
        case "doughnut":
            Graph = dynamic(() => import('react-chartjs-2').then((mod) => mod.Doughnut as any), {
                ssr: false,
            });
            break;
        default:
            break;
    }

    const dailyGraphData = {
        labels: allTimeChartDataX,
        datasets: [
            {
                label: 'All Time Metrics',
                data: allTimeChartDataY,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

    };

    return (
            <div className="pb-9 bg-white m-8">
                <Graph data={dailyGraphData} options={options} />
            </div>
    );
}