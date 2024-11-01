// app/page.js
// "use server"
import Link from "next/link";
import Logo from "../public/logo.png";
import backgroundImage from "../public/download1.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";
import SwipeableModal from "./components/modal";

export default function HomePage() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage.src})`, // Use .src to get the URL
    backgroundSize: "cover", // Ensure the image covers the entire div
    backgroundPosition: "center", // Center the image
    minHeight: "100vh", // Full viewport height
    display: "flex", // Center content
    alignItems: "center", // Center content vertically
    justifyContent: "center", // Center content horizontally
  };
  return (
    <div className="flex justify-center" style={backgroundStyle}>
      <div className="fixed inset-0 bg-black opacity-70"></div>

      <div className="relative text-center px-4 text-white">
        <div className="m-4 flex justify-center">
        <Image className="object-cover md:h-1/3 md:w-1/2" src={Logo} alt="Logo" />
        </div>
        <div className="justify-center flex">
          <h1 className="text-3xl md:text-5xl font-bold text-wrap w-3/4 font-custom leading-loose" 
          style={{ lineHeight: '1.7' }} >
            Discover our quality lab and surgical equipment for precision and
            reliability.
          </h1>
        </div>
        <div>
          {/* <Button
              variant="contained"
              color="secondary"
              className="bg-white text-black font-bold rounded-full px-6 py-2 m-5"
            >
              Explore Now
            </Button> */}
          <SwipeableModal />
          <Link href="/info" passHref>
            <button className="bg-white text-black font-bold rounded-full px-6 py-2 m-2 transition duration-200 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
