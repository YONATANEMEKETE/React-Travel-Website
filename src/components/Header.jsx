import React from 'react';
import { useState } from 'react';
import { navigation } from '../constants';
import { IoClose } from 'react-icons/io5';
import { RiMenu3Fill } from 'react-icons/ri';

const Header = () => {
  const [openNav, setopenNav] = useState(false);

  const handleOpen = () => {
    setopenNav(true);
  };

  const handleClose = () => {
    setopenNav(false);
  };

  return (
    <div className=" fixed top-0 left-0 w-full bg-transparent  z-10">
      <div className="flex items-center justify-between max-w-[1112px] lg:mx-auto px-5 lg:px-7.5 py-4 lg:py-8">
        <a className="block text-xl font-bold font-first" href="#home">
          TRAVEL
        </a>

        <nav
          className={`${
            openNav ? 'flex backdrop-blur-md' : 'hidden'
          }  lg:flex fixed lg:static top-0 left-0 right-0 bg-transparent h-3/5 lg:h-auto pt-6 lg:pt-0`}
        >
          <div className="relative w-full h-full flex flex-col gap-8 items-center justify-center z-20 m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                className="text-lg uppercase font-semibold text-n-2 font-second hover:text-n-4"
                key={item.id}
                onClick={handleClose}
                href={item.href}
              >
                {item.title}
              </a>
            ))}

            <div className="lg:hidden w-[2rem] h-[2rem] text-2xl text-n-2 flex place-content-center absolute top-4 right-8">
              <IoClose onClick={handleClose} />
            </div>
          </div>
        </nav>

        <div className="lg:hidden w-[2rem] h-[2rem] text-3xl text-n-2 flex place-content-center">
          <RiMenu3Fill onClick={handleOpen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
