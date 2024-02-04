import React from 'react';
import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { BiSpreadsheet } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";
import { LiaEditSolid } from "react-icons/lia";
import { Blog } from "../../../Context/Context";
import { Link } from 'react-router-dom';

const UserModal = () => {

  const { currentUser } = Blog();

  const userModal = [
    {
      title: "Profile",
      icon: <LiaUserSolid />,
      path: `/profile/${currentUser?.uid}`,
    },
    {
      title: "Library",
      icon: <MdOutlineLocalLibrary />,
      path: "/library",
    },
    {
      title: "Strories",
      icon: <BiSpreadsheet />,
      path: "/stories",
    },
    {
      title: "Stats",
      icon: <HiOutlineChartBar />,
      path: "/stats",
    },
  ];

  return (
    <section className="absolute w-[18rem] p-6 bg-white right-0 top-[100%] shadows rounded-md z-50 text-gray-500">
      <Link to="/write" className="flex md:hidden items-center gap-1 text-gray-500">
        <span className="text-3xl">
          <LiaEditSolid />
        </span>
        <span className="text-sm mt-2">Write</span>
      </Link>
      <div className="flex flex-col gap-4 border-b border-gray-300 pb-5">
        {userModal.map((item, i) => (
          <Link className="flex items-center gap-2 text-gray-500 hover:text-black/70" key={i} path={item.path}>
            <span className="text-2xl">{item.icon}</span>
            <h2 className="text-md">{item.title}</h2>
          </Link>
        ))}
      </div>
      <button>
        
      </button>
    </section>
  )
}

export default UserModal