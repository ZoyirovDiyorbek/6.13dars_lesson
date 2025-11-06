import React from "react";
import { loadState, saveState } from "../../config/storage";

export const AppContextWrapper = React.createContext();

const initialValue = loadState("users") || {
  userList: [],
};

const appreducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, userList: [...state.userList, action.value] };
    case "DELETE_USER":
      return {
        ...state,
        userList: state.userList.filter((item) => item.id !== action.id),
      };
    case "UPDATE_USER":
      return {
        ...state,
        userList: state.userList.map((item) =>
          item.id === action.value.id ? { ...item, ...action.value } : item
        ),
      };
    default:
      return state;
  }
};

export const AppContext = ({ children }) => {
  const [data, dispatch] = React.useReducer(appreducer, initialValue);

  React.useEffect(() => {
    saveState("users", data);
  }, [data]);

  return (
    <AppContextWrapper.Provider value={{ data, dispatch }}>
      {children}
    </AppContextWrapper.Provider>
  );
};
