import React from 'react'
import ProfileHome from "./Activities/ProfileHome";
import ProfileLists from "./Activities/ProfileLists";
import ProfileAbout from "./Activities/ProfileAbout";

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

  return (
    <section className="size flex gap-[4rem] relative">

      <div className="mt-[9rem] flex-2">
        <div className="flex items-end gap-4">
          <h2 className="text-3xl sm:text-5xl font-bold capitalize">
            Vansh Verma
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Followers(2)
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Followings(2)
          </p>
        </div>
      </div>

    </section>
  )
}

export default Profile 