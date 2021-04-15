import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { AppState } from '../store'
import { useForm } from "react-hook-form";
import TodoService, { Todo } from '../services/todo.service'
import moment from 'moment'

interface TodoForm {
    itemname: string
}
export default function FirebaseTest(props: RouteComponentProps) {
    useFirestoreConnect([
        { collection: 'todos' } // or 'todos'
    ])
    const [currentId, setCurrentId] = useState("")
    const { register, errors, handleSubmit, setValue } = useForm<TodoForm>();

    const todos: Todo[] = useSelector((state: AppState) => state.firestore.ordered.todos)
    const firestore = useSelector((state: AppState) => state.firestore)
    const submitSignUp = (data: TodoForm) => {
        if (currentId !== "")
            TodoService.update(currentId, { name: data.itemname })
                .then(() => {
                    setValue("itemname", "")
                    setCurrentId("");

                    console.log("item updated successfully");

                })
                .catch((e) => {
                    console.log(e);
                });
        else
            TodoService.create({ name: data.itemname })
                .then(() => {
                    setValue("itemname", "")
                    console.log("item added successfully");

                })
                .catch((e) => {
                    console.log(e);
                });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(submitSignUp)}>
                <div className="input-text">
                    <input type="text" name="itemname" ref={register({ required: true, maxLength: 50 })} autoComplete="off" className="input" id="itemname" placeholder="Some work to do " />
                    <label htmlFor="itemname">Full Name</label>
                </div>
                {errors.itemname?.type == 'required' && <p className="error">Your item name is required</p>}
                {errors.itemname?.type == "maxLength" && <p className="error">Item name must be less than 50 characters</p>}
            </form>
            <ul className="todos">
                {
                    !firestore.status.requesting.todos ?
                        todos && todos.length ? todos.map((t, i) => <li key={t.id}>{i + 1}. {t.name} - {moment(t.date?.seconds).format("MMM DD, YYYY")}
                            <div>
                                <button className="btn btn-primary btn-sm" onClick={() => {
                                    setCurrentId(t.id || "");
                                    setValue("itemname", t.name);
                                }}>Edit</button>
                                <button onClick={() => {
                                    const value: boolean = window.confirm("Are you sure you want to delete this item?")
                                    value && TodoService.delete(t?.id || "")
                                }} className="btn btn-primary btn-sm">
                                    Delete
                    </button>
                            </div>
                        </li>) : <p>No todo in the list</p> : <p>Loading...</p>}
            </ul>
        </div>
    )
}