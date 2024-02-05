import React from 'react'
import Modal from '../../../utils/Modal';
import { LiaTimesSolid } from "react-icons/lia";

const EditProfile = ({ editModal, setEditModal }) => {
    return (
        <Modal modal={editModal} setModal={setEditModal}>
            <div className="center w-[95%] md:w-[45rem] bg-white mx-auto shadows my-[1rem] z-20 mb-[3rem] p-[2rem]">

                {/* header */}
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-xl">Profile information</h2>
                    <button className="text-xl">
                        <LiaTimesSolid />
                    </button>
                </div>


                {/* body */}
                <section className="mt-6">
                    <p className="pb-3 text-sm text-gray-500">Photo</p>
                    <div className="flex gap-[2rem]">
                        <div className="w-[5rem]">
                            <img className="min-h-[5rem] min-w-[5rem] object-cover border-gray-400 rounded-full" src="/profile.png" alt="profile-img" />
                        </div>
                        <div>
                            <div className="flex gap-4 text-sm">
                                <button className="text-green-600">Update</button>
                                <button className="text-red-600">Remove</button>
                            </div>
                            <p className="w-full sm:w-[20rem] text-gray-500 pt-2">Recommended: Square JPG, PNG or GIF at least 1,000 pixels per side.</p>
                        </div>
                    </div>
                </section>

                {/* footer */}

            </div>
        </Modal>
    )
}

export default EditProfile