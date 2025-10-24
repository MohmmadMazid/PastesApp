import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePaste } from "../redux/features/slice";

const UpdatePaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pastes = useSelector((state) => state.pastes.pastes);

  const thisPaste = pastes.find((paste) => paste.id === id);

  const [pasteData, setPasteData] = useState({
    title: "",
    description: "",
    id: "",
  });

  useEffect(() => {
    if (thisPaste) {
      setPasteData({
        title: thisPaste.title,
        description: thisPaste.description,
        id,
      });
    }
  }, [id, thisPaste]);

  const handleInputChange = (e) => {
    setPasteData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdatePaste = (e) => {
    e.preventDefault();
    dispatch(updatePaste(pasteData));
    setPasteData({ title: "", description: "" });
    navigate("/paste");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 drop-shadow-lg">
          Update Your Paste
        </h1>
        <p className="text-gray-300 text-sm md:text-base mt-1">
          Edit your content and save changes ✍️
        </p>
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleUpdatePaste}
        className="flex flex-col gap-4 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
      >
        <input
          name="title"
          value={pasteData.title}
          onChange={handleInputChange}
          placeholder="Enter a title..."
          className="w-full h-[50px] text-lg p-3 outline-none border border-gray-600 focus:border-indigo-400 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 transition-all duration-200"
        />

        <textarea
          name="description"
          value={pasteData.description}
          onChange={handleInputChange}
          placeholder="Update your paste..."
          className="w-full min-h-[300px] text-lg p-3 outline-none border border-gray-600 focus:border-indigo-400 rounded-lg bg-gray-900/70 text-white placeholder-gray-400 resize-none transition-all duration-200 overflow-y-auto"
        ></textarea>

        <button
          type="submit"
          className="self-end bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-150 px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-indigo-600/40"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePaste;
