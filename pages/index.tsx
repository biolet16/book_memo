import { NextPage } from 'next';
import StartLayout from '@/components/layout/startLayout';
import Head from 'next/head';
const TestPage : NextPage = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/start.css"/>
            </Head>
            <StartLayout/>
        </>
        
    )
}

export default TestPage;
