import React from "react";
import { AppContextWrapper } from "../context/app-context/app-context";

export const Card = ({ username, id }) => {
  const { dispatch } = React.useContext(AppContextWrapper);
  const [isEdit, setIsEdit] = React.useState(false);
  const [editValue, setEditValue] = React.useState(username);

  const deleteItem = () => {
    dispatch({ type: "DELETE_USER", id });
  };

  const saveUpdate = () => {
    dispatch({ type: "UPDATE_USER", value: { id, username: editValue } });
    setIsEdit(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
      {isEdit ? (
        <input
          className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg mb-4"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          type="text"
          autoFocus
        />
      ) : (
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{username}</h2>
      )}

      <div className="flex gap-3">
        <button 
          onClick={deleteItem} 
          className="px-6 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer transition-all duration-200"
        >
          O'chirish
        </button>

        {isEdit ? (
          <button 
            onClick={saveUpdate} 
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer transition-all duration-200"
          >
            Saqlash
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer transition-all duration-200"
          >
            Tahrirlash
          </button>
        )}
      </div>
    </div>
  );
};
