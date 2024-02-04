import React, { useState } from 'react'
import Input from '../../../utils/Input'
import { MdKeyboardArrowLeft } from "react-icons/md"
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SignUp = ({ setSignReq, setModal }) => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    Username: "",
    Email: "",
    Password: "",
    RePassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form[("Username", "Email", "Password", "RePassword")] === "") {
      toast.error("All fields are required");
    } else if (form["Password"] !== form["RePassword"]) {
      toast.error("Your passwords are not matching!!");
      return;
    } else {
      setLoading(true)
      const { user } = await createUserWithEmailAndPassword(
        auth,
        form.Email,
        form.Password
      );

      const ref = doc(db, "users", user.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: user.uid,
          username: form.Username,
          email: form.Email,
          userImg: "",
          bio: "",
        });
        navigate("/");
        toast.success("User have been Created");
        setModal(false);
        setLoading(false);
      }
    }
  }

  return (
    <div className='size mt-[6rem] text-center'>
      <h2 className='text-3xl'>Sign up with email</h2>
      <p className='w-full sm:w-[25rem] mx-auto py-[3rem]'>Enter the email address associated with your account, and we'll send a magic link to your inbox</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <Input form={form} setForm={setForm} type="text" title="Username" />
        <Input form={form} setForm={setForm} type="email" title="Email" />
        <Input form={form} setForm={setForm} type="password" title="Password" />
        <Input form={form} setForm={setForm} type="password" title="RePassword" />
        <button className={`px-4 py-1 text-sm rounded-full bg-green-700 hover:bg-green-800 text-white w-fit mx-auto ${loading ? "opacity-50 pointer-events-none" : ""}`}>Sign Up</button>
      </form>
      <button onClick={() => setSignReq("")} className='mt-5 text-sm text-green-600 hover:text-green-700 flex items-center mx-auto'> <MdKeyboardArrowLeft /> All sign Up Options</button>
    </div>
  )
}

export default SignUp