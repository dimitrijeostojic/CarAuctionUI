import AuctionCard from "./AuctionCard";

const GetData = async () => {
    const res = await fetch('http://localhost:6001/search', { cache: 'force-cache' });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export default async function Listings() {

    const data = await GetData();

    return (
        <div>
            {data && data.result.map((auction: any) => (
                <AuctionCard key={auction.id} auction={auction} />
            ))}
        </div>
    )
}
