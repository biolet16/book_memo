import { BookList } from '@/core/swr/searchBook/types';
interface SearchBookItemProps {
    book:BookList;
}
const SearchBookItem:React.FC<SearchBookItemProps> = ({book}) => {
    let authors = '';
    book.volumeInfo.authors && book.volumeInfo.authors.map((author, index) => {
        authors+=index !== 0 ? ' '+author : author;
    });
    return (
        <>
            {
                book && book.volumeInfo.imageLinks && 
                <div className="searchBookItem">
                    <img src={book.volumeInfo.imageLinks.thumbnail}/>
                    <div className="bookInfo">
                        <p className="title">{book.volumeInfo.title}</p>
                        <p className="authors">{authors}</p>
                    </div>
                    
                    
                </div>
            }
        </>
    )
}

export default SearchBookItem;