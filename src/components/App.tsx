import Navbar from "./Navbar";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoProvider from "../contexts/TodoContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <TodoProvider>
            <Router>
                <Navbar />
                <br />
                <div className="uk-container">
                    <Routes>
                        <Route path="/create" element={<AddTodo />} />
                        <Route
                            path="/"
                            element={
                                <>
                                    <h4>Minha lista de tarefas</h4>
                                    <TodoList />
                                </>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </TodoProvider>
    );
};

export default App;
