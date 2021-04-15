import firebase from '../store/firebase';
export interface Todo {
    id?: string;
    name: string;
    date?: { seconds: number, nanoseconds: number }
}
const db = firebase.collection("todos");

class TodoService {
    getAll() {
        return db;
    }

    create(todo: Todo) {
        return db.add(todo);
    }

    update(id: string, value: Todo) {
        return db.doc(id).update(value);
    }

    delete(id: string) {
        return db.doc(id).delete();
    }
}

export default new TodoService();
