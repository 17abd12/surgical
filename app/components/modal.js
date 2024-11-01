"use client";
import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image1 from "../../public/download2.png";
import Image2 from "../../public/download3.png";
import Image3 from "../../public/download4.png";
import Image4 from "../../public/download5.png";
import Image5 from "../../public/download6.png";
import Image6 from "../../public/download7.png";
import Image from "next/image";

const SwipeableModal = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const infoSlides = [
    {
      image: Image6,
      title: "Gross Maier Forceps",
      description1: "Length: ",
      description1_ans: "200 mm (20 cm)",
      description2: "Opening Width: ",
      description2_ans: "Up to 180 mm",
      additionalInfo:
        "Curved forceps with serrated jawsand a ratchet mechanism, ideal forsecurely holding dressings duringsurgical procedures",
    },
    {
      image: Image5,
      title: "Crucible Tongs", 
      description1: "Length: ",
      description1_ans: "260 mm (26 cm)",
      description2: "Opening Width: ",
      description2_ans: "Up to 130 mm",
      additionalInfo:
        " Crucible Tongs (Curved End) designed for safely handling hot crucibles and glassware in the lab."
,
    },
    {
      image: Image2,
      title: "Surgical Scalpels",
      description1: "Length (right): ",
      description1_ans: "150 mm (15 cm)",
      description2: "Length (right): ",
      description2_ans: "150 mm (15 cm)",
      additionalInfo:
        "Precision cutting tool designed for surgical procedures and dissections, with fixed performance blades for reliability.",
    },
    {
      image: Image4,
      title: "Test Tube Holder",
      description1: "Length: ",
      description1_ans: "140 mm (14 cm)",
      description2: "Opening Width: ",
      description2_ans: "Up to 80 mm",
      additionalInfo:
        "Durable holder for securely grasping test tubes during experiments.",
    },
    {
      image: Image3,
      title: "Lab Spatula",
      description1: "Length: ",
      description1_ans: "300 mm (30 cm)",
      description2: "Tip Dimensions: ",
      description2_ans: "130 mm with round and flat tips",
      additionalInfo:
        " Versatile spatula featuring two tips for mixing, spreading, and transferring materials in laboratory settings.",
    },
    {
      image: Image1,
      title: "Surgical Scissors",
      description1: "Length: ",
      description1_ans: "140 mm (14 cm)",
      description2: "",
      description2_ans: "",
      additionalInfo:
        "Sharp scissors designed for clean cuts in surgical and dissection tasks..",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((index + 1) % infoSlides.length),
    onSwipedRight: () =>
      setIndex((index - 1 + infoSlides.length) % infoSlides.length),
    trackMouse: true,
  });

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleOpen}
        className="bg-white text-black font-bold rounded-full px-6 py-2 m-5 transition duration-200 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        View our Products
      </button>

      <Modal open={open} onClose={handleClose}>
        <Box
          className="px-6 bg-white rounded-lg shadow-lg mx-auto w-3/4 max-h-[90vh] overflow-y-auto"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
          {...handlers}
        >
          <div className="absolute top-4 right-4">
            <Button
              onClick={handleClose}
              className="bg-white text-black font-bold rounded-full p-2"
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
              <div className="flex-shrink-0 align-center justify-center">
                <Image
                  src={infoSlides[index].image}
                  alt={infoSlides[index].title}
                  className="object-cover rounded mb-4"
                  layout="responsive" // Ensures responsive image
                  width={400} // Set width according to your needs
                  height={300} // Set height according to your needs
                />
              </div>
              <div className="mx-10 md:my-auto py-7">
                <h2 className="text-4xl font-bold my-5">
                  {infoSlides[index].title}
                </h2>
                <p className="md:mb-4">
                  <strong>{infoSlides[index].description1}</strong>
                  {infoSlides[index].description1_ans}
                </p>
                <p className="md:mb-4">
                  <strong>{infoSlides[index].description2}</strong>
                  {infoSlides[index].description2_ans}
                </p>
                <p className="text-lg text-wrap pr-16">
                  {infoSlides[index].additionalInfo}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Button
              onClick={() =>
                setIndex((index - 1 + infoSlides.length) % infoSlides.length)
              }
              className="text-primary font-bold"
            >
              <ArrowLeftIcon />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Button
              onClick={() => setIndex((index + 1) % infoSlides.length)}
              className="text-primary font-bold"
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SwipeableModal;
