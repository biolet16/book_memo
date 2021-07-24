import { BookList } from '@/core/swr/searchBook/types';
import SearchBookItem from './SearchBookItem';
interface SearchBookListProps {
    bookList:BookList[];
}
const SearchBookList:React.FC<SearchBookListProps> = ({bookList}) => {
    return (
        <div className="searchBookList">
            {
                bookList && bookList.map((book:BookList,index:number) => {
                    return <SearchBookItem key={index} book={book} />
                })

                ||
                <div>검색 결과를 찾을 수 없습니다. </div>
            }
        </div>
    )
}

export default SearchBookList;