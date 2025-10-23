import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updatePaste } from "../redux/features/slice";

const UpdatePaste = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const pastes = useSelector((state) => state.pastes.pastes);
  const dispatch = useDispatch();
  let thisPastedata = pastes.find((paste) => paste.id === id);
  console.log(thisPastedata);
  const [pasteData, setPasteData] = useState({
    title: "",
    description: "",
    id: "",
  });

  const handleInputefield = (e) => {
    setPasteData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdatePaste = (e) => {
    e.preventDefault();
    dispatch(updatePaste(pasteData));
    setPasteData({
      title: "",
      description: "",
    });
    navigate("/paste");
  };

  // this will intialy load the data time of mounting
  useEffect(() => {
    if (thisPastedata) {
      setPasteData({
        title: thisPastedata.title,
        description: thisPastedata.description,
        id: id,
      });
    }
  }, []);

  console.log(thisPastedata, pastes);
  return (
    <div
      className=" flex  flex-col  gap-3 bg-gray-800 min-h-[582px] w-full
       text-white"
    >
      <div>
        <h1 className="text-2xl font-bold text-center ">Hello paste APP</h1>
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
            className="max-w-full w-full min-h-[400px] mt-3 outline-0 border-1 border-white p-2 rounded-lg text-lg
            overflow-y-auto "
          ></textarea>
          <button
            className="border rounded-lg px-2 py-1 bg-slate-800 font-semibold self-end mt-2
          hover:bg-slate-950 "
            onClick={handleUpdatePaste}
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePaste;
