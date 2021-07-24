import { getSearchBookList } from '@/core/api/bookList.api';
import { AxiosSearchBookList } from './types';
import useSWR from 'swr';

export const useSearchBookList = (param:string) => {
    const initData:any = [];
    let options = {
        revalidateOnFocus:true,
        // refreshInterval: 1000
    };
    const fetcher = async (url:string, param:string) => {
       return await getSearchBookList(url, param);
    };

    let keyword=param;
    const { data, error } = useSWR<AxiosSearchBookList>(keyword && keyword.length !== 0? ['https://www.googleapis.com/books/v1/volumes?printType=books&q=', keyword] : null, fetcher, options);

    return {
        bookList: data && data.items || initData,
        isLoadBookList: data && false || true,
        isErrorBookList: error
    }
}