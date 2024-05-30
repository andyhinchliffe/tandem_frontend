import React from 'react'
import { FaPlay } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";

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
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        
    </div>
  </div>

  
  
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
</div>


<div className="mx-auto card flex-1 w-72 bg-slate-100 shadow-xl object-center">
<video className="rounded-box object-fill object-center w-full " src="video2.mp4" controls></video>
<p className="text-[#8224e3] mt-2 ml-6 text-sm font-semibold">Name</p>
<p className="text-[#8224e3] mb-2  text-sm font-semibold ml-6  ">Role</p>
{/* <p className="ml-4">Company</p> */}


  
</div>
<div className="mx-auto card-body w-72">
  
  <div className='flex justify-between '>
  {/* <button className="btn btn-circle text-[#8224e3] bg-[#d7bae2]">
  <FaPlay />
    </button> */}

    <button className="btn btn-circle text-[#8224e3] bg-[#d7bae2]">
    <FaArrowLeft />
    </button>

    <button className="btn btn-circle text-[#8224e3] bg-[#d7bae2]">
    <FaArrowRight />
    </button>

    <button className="btn btn-circle text-[#8224e3] bg-[#d7bae2]">
    <IoMdAddCircle size='25' />
    </button>
    </div>
    
  </div>
<footer className="footer footer-center p-2 bg-white text-base-content">
  <aside>
    <p className='text-[#8224e3] font-base text-xs'>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
    </div>
    </>
  )
  
}

export default page