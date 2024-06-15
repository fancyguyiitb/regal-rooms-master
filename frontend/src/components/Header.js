import React, { useState, useEffect } from "react";
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <Link to={"/"}>
          {header ? (
            <img className="w-[160px]" src={LogoDark} alt="" />
          ) : (
            <img className="w-[160px]" src={LogoWhite} alt="" />
          )}
        </Link>

        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          <Link to={""} className="hover:text-accent transition">
            Home
          </Link>
          <Link to={""} className="hover:text-accent transition">
            Rooms
          </Link>
          <Link to={""} className="hover:text-accent transition">
            Restaurant
          </Link>
          <Link to={""} className="hover:text-accent transition">
            Spa
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
