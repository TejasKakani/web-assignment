export default interface Metrics {
    daily: { [key: string]: any },
    monthly: {[key: string]: any},
    allTime: {[key: string]: any}
};