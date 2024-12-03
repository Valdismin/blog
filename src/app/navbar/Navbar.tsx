import Link from "next/link";
import {Accordion, AccordionItem} from "@/src/app/base-accordion";
import {navigationItems} from "@/public/navbar-mock";

export const Navbar = () => {
    navigationItems
    return (
        <div id="navbar"
             className="flex flex-col w-[250px] border-r border-n4 transition-transform bg-white fixed z-50 h-[100%] ">
            <div className="flex-grow p-5 pb-0">
                <ul>
                    <li><Link
                        className="w-full flex items-center gap-2 text-base leading-6 text-[#646464] mb-1 px-3 py-2.5 rounded-lg hover:bg-gray-500 bg-black hover:!bg-black text-white "
                        href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="lucide lucide-house">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path
                                d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                        Home</Link></li>
                    <li><a
                        className="w-full flex items-center gap-2 text-base leading-6 text-[#646464] mb-1 px-3 py-2.5 rounded-lg hover:bg-gray-500  "
                        href="/popular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="lucide lucide-flame">
                            <path
                                d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                        </svg>
                        Popular</a></li>
                </ul>
                <Accordion>
                    {navigationItems.map((item, index) => {
                        return (<AccordionItem key={index} details={item.details} summary={item.title} iconLink={item.iconLink} />)
                    })}

                </Accordion>
            </div>
            <div className="p-5 pb-20"><p className="font-matter text-sm text-gray-800 mb-2">© Copyright 2024 - Glowist.
                All
                Rights
                Reserved.</p>
            </div>
        </div>
    )
}