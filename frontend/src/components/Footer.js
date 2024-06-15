import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
        <Link to={"/"}>
          <img src={LogoWhite} alt="" />
        </Link>
        Copyright &copy; 2024.
      </div>
    </footer>
  );
};

export default Footer;
