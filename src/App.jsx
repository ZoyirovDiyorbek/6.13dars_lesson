import React from "react";
import { Form } from "./components/form";
import { AppContextWrapper } from "./context/app-context/app-context";
import { Card } from "./components/card";

function App() {
  const { data } = React.useContext(AppContextWrapper);
  return (
    <div className="container">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-6 text-center drop-shadow-lg">
          Foydalanuvchilar Ro'yxati
        </h1>
        <Form />
        <div className="space-y-4">
          {data?.userList?.length > 0 ? (
            data.userList.map((item) => (
              <Card key={item.id} username={item.username} id={item.id} />
            ))
          ) : (
            <div className="text-center py-12 bg-white/50 rounded-2xl">
              <p className="text-gray-600 text-xl">Hozircha foydalanuvchilar yo'q</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
