import { Item } from "@/types/Item";
type AddAction = {
    type: 'add',
    payload: {newText: string}
}

type EditAction = {
    type: 'edit',
    payload: {
        id: number,
        newText: string
    }
}
type ToggleDoneAction = {
    type: 'toggleDone',
    payload: {
        id: number;
        done: boolean;

    }
}
type DeleteAction = {
    type: 'delete',
    payload:{
        id: number;
    }
}

type ListActions = AddAction | EditAction | ToggleDoneAction | DeleteAction;

export const listReducer = (list: Item[], action: ListActions) => {

    switch(action.type) {
        case 'add':
            return [...list,{
                id: list.length,
                text: action.payload.newText,
                done: false
            }]

        case 'edit':
            return list.map(item => {
             if(item.id === action.payload.id)
             item.text = action.payload.newText
             return item;
            })

        case 'delete':
            return list.filter(item => item.id !== action.payload.id)

        case 'toggleDone':
            return list.map(item => {
                if(item.id === action.payload.id) item.done = action.payload.done;
                return item;
            })
        default:
            return list;
    }

}