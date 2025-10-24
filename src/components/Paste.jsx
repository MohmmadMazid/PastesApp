import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePaste } from "../redux/features/slice";
import { FaPen } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { GoEye } from "react-icons/go";
import { MdDelete } from "react-icons/md";

const Paste = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pastes.pastes);
  const [copied, setCopied] = useState(null);

  const handleDeletePaste = (id) => {
    dispatch(deletePaste(id));
  };

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      {/* Header */}
      <h1 className="text-center text-3xl font-extrabold text-indigo-400 drop-shadow-lg mb-6">
        All Your Pastes
      </h1>

      {/* Paste List Container */}
      <div className="flex justify-center">
        <div className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/10 p-4 space-y-4">
          {data.length === 0 ? (
            <p className="text-center text-gray-400 italic">
              No pastes yet. Create one to get started! ✨
            </p>
          ) : (
            data.map((paste, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border border-white/10 bg-gray-900/60 rounded-xl p-4 hover:border-indigo-400 transition-all duration-200"
              >
                {/* Paste Info */}
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-indigo-300 truncate">
                    {paste.title || "Untitled Paste"}
                  </h2>
                  <p className="text-gray-400 mt-1 text-sm line-clamp-2">
                    {paste.description
                      ? paste.description.slice(0, 80) + "..."
                      : "No description available"}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <Link
                    to={`/update/${paste.id}`}
                    className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-150 shadow-md hover:shadow-indigo-600/30"
                    title="Edit Paste"
                  >
                    <FaPen size={16} />
                  </Link>

                  <Link
                    to={`/seePaste/${paste.id}`}
                    className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-150 shadow-md hover:shadow-blue-600/30"
                    title="View Paste"
                  >
                    <GoEye size={18} />
                  </Link>

                  <button
                    onClick={() => handleCopy(paste.title, paste.id)}
                    className="p-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-150 shadow-md hover:shadow-green-600/30"
                    title="Copy Title"
                  >
                    {copied === paste.id ? (
                      <LiaCheckDoubleSolid size={18} />
                    ) : (
                      <FaRegCopy size={16} />
                    )}
                  </button>

                  <button
                    onClick={() => handleDeletePaste(paste.id)}
                    className="p-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-150 shadow-md hover:shadow-red-600/30"
                    title="Delete Paste"
                  >
                    <MdDelete size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;
