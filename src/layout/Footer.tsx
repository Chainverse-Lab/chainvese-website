import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const socialMediaData = [
  { id: 1, icon: <FaFacebookF />, link: "https://www.facebook.com/" },
  { id: 2, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { id: 3, icon: <FaXTwitter />, link: "https://twitter.com/" },
  { id: 4, icon: <FaInstagram />, link: "https://www.instagram.com/" },
];

const navigationLinks = [
  { id: 1, text: "About", href: "/about" },
  { id: 2, text: "Services", href: "/services" },
  { id: 3, text: "Why us", href: "/why-us" },
  { id: 4, text: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-full  flex items-center justify-center">
      <div className="w-full text-white flex flex-col">
        <div className="flex flex-col">
          <hr className="border-gray-600" />
          <div className="flex flex-col gap-8 lg:gap-20 mt-24 mb-12 lg:flex-row justify-center">
            <Link href="/" className="text-center lg:text-justify">
              <span className="text-xl lg:text-2xl font-bold text-black dark:text-white">
                ChainVerse
              </span>
            </Link>
            <div className="flex flex-col lg:flex-row lg:space-x-8 justify-between items-center">
              {navigationLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="cursor-pointer text-muted-foreground hover:text-white uppercase"
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-row gap-4 items-center justify-center lg:justify-between text-black dark:text-white">
              {socialMediaData.map((socialMedia) => (
                <Link key={socialMedia.id} href={socialMedia.link}>
                  {socialMedia.icon}
                </Link>
              ))}
            </div>
          </div>
          <p className="w-full text-center my-12 text-muted-foreground">
            Copyright © 2023 ChainVerse
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
