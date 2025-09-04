import { ADDED, TOGGLED, COLORSELCTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED } from "./actionTypes"

export const added = (toditext) => {
   return {
    type : ADDED,
    payload: toditext
   } 
}

export const toggled = (todoId) => {
   return {
    type : TOGGLED,
    payload: todoId
   } 
}

export const colorselected = (todoId, color) => {
   return {
    type : COLORSELCTED,
    payload: {
        todoId : todoId,
        color : color
    }
   } 
}

export const deleted = (todoId) => {
   return {
    type : DELETED,
    payload: todoId
   } 
}

export const allcompleted = () => {
   return {
    type : ALLCOMPLETED
   } 
}

export const clearcompleted = () => {
   return {
    type : CLEARCOMPLETED,
   } 
}