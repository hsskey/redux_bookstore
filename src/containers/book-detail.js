import React, {Component} from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

class BookDetail extends Component {
    render(){
        //state 기본값이 없으면 컴포넌트는 바로 에러를 던지기때문에 초기화 체크필요
        if(!this.props.book){
            return (<div>Select a book to get started.</div>)
        }

        return (
            <div>
                <h3>Detail : </h3>
                <div>{this.props.book.title}</div>
                <div>Difficulty : {this.props.book.Difficulty}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book : state.activeBook
    }
}



export default connect(mapStateToProps)(BookDetail)