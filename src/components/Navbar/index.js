"use client";
import Link from "next/link";
import { document } from "postcss";
import { useEffect, useRef, useState } from "react";
// import InputSearch from "./inputSearch";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerOffset = headerRef.current.offsetTop;
        const isScrolledPast = window.pageYOffset > headerOffset;
        // Lakukan sesuatu jika header di-scroll melewati posisi tertentu
        if (isScrolledPast) {
          // Misalnya, ubah warna latar belakang header
          headerRef.current.classList.add("navbar-fixed");
        } else {
          // Atau kembalikan warna latar belakang header ke semula
          headerRef.current.classList.remove("navbar-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  const handleButtonClick = () => {
    if (isActive) {
      navRef.current.classList.add("hidden");
    } else {
      navRef.current.classList.remove("hidden");
    }
    setIsActive(!isActive);
  };

  // const handleNavClick = () => {
  //   if (navRef && navRef.current) {
  //     // setNavHidden(!navHidden);
  //   }
  // };

  return (
    <header
      className="bg-primary absolute top-0 left-0 w-full flex items-center z-10"
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <div className="flex items-center gap-5 left-5">
              <img
                src="/logo.jpg"
                className="h-6 md:h-8"
                alt="Kedai Duren Logo"
              />
              <a
                href="/"
                className="font-bold text-lg lg:text-2xl text-secondary block py-6"
              >
                Kedai Rumah Duren
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute right-4 lg:hidden ${
                isActive ? "hamburger-active" : ""
              }`}
              onClick={handleButtonClick}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full md:max-w-[350px] lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none  "
              ref={navRef}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="/"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-primary lg:group-hover:text-secondary"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="/menu"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-primary lg:group-hover:text-secondary"
                  >
                    Menu
                  </a>
                </li>
                <li className="group">
                  <a
                    href="/reservasi"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-primary lg:group-hover:text-secondary"
                  >
                    Reservasi
                  </a>
                </li>
                <li className="group">
                  <a
                    href="/about"
                    className="text-base text-black py-2 mx-8 flex group-hover:text-primary lg:group-hover:text-secondary"
                  >
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    // <header className="bg-primary shadow-lg">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20">
    //     <Link
    //       href="/"
    //       className="flex items-center space-x-3 rtl:space-x-reverse"
    //     >
    //       <img src="/logo.jpg" className="h-6 md:h-8" alt="Kedai Duren Logo" />
    //       <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-bg font-custom">
    //         Kedai Rumah Duren
    //       </span>
    //     </Link>
    //     <div className="flex gap-3 text-base font-thin">
    //       <Link href="/" className="nav-list">
    //         Beranda
    //       </Link>
    //       <Link href="/menu" className="nav-list">
    //         Menu
    //       </Link>
    //       <Link href="/reservasi" className="nav-list">
    //         Reservasi
    //       </Link>
    //       <Link href="/about" className="nav-list">
    //         Tentang Kami
    //       </Link>
    //     </div>
    //     {/* <InputSearch /> */}
    //   </div>
    // </header>
  );
};

export default Navbar;
