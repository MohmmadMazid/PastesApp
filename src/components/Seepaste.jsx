import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Seepaste = () => {
  const id = useParams().id;
  const pastes = useSelector((state) => state.pastes.pastes);
  let thisPastedata = pastes.find((paste) => paste.id === id);
  console.log(thisPastedata);
  const [pasteData, setPasteData] = useState({
    title: "",
    description: "",
    id: "",
  });

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

  return (
    <div
      className=" flex  flex-col  gap-3 bg-gray-800 min-h-screen w-full
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
            readOnly
            className="w-full h-[50px] text-lg p-2 outline-0 border-1 border-white 
            rounded-lg "
          />
          <textarea
            name="description"
            value={pasteData.description}
            placeholder="write paste"
            readOnly
            className="max-w-full w-full min-h-[400px] mt-3 outline-0 border-1 border-white p-2 rounded-lg text-lg
            overflow-y-auto "
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Seepaste;
