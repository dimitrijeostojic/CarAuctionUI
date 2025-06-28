export type PageResult<T> = {
    result: T[];
    pageCount: number;
    totalCount: number;
}

export type Auction = {
    createdAt: string
    updatedAt: string
    auctionEnd: string
    seller: string
    winner?: any
    make: string
    model: string
    year: number
    color: string
    mileage: number
    imageUrl: string
    status: string
    reservePrice?: number
    soldAmount?: any
    currentHighBid?: any
    id: string
}