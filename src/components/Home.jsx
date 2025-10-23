import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createPaste } from "../redux/features/slice";

const Home = () => {
  const dispatch = useDispatch();
  const [pasteData, setPasteData] = useState({
    title: "",
    description: "",
  });

  const handleInputefield = (e) => {
    setPasteData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPaste(pasteData));
    setPasteData({
      title: "",
      description: "",
    });
  };
  return (
    <div
      className=" flex  flex-col  gap-3 bg-gray-800 min-h-[582px] w-full
       text-white"
    >
      <div>
        <h1 className="text-2xl font-bold text-center ">Create Your Paste</h1>
      </div>
      <div className="flex justify-center  ">
        <form className=" flex flex-col p-5 bg-slate-700 w-2/3  rounded-xl ">
          <input
            name="title"
            value={pasteData.title}
            placeholder="title"
            onChange={handleInputefield}
            className="w-full h-[50px] text-lg p-2 outline-0 border-1 border-white 
            rounded-lg "
          />
          <textarea
            name="description"
            value={pasteData.description}
            placeholder="write paste"
            onChange={handleInputefield}
            className="max-w-full w-full min-h-[400px] mt-3 outline-0 border-1 border-white p-2 rounded-lg text-lg overflow-y-auto "
          ></textarea>
          <button
            className="border rounded-lg px-2 py-1 bg-slate-800 font-semibold self-end mt-2
          hover:bg-slate-950 "
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
