export const todoAction = {
    CREATE_TODO: "ADD_TODO",
    EDIT_TODO: "EDIT_TODO",
    DELETE_TODO: "DELETE_TODO",
};
export const todoReducer = (state, action) => {
    switch (action.type) {
        case todoAction.CREATE_TODO:
            return { ...state, todoList: [...state.todoList, action.value] };
        case todoAction.EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map((item) =>
                    item.id === action.value.id ? action.value : item
                ),
            };
        case todoAction.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(
                    (item) => item.id !== action.value.id
                ),
            };
        default:
            return;
    }
};
