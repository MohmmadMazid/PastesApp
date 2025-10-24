import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPaste } from "../redux/features/slice";

const Home = () => {
  const dispatch = useDispatch();
  const [pasteData, setPasteData] = useState({
    title: "",
    description: "",
  });

  const handleInputField = (e) => {
    setPasteData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPaste(pasteData));
    setPasteData({ title: "", description: "" });
  };

  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-2 drop-shadow-lg">
          Create Your Paste
        </h1>
        <p className="text-gray-300 text-sm md:text-base">
          Save your notes, code snippets, or ideas easily ✨
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full  bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
      >
        <input
          name="title"
          value={pasteData.title}
          placeholder="Enter a title..."
          onChange={handleInputField}
          className="w-full h-[50px] text-lg p-3 outline-none border border-gray-600 focus:border-indigo-400 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 transition-all duration-200"
        />

        <textarea
          name="description"
          value={pasteData.description}
          placeholder="Write your paste here..."
          onChange={handleInputField}
          className="w-full min-h-[300px] text-lg p-3 outline-none border border-gray-600 focus:border-indigo-400 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 resize-none transition-all duration-200"
        ></textarea>

        <button
          type="submit"
          className="self-end bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-150 px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-indigo-600/40"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
