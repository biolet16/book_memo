import { useSelectBook } from '@/components/hooks/useSelectBook';
const BookDetailLayout = () => {    
    const { selectBook } = useSelectBook();
    let authors = '';
    selectBook?.volumeInfo.authors && selectBook?.volumeInfo.authors.map((author, index) => {
        authors+=index !== 0 ? ' '+author : author;
    });
    console.log({selectBook})
    return (
        <>
        {
            selectBook && 
            <div className="bookDetailInfo">
                <img src={selectBook?.volumeInfo.imageLinks.thumbnail}/>
                <div className="bookInfo">
                    <p className="title">{selectBook?.volumeInfo.title}</p>
                    <p className="authors">{authors}</p>
                    <p className="page">총 {selectBook?.volumeInfo.pageCount} page</p>
                    <p className="description">{selectBook?.volumeInfo.description}</p>
                </div>
            </div>
            ||
            <div>해당 책에 대한 내용이 존재하지 않습니다.</div>
        }

        </>
    )
}

export default BookDetailLayout;