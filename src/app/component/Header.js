"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";
function Header() {
    const pathname =usePathname()
  return (
    <header className="font-serif md:h-40 2xl:h-72 w-100%">
    <div className="flex justify-between items-center xl:px-20 md:px-10 h-1/3 w-full bg-teal-500">
      <div className="flex items-center gap-1 align-middle">
      <Image
          className="md:w-4 md:h-4 lg:w-8 lg:h-6 2xl:w-10 2xl:h-10"
          src={"/image/home.png"}
          width={22}
          height={14}
          alt="flag"
        ></Image>
        <Link href="/home"><p className="w-[30%] 2xl:text-3xl lg:text-sm md:text-[10px] text-white">
          Home
        </p></Link>
      </div>
      <div className="">
        <div className="flex justify-end xl:gap-12 md:gap-3 xl:mr-4 md:ml-3 lg:mr-3  text-sm text-white">
          <div className="flex gap-2">
            <Image
              className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-10 2xl:h-10"
              src={"/image/call.png"}
              width={22}
              height={14}
              alt="phone"
            ></Image>
            <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-[10px] font-semibol ">
              Call us 042 4455 1122
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-10 2xl:h-10"
              src={"/image/location.png"}
              width={22}
              height={14}
              alt="mail"
            ></Image>
            <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-[10px] font-semibol ">
              Email us:Healthhub@gmail.com
            </p>
          </div>
          <div className="flex gap-2">
            <Image
              className="md:h-4 md:w-4 lg:h-5 lg:w-5 2xl:w-12 2xl:h-12"
              src={"/image/clock.png"}
              width={22}
              height={14}
              alt="clock"
            ></Image>
            <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-[10px] font-semibol">
              Working hours:24/7 Hours
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center 2xl:px-12 xl:px-20 md:px-10 md:h-2/3 2xl:h-[75%] border-b bg-white">
      <div className="2xl:h- 2xl:w-60">
       <Link href="/home"> <Image
          src={"/image/apex.png"}
          width={240}
          height={240}
          alt=""
        ></Image></Link>
      </div>
      <div className="flex items-center h-full md:w-full 2xl:w-[55%] lg:w-[65%]">
        <div className="xl:w-64 md:w-24 lg:w-60 h-full"></div>
        <div className="flex items-center 2xl:space-x-20 xl:space-x-12 lg:space-x-5 md:space-x-6 2xl:text-3xl xl:text-base lg:text-sm md:text-xs font-semibold">
          <Link href="/services"><p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md  font-bold underline">Services</p></Link>
          <Link href="/about"><p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md  font-bold underline">Location</p></Link>
          <Link href="/service"><p  className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md  font-bold underline">Insurance</p></Link>
          <Link href="/industry"><p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md  font-bold underline">About</p></Link>
          <Link href="/pricing"><p className="text-black hover:text-white hover:bg-teal-600 hover:p-2 rounded-md  font-bold underline">Contact</p></Link>
          <Link href="/appointment"><button className= "xl:py-5 md:py-3 xl:w-52 lg:w-44 md:w-36 text-center xl:text-sm md:text-xs rounded-lg font-semibold  text-white bg-teal-600 hover:bg-black hover:text-white">
            Book an Appointment
          </button></Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header