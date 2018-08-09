export function selectBook(book){
    //액션 생성자는 리덕스에 연결되어야한다
    //console.log('A book has been selected: ',book.title)

    //선택한 책은 액션 생성자고 액션반환이 필요하며 타입은 오브젝트(객체)다
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}