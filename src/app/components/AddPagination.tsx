'use client';
import { Pagination } from 'flowbite-react'

type Props = {
    currentPage: number;
    pageCount: number;
    pageChanged: (page: number) => void;
}

export default function AddPagination({ currentPage, pageCount, pageChanged }: Props) {

    return (
        <Pagination currentPage={currentPage}
            totalPages={pageCount}
            onPageChange={(e) => pageChanged(e)}
            layout='pagination'
            showIcons={true}
            className='text-blue-500 mb-5' />
    )
}
