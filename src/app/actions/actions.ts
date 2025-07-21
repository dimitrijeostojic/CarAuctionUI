import { Auction, PageResult } from "../../../types";

export const GetData = async (query:string): Promise<PageResult<Auction>> => {
    const res = await fetch(`http://localhost:6001/search${query}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};