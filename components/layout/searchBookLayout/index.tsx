import { useSearchBookList } from '@/core/swr/searchBook/useSearchBookList';
import { BookList } from '@/core/swr/searchBook/types';
import { useState } from 'react';
import SearchBookList from './SearchBookList';
const SearchBookLayout = () => {
    const [bookKeyword, setBookKeyword] = useState<string>('');
    const [searchBookList, setSearchBookList] = useState<BookList[] | null>(null);
    const [isSetBookList, setIsSetBookList] = useState<boolean>(false);
    const { bookList } = useSearchBookList(bookKeyword);
    let recommendClass = bookList.length !== 0 ? '' : 'invisible';
    
    const searchKeyword = (e:any) => {
        setIsSetBookList(false);
        setBookKeyword(e.target.value);
    }
    const getBookList = () => {
        setIsSetBookList(true);
        setSearchBookList(bookList);
    }
    
    return (
        <div className="searchWrap">
            <div className="center">
                <input type="text" placeholder="Search" onChange={searchKeyword}/>
                <button onClick={getBookList}>go</button>
                <div id="recommend" className={recommendClass}>
                    {
                        bookList && !isSetBookList && bookList.map((book:BookList, index:number) => {
                            let title = book.volumeInfo.title.length > 20 ? book.volumeInfo.title.slice(0,20)+'...' : book.volumeInfo.title;
                            if(index < 5){
                                return(
                                    <div className="item" key={index}>{title}</div>
                                );
                            }
                        })
                    }
                </div>
            </div>
            {
                searchBookList && 
                    <SearchBookList bookList={searchBookList}/>
            }
        </div>
    )
}

export default SearchBookLayout;