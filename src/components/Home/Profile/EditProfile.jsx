import React, { useRef, useState } from 'react'
import Modal from '../../../utils/Modal';
import { LiaTimesSolid } from "react-icons/lia";

const EditProfile = ({ editModal, setEditModal }) => {

    const imgref = useRef(null);
    const [imgUrl, setImgUrl] = useState("")

    const openfile = () => {
        imgref.current.click();
    }

    return (
        <Modal modal={editModal} setModal={setEditModal}>
            <div className="center w-[95%] md:w-[45rem] bg-white mx-auto shadows my-[1rem] z-20 mb-[3rem] p-[2rem]">

                {/* header */}
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl">Profile information</h2>
                    <button onClick={() => setEditModal(false)} className="text-xl">
                        <LiaTimesSolid />
                    </button>
                </div>


                {/* body */}
                <section className="mt-6">
                    <p className="pb-3 text-sm text-gray-500">Photo</p>
                    <div className="flex gap-[2rem]">
                        <div className="w-[5rem]">
                            <img className="min-h-[5rem] min-w-[5rem] object-cover border-gray-400 rounded-full" src={imgUrl ? imgUrl : "/profile.png"} alt="profile-img" />
                            <input onChange={(e) => setImgUrl(URL.createObjectURL(e.target.files[0]))} accept="image/png, image/jpeg, image/jpg" ref={imgref} type="file" hidden />
                        </div>
                        <div>
                            <div className="flex gap-4 text-sm">
                                <button onClick={openfile} className="text-green-600">Update</button>
                                <button className="text-red-600">Remove</button>
                            </div>
                            <p className="w-full sm:w-[20rem] text-gray-500 pt-2">Recommended: Square JPG, PNG or GIF at least 1,000 pixels per side.</p>
                        </div>
                    </div>
                </section>

                {/* profile edit form */}
                <section className="pt-[1rem] text-sm">
                    <label className="pb-3" htmlFor="name">
                        Name*
                    </label>
                    <input type="text" name="name" placeholder="username...." className="p-1 border-b border-black w-full outline-none" maxLength={160} />
                    <p className="text-sm text-gray-600 pt-2">
                        Appears on your Profile page, as your byline, and in your responses.
                    </p>
                    <section className="pt-[1rem] text-sm">
                        <label className="pb-3" htmlFor="name">
                            Bio*
                        </label>
                        <input type="text" name="name" placeholder="bio...." className="p-1 border-b border-black w-full outline-none" maxLength={50} />
                        <p className="text-sm text-gray-600 pt-2">
                            Appears on your Profile and next to your stories.
                        </p>
                    </section>
                </section>

                {/* footer */}
                <div className="flex items-center justify-end gap-4 pt-[2rem]">
                    <button className="border border-green-600 py-2 px-5 rounded-full text-green-600">Cancel</button>
                    <button className="border border-green-600 py-2 px-5 rounded-full text-green-600 bg-green-800 text-white">Save</button>
                </div>

            </div>
        </Modal>
    )
}

export default EditProfile