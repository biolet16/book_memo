import { NextPage } from 'next';
import Head from 'next/head';
import BookDetailLayout from '@/components/layout/bookDetailLayout';
const SearchPage : NextPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/bookDetail.css"/>
            </Head>
            <BookDetailLayout/>
        </>
        
    )
}

export default SearchPage;