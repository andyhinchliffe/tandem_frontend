import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import Link from 'next/link';

const page = () => {
  return (
    <>
    <div>
    <div className="w-72 mx-auto flex bg-white flex-col min-h-screen">
    <div className="navbar ">
  <div className="flex-1">
    <a className="w-14 mt-1 ml-2"><img alt="logo" src="TR_Logo.jpg"></img></a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="bg-[#d7bae2] text-[#8224e3] input input-bordered w-32" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

<h1 className="mt-2 mb-2 text-[#8224e3] text-center text-2xl font-bold">Company Name</h1>
    <div className="justify-center mt-2 avatar-group space-x-4 mb-2 rtl:space-x-reverse">
  

  
  
  
  
  
</div>




<div className="mx-auto card-body w-72">
<input type="text" placeholder="Job Role" className="input input-bordered w-full max-w-xs" />
<input type="text" placeholder="Required skills" className="input input-bordered w-full max-w-xs" />
<textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
<select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Roles</option>
  <option>Job1</option>
  <option>Job2</option>
</select>

<Link href="/applicants">
    <button  className="mt-12 btn w-52 bg-[#8224e3] text-slate-100">Applicants</button>
    </Link>
  
  <div className='flex justify-between '>
  
    </div>
    
  </div>
<footer className="footer footer-center p-2 bg-white text-base-content">
  <aside>
    <p className='text-[#8224e3] font-base text-xs'>Copyright © 2024 - All right reserved by TandemRecruit Ltd</p>
  </aside>
</footer>
    </div>
    </div>
    </>
  )
  
}

export default page