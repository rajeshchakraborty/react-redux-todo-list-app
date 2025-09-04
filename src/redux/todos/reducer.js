import { ADDED, TOGGLED, COLORSELCTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED } from "./actionTypes"
 
const initialState = [{
        id: 1,
        text: "Complte React js",
        completed: true,
        color: "yellow"
    },{
        id: 2,
        text: "Complte Redux",
        completed: false,
        color: "red" 
    }
];

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todos)=> Math.max(todos.id, maxId), -1);
    return maxId + 1;
};

const reducer = ( state = initialState, action) => {
    switch (action, action.type) {
        case ADDED:
            return[
               ...state,
               {
                 id:nextTodoId(state),
                 text: action.payload,
                 completed: false,
                 color: null,
               } 
            ]
        case TOGGLED: 
            return state.map(todo=>{
                if(todo.id !== action.payload){
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        
        case COLORSELCTED: 
            const {todoId, color} = action.payload;
            return state.map((todo)=>{
                if(todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color:color
                }
            })
            
        case DELETED: 
            return state.filter(function (todo) {
                return todo.id !== action.payload;
            });
  
        case ALLCOMPLETED:
            return state.map(todo=>{
                return{
                    ...todo,
                    completed: true,
                }
            })

        case CLEARCOMPLETED:
            return state.filter(function(todo) {
                return !todo.completed;
            });

        default:
            return state;
    }
}

export default reducer;