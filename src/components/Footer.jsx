import logo from "../assets/react.svg";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSnapchat } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex  flex-col justify-center mt-20 gap-7  items-center px-6  bg-slate-500 p-10">
      <div className="flex gap-6">
        <img src={logo} alt="logo" />
        <FiInstagram size={30} />
        <FaXTwitter size={30} />
        <MdOutlineMailOutline size={30} />
        <FaSnapchat size={30} />
      </div>
      <p>©{year}. All rights reserved.</p>
    </div>
  );
}

export default Footer;
