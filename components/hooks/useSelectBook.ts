import useSWR from "swr";
import { BookList } from '@/core/swr/searchBook/types';
declare global {
    interface Window {
        selectBook: BookList;
    }
}
export const useSelectBook = () => {
    const { data, mutate } = useSWR<BookList|null>('selectBook', () => window.selectBook);

    return {
        selectBook: data && data || null,
        setSelectBook: (book:BookList) => {
            window.selectBook=book;
            return mutate();
        }
    }
}