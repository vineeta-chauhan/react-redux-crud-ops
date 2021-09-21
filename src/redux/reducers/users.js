import { CREATE_USER, DELETE_USER, EDIT_USER } from "../actionTypes";

const initialState = {
  allUser: {
  }
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      const data = action.payload;
      const { email } = data;
      const viewUsers = { ...state.allUser }
      viewUsers[email] = data;
      return {
        ...state, allUser: viewUsers
      }
    }
  
    case DELETE_USER: { 
      const { email } = action.payload;
      const viewUsers = { ...state.allUser };
      // deleting user from object
      delete viewUsers[email];
      return {
        ...state,
        allUser: viewUsers
      };
    }
  
    case EDIT_USER: { 
      const data = action.payload;
      const { userEmail, email } = data;
      delete data.userEmail;
      const viewUsers = { ...state.allUser };

      const userDetails = {
        ...viewUsers[userEmail],
        ...data,
      };
      delete viewUsers[userEmail];

      viewUsers[email] = userDetails;
      return {
        ...state,
        allUser: viewUsers
      };
    }
  
    default:
      return state;
  }
}
export default users;