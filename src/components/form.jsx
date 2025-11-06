import React from "react";
import { AppContextWrapper } from "../context/app-context/app-context";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

export const Form = () => {
  const { handleSubmit, reset, register } = useForm();
  const { dispatch } = React.useContext(AppContextWrapper);

  const submit = (data) => {
    dispatch({ type: "CREATE_USER", value: { ...data, id: nanoid() } });
    reset();
  };
  return (
    <form className="flex gap-3 mb-8" onSubmit={handleSubmit(submit)}>
      <input 
        className="flex-1 px-5 py-4 bg-white rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-xl text-lg border-2 border-transparent hover:border-purple-300" 
        {...register("username")} 
        type="text" 
        placeholder="Foydalanuvchi nomini kiriting..."
      />
      <button 
        className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer transition-all duration-200" 
        type="submit"
      >
        Qo'shish
      </button>
    </form>
  );
};
