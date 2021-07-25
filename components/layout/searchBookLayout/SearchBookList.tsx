import Link from 'next/link';
import { useRouter } from "next/router";
import { BookList } from '@/core/swr/searchBook/types';
import SearchBookItem from './SearchBookItem';
interface SearchBookListProps {
    bookList:BookList[];
    selectBook:any;
}
const SearchBookList:React.FC<SearchBookListProps> = ({bookList, selectBook}) => {
    return (
        <div className="searchBookList" >
            {
                bookList && bookList.map((book:BookList,index:number) => {
                    
                    return (
                        <Link href="/bookDetail">
                            <a onClick={() => selectBook(book)}>
                                <SearchBookItem 
                                    key={index} 
                                    book={book} 
                                />
                            </a>
                        </Link>
                    )
                })

                ||
                <div>검색 결과를 찾을 수 없습니다. </div>
            }
        </div>
    )
}

export default SearchBookList;