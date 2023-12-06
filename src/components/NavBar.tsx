"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="fixed top-0 z-10 w-full">
            <nav className='navbar z-10 flex shadow-lg items-center min-w-screen p-1'>

                <ul className='desktopMenu rounded-full w-full h-8 gap-4 lg items-center sm:flex text-black'>
                    <li className='flex gap-4 items-center'>
                        <Link href="/">
                            <span className='items-center flex gap-2 flex'>
                                <span className="logo">
                                    <FontAwesomeIcon className="text-purple text-3xl" icon={faCodeBranch} />
                                </span>
                                <span className="hidden title md:flex">
                                    Onchain <span className="text-purple ml-1">Solutions</span>
                                </span>
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className='desktopMenu rounded-full w-full h-8 gap-8 lg items-center justify-end sm:flex text-black pr-10'>
                    <li className='flex gap-4 items-center'>
                        <Link href="#" className="text-white">Contact</Link>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <Link href="/team" className="text-white">Team</Link>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <Link href="/projects" className="text-white">Projects</Link>
                    </li>
                </ul>



                <ul className='mobileMenu flex w-full items-center justify-between'>
                    <li onClick={() => setShowMenu(prev => !prev)} className='w-1/4 pt-1 ml-3 cursor-pointer'>
                        <span className="menu text-grey">
                            <FontAwesomeIcon icon={(showMenu) ? faClose : faBars} />
                        </span>
                    </li>
                    <li className='w-1/4 pt-1 ta-r'>
                        <Link href={"/"}>
                            <span className="logo ta-r">
                                <FontAwesomeIcon className="text-white" icon={faCodeBranch} />
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <ul className={`${showMenu ? "" : "hideMenu"} drowdown mobileMenu sticky z-10 flex-col`}>
                <li>
                    <Link onClick={() => setShowMenu(false)} href="#" className="px-2">Contact</Link>
                </li>
                <li>
                    <Link onClick={() => setShowMenu(false)} href="/team" className="px-2">Team</Link>
                </li>
                <li>
                    <Link onClick={() => setShowMenu(false)} href="/projects" className="px-2">Projects</Link>
                </li>
            </ul>
        </div>
    );
}