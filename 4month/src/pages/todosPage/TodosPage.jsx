import Todo from "../../components/todo/Todo";


function TodosPage(props) {
    let arr = ["todo 1", "todo 2", "todo 3"]
    return (
        <div>
            {arr.map((item, i) => (
                <Todo children={item}/>
            ))}
        </div>
    );
}

export default TodosPage;