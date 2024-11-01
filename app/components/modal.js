'use client';
import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import CloseIcon from '@mui/icons-material/Close';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import backgroundImage from "../../public/download2.jpg";
import Image from "next/image";

const SwipeableModal = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const infoSlides = [
    {
      image: backgroundImage,
      title: "Surgical Scalpels",
      description1: "Length (right):",
      description1_ans: "150 mm (15 cm)",
      description2: "Length (right):",
      description2_ans: "150 mm (15 cm)",
      additionalInfo: "Precision cutting tool designed for surgical procedures and dissections, with fixed performance blades for reliability.",
    },
    {
      image: backgroundImage,
      title: "Test Tube Holder",
      description1: "Length (right):",
      description1_ans: "150 mm (15 cm)",
      description2: "Length (right):",
      description2_ans: "150 mm (15 cm)",
      additionalInfo: "Precision cutting tool designed for surgical procedures and dissections, with fixed performance blades for reliability.",
    },
    {
      image: backgroundImage,
      title: "Surgical Scalpels",
      description1: "Length (right):",
      description1_ans: "150 mm (15 cm)",
      description2: "Length (right):",
      description2_ans: "150 mm (15 cm)",
      additionalInfo: "Precision cutting tool designed for surgical procedures and dissections, with fixed performance blades for reliability.",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((index + 1) % infoSlides.length),
    onSwipedRight: () => setIndex((index - 1 + infoSlides.length) % infoSlides.length),
    trackMouse: true,
  });

  return (
    <div className="flex justify-center items-center">
      <Button
        variant="contained"
        color="secondary"
        onClick={handleOpen}
        className="bg-white text-black font-bold rounded-full px-6 py-2 m-5"
      >
        Explore Now
      </Button>

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
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
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
              <div className="mx-10 md:my-auto">
                <h2 className="text-4xl font-bold my-5">{infoSlides[index].title}</h2>
                <p className="md:mb-4">
                  <strong>{infoSlides[index].description1}:</strong>
                  {infoSlides[index].description1_ans}
                </p>
                <p className="md:mb-4">
                  <strong>{infoSlides[index].description2}:</strong>
                  {infoSlides[index].description2_ans}
                </p>
                <p className="text-lg text-wrap pr-16">{infoSlides[index].additionalInfo}</p>
              </div>
            </div>
          </div>

          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Button
              onClick={() => setIndex((index - 1 + infoSlides.length) % infoSlides.length)}
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