"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { SliderButton } from '@typeform/embed-react'
import MenuItems from "../data/menu.json"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo1.png"

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    const buttonStyle = {
        padding: '7px 20px',
        borderRadius: 50,
        border: 'none',
        background: 'black',
        color: 'white',
        fontSize: 18,
        cursor: 'pointer',
    }

    return (
        <div className="fixed top-0 z-10 w-full">
            <nav className='navbar z-10 flex items-center min-w-screen p-1'>

                <ul className='desktopMenu rounded-full w-full h-8 gap-4 lg items-center sm:flex text-black'>
                    <li className='flex gap-4 items-center'>
                        <Link href="/">
                            <span className='items-center flex gap-2 flex'>

                                <span className="hidden title md:flex">
                                    <Image src={Logo} alt="logo" width={160} height={160} />
                                </span>
                            </span>
                        </Link>
                    </li>
                </ul>
                <ul className='desktopMenu rounded-full w-full h-8 gap-8 lg items-center justify-end sm:flex text-black pr-10'>

                    {
                        MenuItems.map((item, i) => {
                            return <li className='flex gap-4 items-center' key={i}>
                                <Link href={item.link} className="text-white">{item.name}</Link>
                            </li>
                        })
                    }

                    <SliderButton
                        id="wjD4Fbq5"
                        position="right"
                        width="500"
                        style={buttonStyle}
                    >
                        Contact

                    </SliderButton>

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
                                <Image src={Logo} alt="logo" width={180} height={180} />
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <ul className={`${showMenu ? "" : "hideMenu"} drowdown mobileMenu sticky z-10 flex-col`}>

                {
                    MenuItems.map((item, i) => {
                        return item.link !== null
                            ? <li className='ml-2' key={i}>
                                <Link onClick={() => setShowMenu(false)} href={item.link} className="text-white">{item.name}</Link>
                            </li>
                            :
                            <li className='ml-2' key={i}>
                                <button onClick={() => setShowMenu(false)} >{item.name}</button>
                            </li>
                    })
                }
            </ul>
        </div>
    );
}