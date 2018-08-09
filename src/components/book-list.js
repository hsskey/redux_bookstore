import React, {Component} from 'react';

export default class BookList extends Component {
    renderList(){
        return(
            //redux state와 리액트 연결고리가 필요
           this.props.book.map((book)=>{
               return(
                   <li key={book.title}>
                       {book.title}
                   </li>
               )
           }) 
        )
    }
    render(){
        return(
            <ul className="list group">
                {this.renderList}
            </ul>           
        );
    }
}