import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Seepaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.pastes.pastes);
  const thisPaste = pastes.find((paste) => paste.id === id);

  const [pasteData, setPasteData] = useState({
    title: "",
    description: "",
    id: "",
  });

  // Load the paste data when the component mounts
  useEffect(() => {
    if (thisPaste) {
      setPasteData({
        title: thisPaste.title,
        description: thisPaste.description,
        id,
      });
    }
  }, [id, thisPaste]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 drop-shadow-lg">
          View Your Paste
        </h1>
        <p className="text-gray-300 text-sm md:text-base mt-1">
          Here’s your saved snippet 👇
        </p>
      </div>

      {/* Paste Display */}
      <div className="w-full  bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10">
        <input
          name="title"
          value={pasteData.title}
          readOnly
          placeholder="Title"
          className="w-full h-[50px] text-xl font-semibold p-3 outline-none border border-gray-600 focus:border-indigo-400 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 transition-all duration-200"
        />

        <textarea
          name="description"
          value={pasteData.description}
          readOnly
          placeholder="Your paste content..."
          className="w-full min-h-[350px] text-lg p-3 mt-4 outline-none border border-gray-600 focus:border-indigo-400 rounded-lg bg-gray-900/70 text-gray-100 placeholder-gray-400 resize-none transition-all duration-200 overflow-y-auto"
        ></textarea>

        <div className="text-right mt-4 text-gray-400 text-sm">
          Paste ID: <span className="text-indigo-400 font-mono">{id}</span>
        </div>
      </div>
    </div>
  );
};

export default Seepaste;
