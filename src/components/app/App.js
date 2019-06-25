import React, {Component} from 'react';

import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form"

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Have a lunch")
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            const before = todoData.slice(0, index);
            const after = todoData.slice(index + 1);
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            }
        })
    };

    addItem = () => {
        this.setState(({todoData}) => {
            const newArray = [...todoData, {label: 'Default', important: false, id: todoData.length + 1}];

            return {
                todoData: newArray
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done: !oldItem.done}
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        })
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important}
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        })
    };

    render() {

        const elementsDone = this.state.todoData.filter(
            (el) => el.done
        ).length;

        const elementsToDo = this.state.todoData.length - elementsDone;

        return (
            <div className="todo-app">
                <AppHeader toDo={elementsToDo} done={elementsDone}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}/>
                <ItemAddForm onAddItem={this.addItem}></ItemAddForm>
            </div>
        )
    };

};
