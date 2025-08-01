'use client';
import { useEffect, useState } from "react";
import { GetData } from "../actions/actions";
import AddPagination from "../components/AddPagination";
import AuctionCard from "./AuctionCard";
import { Auction, PageResult } from "../../../types";
import Filters from "./Filters";
import { useParamsStore } from "../../../hooks/useParamsStore";
import { useShallow } from "zustand/shallow";
import queryString from "query-string";
import EmptyFilter from "../components/EmptyFilter";


export default function Listings() {

    const [data, setData] = useState<PageResult<Auction>>();
    const params = useParamsStore(useShallow(state => ({
        pageNumber: state.pageNumber,
        pageSize: state.pageSize,
        searchTerm: state.searchTerm,
        orderBy: state.orderBy,
        filterBy: state.filterBy
    })));

    const setParams = useParamsStore(state => state.setParams);
    
    const url = queryString.stringifyUrl({ url: '', query: params }, { skipEmptyString: true })

    function setPageNumber(pageNumber: number) {
        setParams({ pageNumber })
    }

    useEffect(() => {
        GetData(url)
            .then(data => {
                setData(data);
                console.log(data?.result);
                console.log(url);
            })
            
    }, [url]);

    if (!data) {
        return <h3>Loading...</h3>
    }

    return (
        <>
            <Filters />
            {data.totalCount === 0 ? (
                <EmptyFilter showReset={true} />
            ) : (
                <>
                    <div className="grid grid-cols-4 gap-6">
                        {data && data.result.map((auction) => (
                            <AuctionCard key={auction.id} auction={auction} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <AddPagination pageChanged={setPageNumber} currentPage={params.pageNumber} pageCount={data.pageCount} />
                    </div>
                </>
            )}

        </>
    )
}
