
import { statuschange , colorchange } from "../redux/filters/actions"
import { useSelector, useDispatch } from "react-redux";

const numberOfTodos = (no_of_todos)=>{
    switch (no_of_todos) {
        case 0:
            return "No task"
        case 1:
            return "1 task"
        default:
            return `${no_of_todos} tasks` 
    }
}

export default function Footer({todo}) {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todos);
    const filters = useSelector((state)=>state.filters)
    const { status , colors } = filters ;


    const handelStatusChange = (status)=>{
        dispatch(statuschange(status))
    }

    const handelColorChange = (color)=>{
        if(colors.includes(color)){
            dispatch(colorchange(color, "removed"));
        }
        else{
            dispatch(colorchange(color, "added"));
        }
    }

    const todosRemainning = todos.filter((todo=> !todo.completed)).length;
    
    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todosRemainning)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === "All" && 'font-bold'}`}
                    onClick={()=>handelStatusChange("All")}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Incomplete" && 'font-bold'}`}
                    onClick={()=>handelStatusChange("Incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === "Complete" && 'font-bold'}`}
                    onClick={()=>handelStatusChange("Complete")}>Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes("green") && 'bg-green-500'}`} 
                    onClick={()=> handelColorChange("green")}></li>
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && 'bg-red-500'}`} 
                    onClick={()=> handelColorChange("red")}></li>
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && 'bg-yellow-500'}`} 
                    onClick={()=> handelColorChange("yellow")}></li>
            </ul>
        </div>
    );
}
