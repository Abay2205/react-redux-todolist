import './App.css'
import InputField from "./InputField";
import TodosList from "./TodosList";
import {connect} from "react-redux";
import {deleteAll} from "./redux/actions/addTodo";



function App(props) {
  return (
    <div className="App">
        <h1 className='zagolovok' style={{textDecoration: 'underline'}}>Todos App</h1>
      <InputField/>
        <TodosList/>
        <div>Todos:{props.todos.length}</div>
        <div>
            <button onClick={() => props.deleteAll()}>Delete all</button>
        </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    deleteAll: () => dispatch(deleteAll())
})
const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
