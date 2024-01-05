"use client";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { MobileDropdownMenu } from "./mobile-menu-dropdown";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialMediaData = [
  { id: 1, icon: <FaFacebookF />, link: "https://www.facebook.com/" },
  { id: 2, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/chainverse-labs" },
  { id: 3, icon: <FaXTwitter />, link: "https://twitter.com/" },
];

export default function MobileMenu() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };
  const Close = () => {
    setMobileNav(false);
  };

  return (
    <header className="sticky top-0 inset-x-0 ">
      <nav className="">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className="w-6 bg-black dark:bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-black dark:bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className="w-6 bg-black dark:bg-white h-px block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-white text-black dark:text-white dark:bg-black p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6"
                >
                  <li>
                    <p className="text-5xl font-semibold text-black dark:text-white">
                      <MobileDropdownMenu
                        data={Data}
                        title="Services"
                        OnClick={Close}
                      />
                    </p>
                  </li>
                  <li>
                    <p className="text-5xl font-semibold">
                      <MobileDropdownMenu
                        data={Data1}
                        title="Baas"
                        OnClick={Close}
                      />
                    </p>
                  </li>
                  <li>
                    <p className="text-5xl font-semibold">
                      <MobileDropdownMenu
                        data={Data2}
                        title="ReadyMade"
                        OnClick={Close}
                      />
                    </p>
                  </li>
                  <li>
                    <a
                      href="/aboutus"
                      onClick={Close}
                      className="text-5xl font-semibold text-black dark:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      onClick={Close}
                      className="text-5xl font-semibold text-black dark:text-white"
                    >
                      Get In Touch
                    </a>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-white/30"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
                  {socialMediaData.map((icon, index) => (
                    <li key={index}>
                      <div className="bg-black dark:bg-white rounded-lg w-8 h-8 dark:text-black text-white flex justify-center items-center">
                        {icon.icon}
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

const Data = [
  {
    subLinks: [
      { href: "/", label: "Blockchain Development" },
      {
        href: "/services/blockchain-solution-architecture",
        label: "Blockchain Solution Architecture",
      },
      {
        href: "/services/front-end-development",
        label: "Front-End Development",
      },
    ],
  },
];

const Data1 = [
  {
    subLinks: [
      { href: "/baas/case-studies", label: "Case Studies" },
      { href: "/baas/health-care", label: "HealthCare" },
      { href: "/baas/real-estate", label: "RealState" },
      { href: "/baas/ecommerce", label: "E-Commerce" },
    ],
  },
];

const Data2 = [
  {
    subLinks: [
      { href: "/readymade/mvp", label: "Development Templates (MVPs)" },
      { href: "/readymade/customizable", label: "Customizable" },
    ],
  },
];
