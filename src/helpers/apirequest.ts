'use server';

export default async function ApiRequest( url: string) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error: any) {
        return `An error has occurred: ${error.message}`;
    }
}