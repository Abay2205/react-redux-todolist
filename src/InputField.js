import React from 'react';
import {connect} from "react-redux";
import {addText, addTodo, editAddTodo} from "./redux/actions/addTodo";

const InputField = (props) => {


    const handleChange = e => {
        props.addText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (props.selected || props.selected === 0) {
            props.editAddTodo({value: props.text, selected: props.selected})
        } else {
            props.addTodo(props.text)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='todo' value={props.text} placeholder='Enter your todo...'
                       onChange={handleChange}/>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    addText: value => dispatch(addText(value)),
    editAddTodo: obj => dispatch(editAddTodo(obj))
})
const mapStateToProps = state => ({
    text: state.text,
    selected: state.selected
})

export default connect(mapStateToProps, mapDispatchToProps)(InputField);