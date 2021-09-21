import { CREATE_USER, EDIT_USER, DELETE_USER } from "./actionTypes";

export const createUser = data => ({
  type: CREATE_USER,
  payload: data
});

export const editUser = data => ({
  type: EDIT_USER,
  payload: data
});

export const deleteUser = email => ({
  type: DELETE_USER,
  payload: { email }
});

