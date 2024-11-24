import Metrics from "./metricsinterface";

export default function getAttributes(metrics: Metrics, endpoint: string): any {

    const daily = metrics.daily;
    const monthly = metrics.monthly;
    const allTime = metrics.allTime;

    const dailyAttributes: {[key: string]: number} = {};
    const monthlyAttributes: {[key: string]: number} = {};
    const allTimeAttributes: {[key: string]: number} = {};

    Object.keys(daily).forEach((key) => {
        if(key === endpoint) return;
        dailyAttributes[key] = daily[key];
    });

    Object.keys(monthly).forEach((key) => {
        if(key === endpoint) return;
        monthlyAttributes[key] = monthly[key];
    });

    Object.keys(allTime).forEach((key) => {
        if(key === endpoint) return;
        allTimeAttributes[key] = allTime[key];
    });

    return {
        dailyAttributes,
        monthlyAttributes,
        allTimeAttributes
    };

}