import React, { useState } from 'react'
import ProfileHome from "./Activities/ProfileHome";
import ProfileLists from "./Activities/ProfileLists";
import ProfileAbout from "./Activities/ProfileAbout";
import Modal from "../../../utils/Modal";
import { LiaTimesSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
import { discoverActions } from "../../../data";
import EditProfile from './EditProfile';

const Profile = () => {

  const activities = [
    {
      title: "Home",
      comp: ProfileHome,
    },
    {
      title: "Lists",
      comp: ProfileLists,
    },
    {
      title: "About",
      comp: ProfileAbout,
    }
  ];

  const [currentActive, setCurrentActive] = useState(activities[0]);

  const [modal, setModal] = useState(false);
  const hidden = modal ? "visible opacity-100" : "invisible opacity-0";

  const [editModal, setEditModal] = useState(false);

  return (
    <section className="size flex gap-[4rem] relative">

      <div className="mt-[9rem] flex-[2]">
        <div className="flex items-end gap-4">
          <h2 className="text-3xl sm:text-5xl font-bold capitalize">
            Vansh Verma
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">Followers(2)</p>
          <p className="text-gray-500 text-xs sm:text-sm">Followings(2)</p>
        </div>
        <div className="flex items-center gap-5 mt-[1rem] border-b border-gray-300 mb-[3rem]">
          {activities.map((item, i) => (
            <div key={i} className={`py-[0.5rem] ${item.title === currentActive.title ? "border-b border-gray-500" : ""}`}>
              <button onClick={() => setCurrentActive(item)}>{item.title}</button>
            </div>
          ))}
        </div>
        <currentActive.comp />
      </div>

      <button onClick={() => setModal(true)} className="fixed top-[8rem] right-0 w-[2rem] h-[2rem] bg-black text-white grid place-items-center md:hidden">
        <IoSettingsSharp />
      </button>

      <Modal modal={modal} setModal={setModal} hidden={hidden}>
        <div className={`flex-[1] border-l border-gray-300 p-[2rem] z-10 fixed right-0 bottom-0 top-0 w-[18rem] bg-white md:relative ${modal ? "translate-x-0" : "translate-x-[100%] md:translate-x-0"} transition-all duration-500`}>

          <div className="pb-4 text-right">
            <button onClick={() => setModal(false)} className="inline-block md:hidden">
              <LiaTimesSolid />
            </button>
          </div>

          <div className="sticky top-7 flex flex-col justify-between">
            <img className="w-[3.5rem] h-[3.5rem] object-cover rounded-full" src="/profile.png" alt="profile-img" />
            <h2 className="py-2 font-bold capitalize">Vansh Verma</h2>
            <p className="text-gray-500 first-letter:uppercase text-sm">I am a content creator in Youtube channel</p>
            <button onClick={() => setEditModal(true)} className="text-green-700 pt-6 text-sm w-fit">Edit Profile</button>
            <div className="flex-[1] flex items-center flex-wrap gap-3 pt-8">
              {discoverActions.map((item) => (
                <button key={item} className="text-xs text-black">{item}</button>
              ))}

            </div>
          </div>

        </div>
      </Modal>
      {editModal && <EditProfile editModal={editModal} setEditModal={setEditModal} />}

    </section>
  )
}

export default Profile 