// app/page.js
// "use server"
import Link from "next/link";
import Logo from "../public/logo1.png";
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

      <div className="relative text-center px-4 text-white ">
        <div className="mb-4 flex justify-center">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="justify-center flex">
          <h1 className="text-3xl md:text-5xl font-bold text-wrap w-3/4 font-custom">
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
            <SwipeableModal/>
          <Link href="/info" passHref>
            <Button
              variant="contained"
              color="secondary"
              className="bg-white text-black font-bold rounded-full px-6 py-2 m-5"
            >
              About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
