import React, {Component} from 'react';
import {connect} from 'react-redux'
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    onClick={()=>this.props.selectBook(book)}
                    key={book.title} className="list-group-item">
                    {book.title}
                </li>
            )
        })

    }
    render(){
        return(
            <ul className="list group col-sm-4">
                {this.renderList()}
            </ul>           
        );
    }
}
function mapStateToProps(state){
    return {
        books: state.books
    }
}

//이 함수로 반환받은 것이 BookList 컨테이너의 props로 연결
// - > selectBook으로 리턴값을 받아 리듀서로 '전달'
function mapDispatchToProps(dispatch){
    //bindActionCreators와 dispatch가 하는일 : 
    //selectBook이 호출될때마다, 결과는 리듀서로 전달
    //(모든액션들을 가져와 모든 리듀서로 전달)
    return bindActionCreators({selectBook:selectBook},dispatch)
}


//컴포넌트에서 컨테이너로 BookList를 바꿔야하는데 
//이것은 새로운 dispatch의 메소드인 selectBook을 알아야하고 
//이것은 prop으로 이용가능하다
export default connect(mapStateToProps,mapDispatchToProps)(BookList)