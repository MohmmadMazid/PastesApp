import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePaste } from "../redux/features/slice";
import { LuPenLine } from "react-icons/lu";
import { FaPen } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { GoEye } from "react-icons/go";
import { MdDelete } from "react-icons/md";

const Paste = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.pastes.pastes);
  const [copied, setCopied] = useState(null);

  // console.log(data.length);
  const handleDeletePaste = (id) => {
    dispatch(deletePaste(id));
  };
  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000); // Reset "copied" state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div
      className=" flex flex-col bg-gray-800 min-h-screen w-full
       text-white"
    >
      <h1 className="text-center text-xl font-semibold">
        All paste will be here
      </h1>
      <div className=" flex justify-center mt-4 ">
        <div className="w-2/3 flex flex-col bg-slate-700 rounded-xl ">
          {data.map((paste, i) => {
            return (
              <div
                key={i}
                className=" flex sm:flex-col  md:flex-row justify-between border border-white/10 m-2 min-h-[100px] p-2 
                 rounded-lg  "
              >
                <div>
                  <h1 className="text-4xl">{paste.title}</h1>
                  {/* <p>{paste.description.slice(0, 10)}...</p> */}
                </div>
                <div className="mr-3 flex flex-wrap md:flex-row items-start ">
                  <Link
                    to={`/update/${paste.id}`}
                    className="border px-2 py-1 bg-slate-700 hover:bg-slate-900 rounded-lg m-2 "
                  >
                    <FaPen />
                  </Link>

                  <button
                    onClick={() => handleDeletePaste(paste.id)}
                    className="border px-2 py-1 bg-slate-700 hover:bg-slate-900 rounded-lg m-2 "
                  >
                    <MdDelete />
                  </button>
                  <Link
                    to={`/seePaste/${paste.id}`}
                    className="border px-2 py-1 bg-slate-700 hover:bg-slate-900 rounded-lg m-2 "
                  >
                    <GoEye />
                  </Link>
                  <button
                    onClick={() => handleCopy(paste.title, paste.id)}
                    className="border px-2 py-1 bg-slate-700 hover:bg-slate-900 rounded-lg m-2 "
                  >
                    {copied === paste.id ? (
                      <LiaCheckDoubleSolid />
                    ) : (
                      <FaRegCopy />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Paste;
