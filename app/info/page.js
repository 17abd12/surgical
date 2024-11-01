import Link from "next/link";
import Logo from "../../public/logo1.png";
import backgroundImage from "../../public/download1.jpg";
import Image from "next/image";
import Button from "@mui/material/Button";
function infoPage() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage.src})`, // Use .src to get the URL
        backgroundSize: "cover", // Ensure the image covers the entire div
        backgroundPosition: "center", // Center the image
        minHeight: "100vh", // Full viewport height
        display: "flex", // Center content
        alignItems: "center", // Center content vertically
        // justifyContent: "center", // Center content horizontally
      };
      return (
        <div className="" style={backgroundStyle}>
          <div className="fixed inset-0 bg-black opacity-70"></div>
          <div className=" text-white relative px-4 ml-5 md:mr-28 mr-16 container">
            <div className="flex justify-center">
                <Image className = "object-cover"  src={Logo} alt="Logo" />
            </div>
        <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <p className=" leading-loose">
            Hi, I’m Nimra Anjum, Founder and CEO of Nimmar Lab and
 Surgical Instruments. I’m delighted to welcome you to our
 page!
            </p>
            <p className=" leading-loose">
            We are dedicated to quality and precision in the design and
            manufacturing of laboratory and surgical instruments with a
            background in medicine, I understand firsthand the critical
            role that well-crafted instruments play in these settings. Our
            products are made from long-lasting materials, ensuring
            reliable performance in demanding environments. we believe
            that the right tools can make a significant difference in
            research and medical practices, which drives us to deliver
            instruments that empower professionals to achieve their best
            work
            </p>
            <p className=" leading-loose">
            Thank you for choosing Nimmar Lab and Surgical Instruments.
            We are committed to excellence and innovation in every
            product we offer, and we look forward to supporting your
            laboratory and surgical needs.
            </p>
        </div>

        <div className="space-y-4 flex flex-col align-middle justify-center my-10">
            <h1 className="text-3xl font-bold text-white">Contact Us</h1>
            <div className="space-y-4">
                <p> <strong>Email:</strong> <a href="mailto:contact@companyxyz.com" className="text-blue-400 hover:underline">contact@companyxyz.com</a></p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
            </div>
        </div>
    </div>
        </div>
      );
}

export default infoPage
