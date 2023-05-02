import React, { useEffect, useState } from "react";

const ImagStyle = () => {
  const [images, setImages] = useState([]);
  const [mainImg, setMainImg] = useState();
  // console.log(mainImg);

  // ========data load from json(useEffect)
  useEffect(() => {
    fetch("img.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setMainImg(data[0]);
      });
  }, []);
  // console.log(mainImg);

  const handleImg = (image) => {
    setMainImg(image);
  };
  // console.log(mainImg);

  return (
    <div>
      <div className=" w-full h-[1000px] translate-all text-center flex flex-col items-center justify-center bg-slate-400 ">
        <div className="flex gap-x-6">
          {/*=============== Fixed img  */}
          <div className="">
            <img src={mainImg?.img} alt="" />
            {/* {images?.slice(0, 1).map((img) => (
              <div key={img.id} className="">
                <img
                  className="w-96 rounded-lg overflow-hidden  "
                  src={img.img}
                  alt=""
                />
              </div>
            ))} */}
          </div>
          {/* ===============low opacity img is here */}
          <div className="">
            {images?.map((img) => (
              <div key={img.id} className=" space-y-6 p-4 ">
                <img
                  className="w-36 opacity-50 mb-0"
                  src={img.img}
                  alt=""
                  onClick={() => handleImg(img)}
                  // defaul img set korte hobe
                />
                <h2 className="text-black mt-0">{img.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagStyle;
