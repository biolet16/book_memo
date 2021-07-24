import { NextPage } from 'next';
import SearchBookLayout from '@/components/layout/searchBookLayout';
import Head from 'next/head';
const SearchPage : NextPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/search.css"/>
            </Head>
            <SearchBookLayout/>
        </>
        
    )
}

export default SearchPage;