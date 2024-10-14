"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const router = useRouter(); // Initialize router
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [showSecondaryNav, setShowSecondaryNav] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
                setShowSecondaryNav(true);
            } else {
                setIsSticky(false);
                setShowSecondaryNav(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check the scroll position on mount

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false); // Close the menu on larger screens
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    // Nav items
    const navItems = [
        { link: "Internships List", path: "/GetData/GetPostedInternship" },
        { link: "About", path: "#about" }, 
        { link: "Contact", path: "#contact" }
    ];

    const secondaryNavItems = [
        { link: "Home", path: "/" },
        { link: "faculty", path: "/Faculty" },
        { link: "student", path: "/Student" },
        { link: "dic", path: "/DIC" },
        { link: "au-placement", path: "/PlacementOffice" },
        { link: "Organization", path: "/Organization" },
        { link: "site-supervisor", path: "/SiteSupervisor" }
    ];

    // Handle role click and redirect to login with the role as a query parameter
    const handleRoleClick = (role: string) => {
        router.push(`/Login?role=${role}`);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 w-full ${isSticky ? "bg-gradient-to-r from-[#112d60] to-[#b6c0c5] shadow-lg" : "bg-gradient-to-r from-[#112d60] to-[#b6c0c5]"} z-50 transition-all duration-300`}
            >
                <nav className="py-0 lg:px-14 px-2 flex items-center justify-between">
                    {/* Logo and Title */}
                    <div className='flex items-center gap-2'>
                        <Link href="/" className='flex items-center gap-2'>
                            <div className="relative">
                                <img src="/images/logo.png" alt="Air University" className="w-16 h-16" />
                            </div>
                            <img src="/images/name.png" alt="Air University" className="w-30 h-30" />
                        </Link>
                    </div>

                    {/* Centered Title (hidden on small devices) */}
                    <div className="flex-1 text-center hidden md:block">
                        <h1 className="text-white text-xl font-bold italic font-pacifico">
                            Internship Log
                        </h1>
                    </div>

                    {/* Nav items for large devices */}
                    <ul className='hidden space-x-8 md:flex'>
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path}>
                                    <a href={path} className='block text-sm text-white uppercase cursor-pointer hover:text-blue-900'>
                                        {link}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    {/* Button for lg devices */}
                    <div className='items-center hidden space-x-12 lg:flex'>
                        <button>
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    backgroundColor: isHovered ? "#1e3a8a" : "transparent",
                                    transition: "background-color 0.3s",
                                    padding: "8px",
                                    borderRadius: "4px"
                                }}
                            >
                                <FaBarsStaggered
                                    size={24}
                                    color="white"
                                />
                            </div>
                        </button>
                    </div>

                    {/* Button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark size={24} color="white" /> : <FaBarsStaggered
                                    size={24} color="white" />
                            }
                        </button>
                    </div>
                </nav>
            </header>

            {/* Secondary Navbar */}
            {showSecondaryNav && (
                <div className="fixed top-16 left-0 right-0 bg-[#b6c0c5] shadow-lg transform transition-transform duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-xl z-40">
                    <nav className="py-2 px-4 flex items-center justify-center">
                        <ul className="flex space-x-8">
                            {
                                secondaryNavItems.map(({ link }) => (
                                    <li key={link}>
                                        <button
                                            onClick={() => handleRoleClick(link)}
                                            className='block text-sm text-gray-700 uppercase cursor-pointer hover:text-blue-500'
                                        >
                                            {link}
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            )}

            {/* Nav items for small devices */}
            <div className={`fixed top-0 left-0 right-0 bg-[#042444] ${isMenuOpen ? "block" : "hidden"} z-50 transition-transform transform translate-x-0 md:hidden`}>
                <div className="relative p-4 mt-16">
                    <button onClick={toggleMenu} className="absolute top-2 right-2 text-white">
                        <FaXmark size={24} />
                    </button>
                    <ul className="space-y-4">
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path}>
                                    <a href={path} className='block text-lg text-white uppercase cursor-pointer hover:text-blue-400'>
                                        {link}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
