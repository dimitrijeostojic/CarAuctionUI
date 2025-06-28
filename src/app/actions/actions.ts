'use server';
import { Auction, PageResult } from "../../../types";

export const GetData = async (query:string): Promise<PageResult<Auction>> => {
    const res = await fetch(`http://localhost:6001/search${query}`, { cache: 'force-cache' });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};