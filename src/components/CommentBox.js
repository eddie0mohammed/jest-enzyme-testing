import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class CommentBox extends Component {

    state = {
        comment: '',
    }

    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.comment);
        this.setState({comment: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange}/>

                <div>
                    <button>Submit</button>
                </div>
                
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveComment: (comment) => dispatch(actionCreators.saveComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);