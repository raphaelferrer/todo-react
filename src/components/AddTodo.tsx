import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TodoContextType } from "../contexts/TodoContextType";

const schema = yup.object({
    title: yup.string().required("Tarefa inválida."),
});

interface AddTodoForm {
    title: string;
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddTodoForm>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddTodoForm) => {
        addTodo(data.title);
        window.location.href = "/";
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Nova Tarefa</h4>

            <div className="uk-margin uk-width-1-1">
                <input
                    type="text"
                    placeholder="Nova tarefa..."
                    className="uk-input"
                    {...register("title")}
                />

                <span>
                    <small>
                        <strong className="uk-text-danger">
                            {errors.title?.message}
                        </strong>
                    </small>
                </span>
            </div>

            <div className="uk-width-1-1">
                <button
                    type="submit"
                    className="uk-button uk-button-primary"
                >
                    Salvar
                </button>
            </div>
        </form>
    );
};

export default AddTodo;
