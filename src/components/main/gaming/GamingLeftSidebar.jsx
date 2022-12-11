import React from 'react';

// React Icons
import {FaFlag, FaGamepad, FaMap, FaRunning} from "react-icons/fa";
import {TbBoxModel, TbBrandAppleArcade, TbPlayerPlay} from "react-icons/tb";
import {SiAffinitydesigner, SiApplearcade, SiClockify, SiFacebookgaming, SiWeightsandbiases} from "react-icons/si";
import {GiGamepad, GiMatchbox, GiNinjaArmor, GiShatteredSword, GiWhiteTower} from "react-icons/gi";
import {CgCardHearts} from "react-icons/cg";
import {MdOutlineCasino, MdQuiz} from "react-icons/md";
import {AiOutlineMergeCells, AiOutlineSetting} from "react-icons/ai";
import {BsChevronDown, BsPuzzle, BsTrophyFill} from "react-icons/bs";
import {VscSymbolKeyword} from "react-icons/vsc";
import {BiBookmarkAlt, BiSearch} from "react-icons/bi";
import {IoMdNotifications} from "react-icons/io";
import {FcSportsMode} from "react-icons/fc";


// Photos
import gaming from '../../../imagesToTest/profileImg/1.png'
import profile14 from '../../../imagesToTest/profileImg/14.jpeg'
import profile13 from '../../../imagesToTest/profileImg/13.jpeg'
import profile12 from '../../../imagesToTest/profileImg/12.jpeg'

import galGadot from '../../../imagesToTest/actress/galGadot.jpeg'
import camila from '../../../imagesToTest/actress/camilaCabello.jpeg'
import dc from '../../../imagesToTest/profileImg/2.jpeg'
import yellow from '../../../imagesToTest/profileImg/3.jpeg'

const GamingLeftSidebar = () => {
    const data = [
        {
            id : 1,
            icon : <FaGamepad/>,
            text : 'All games'
        },
        {
            id : 2,
            icon : <TbPlayerPlay/>,
            text : 'Action'
        },
        {
            id : 3,
            icon : <FaMap/>,
            text : 'Adventure'
        },
        {
            id : 4,
            icon : <SiApplearcade/>,
            text : 'Arcade'
        },
        {
            id : 5,
            icon : <GiShatteredSword/>,
            text : 'Battle'
        },
        {
            id : 6,
            icon : <TbBrandAppleArcade/>,
            text : 'Board'
        },
        {
            id : 7,
            icon : <GiWhiteTower/>,
            text : 'Builder'
        },
        {
            id : 8,
            icon : <CgCardHearts/>,
            text : 'Card'
        },
        {
            id : 9,
            icon : <MdOutlineCasino/>,
            text : 'Casino'
        },
        {
            id : 10,
            icon : <SiAffinitydesigner/>,
            text : 'Design'
        },
        {
            id : 11,
            icon : <GiMatchbox/>,
            text : 'Match'
        },
        {
            id : 12,
            icon : <AiOutlineMergeCells/>,
            text : 'Merge'
        },
        {
            id : 13,
            icon : <BsPuzzle/>,
            text : 'Puzzle'
        },
        {
            id : 14,
            icon : <SiClockify/>,
            text : 'Quick Play'
        },
        {
            id : 15,
            icon : <MdQuiz/>,
            text : 'Quiz and Trivia'
        },
        {
            id : 16,
            icon : <FaFlag/>,
            text : 'Racing'
        },
        {
            id : 17,
            icon : <GiNinjaArmor/>,
            text : 'Role-Playing'
        },
        {
            id : 18,
            icon : <FaRunning/>,
            text : 'Runner'
        },
        {
            id : 19,
            icon : <TbBoxModel/>,
            text : 'Simulation'
        },
        {
            id : 20,
            icon : <SiWeightsandbiases/>,
            text : 'Solitaire'
        },
        {
            id : 21,
            icon : <FcSportsMode/>,
            text : 'Sports'
        },
        {
            id : 22,
            icon : <VscSymbolKeyword/>,
            text : 'Word'
        }
    ]
    const GamingIconData = [
        {
            id: 1,
            mainIcon: <SiFacebookgaming/>,
            arrowIcon: null,
            text: 'For You',

        },
        {
            id: 2,
            mainIcon: <TbPlayerPlay/>,
            arrowIcon: <BsChevronDown/>,
            text: 'Video',

        },
        {
            id: 3,
            mainIcon: <BsTrophyFill/>,
            arrowIcon: <BsChevronDown/>,
            text: 'Tournaments',

        },
        {
            id: 4,
            mainIcon: <GiGamepad/>,
            arrowIcon: <BsChevronDown/>,
            text: 'Play Games',

        },
        {
            id: 5,
            mainIcon: <IoMdNotifications/>,
            arrowIcon: <BsChevronDown/>,
            text: 'Notifications',

        }
    ]
    const StreamersFollow = [
        {
            id: 1,
            img: galGadot,
            name: 'Gal Gadot',
            game: 'PUBG Mobile',
        },
        {
            id: 2,
            img: camila,
            name: "Camila Cabello",
            game: 'League of Lgends',
        },
        {
            id: 3,
            img: dc,
            name: 'DC & Similar',
            game: 'Fornite',
        },
        {
            id: 4,
            img: yellow,
            name: 'Yellowflash Gaming',
            game: 'Mobile Legends',
        },
    ]
    const RecentlyWatch = [
        {
            id: 1,
            img: profile14,
            name: 'Channel Myanmar',
            game: 'Fornite',
        },
        {
            id: 2,
            img: profile13,
            name: "Falcon Esport",
            game: 'Mobile Legends',
        },
        {
            id: 3,
            img: profile12,
            name: 'Viswah',
            game: 'Mario',
        }
    ]
    return (
        <div className='hidden lg:block lg:col-span-3 bg-[#DFF6FF]'>
            <div className='mx-3 py-2'>
                <div className='flex justify-between items-center my-1'>
                    <h1 className='text-2xl text-[#47B5FF] font-semibold'>Gaming</h1>
                    <AiOutlineSetting className='text-3xl'/>
                </div>
                <hr/>
                <div className='flex justify-center pt-4 pb-2'>
                    <div className='rounded-l-full bg-gray-300 '>
                        <BiSearch className='text-4xl pl-2 h-[40px]'/>
                    </div>
                    <input type="search" placeholder='Search gaming'
                           className='w-full rounded-r-full bg-gray-300 py-1 border-none outline-none'
                    />
                </div>
                <div className='grid grid-cols-9 flex justify-start items-center'>
                    <div className='col-span-1 w-[48px] flex justify-center items-center'>
                        <img src={gaming} alt="" className=' rounded-full'/>
                    </div>
                    <div className='col-span-5 mx-3 py-2'>
                        <h2 className='text-[#47B5FF]'>GAMING ACTIVITY</h2>
                        <h2 className='font-light text-[#47B5FF] ml-2'>SaiHlyanPhyoe</h2>
                    </div>
                </div>
                <hr/>
                {
                    GamingIconData.map((data,index)=>{
                        return (
                            <div className='flex grid grid-cols-9 justify-center items-center my-3'>
                                <div className='col-span-1 flex justify-center items-center h-[50px]'>
                                    <div className='text-2xl hover:bg-indigo-400 rounded-full bg-[#6c757d] text-[#e9ecef] p-[11px]'>
                                    {data.mainIcon}
                                    </div>
                                </div>
                                <h1 className='col-span-5 mx-3 text-[#256D85]'>{data.text}</h1>
                                <div className='col-span-3 flex justify-end items-center mr-3'>
                                    {data.arrowIcon}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <div className='mx-3'>
                <h1 className='text-xl font-semibold my-1 py-1'>Streamers You Follow</h1>
                {
                    StreamersFollow.map((data,index)=>{
                        return(
                            <div className='grid grid-cols-9 flex justify-start items-center py-1 my-1'>
                                <div className='col-span-1 w-[48px] flex justify-center items-center'>
                                    <img src={data.img} alt="" className='rounded-full'/>
                                </div>
                                <div className='col-span-5 mx-3'>
                                    <h1 className='text-[#47B5FF] text-md font-semibold'>{data.name}</h1>
                                    <p className='text-[#256D85] text-sm'>{data.game}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <div className='mx-3'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold mt-2 text-[#47B5FF] pt-1'>My games</h1>
                    <p className='text-blue-500 font-[25px] text-[#00a]'>See all</p>
                </div>
                <p className='text-[16px] text-[#256D85] pb-[5px]'>Save a game to My games to create a shortcut for it here.</p>
                <div className='flex grid grid-cols-9 justify-center items-center mt-2 mb-4'>
                    <div className='col-span-1 rounded-full flex justify-center items-center h-[50px]'>
                        <div className='text-2xl hover:bg-indigo-400 rounded-full hover:shadow bg-[#6c757d] text-[#e9ecef] p-[10px]'>
                            <BiBookmarkAlt/>
                        </div>
                    </div>
                    <h1 className='col-span-5 mx-3 text-[#256D85]'>Save Games</h1>
                </div>
            </div>
            <hr/>
            <div  className='mx-3'>
                <h1 className='text-xl font-semibold my-1 text-[#256D85]'>Categories</h1>
                {
                    data.map((data,index)=>{
                        return (
                            <div className='flex grid grid-cols-9 justify-center items-center my-[12px]'>
                                <div className='col-span-1 rounded-full flex justify-center items-center h-[50px]'>
                                    <div className='text-2xl hover:bg-indigo-400 rounded-full hover:shadow bg-[#6c757d] text-[#e9ecef] p-[10px]'>
                                        {data.icon}
                                    </div>
                                </div>
                                <h1 className='col-span-5 mx-3 text-[#256D85]'>{data.text}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <div className='mx-3'>
                <h1 className='text-xl font-semibold my-2 text-[#47B5FF]'>Recently Watched</h1>
                {
                    RecentlyWatch.map((data,index)=>{
                        return(
                            <div className='grid grid-cols-9 flex justify-start items-center py-1'>
                                <div className='col-span-1 w-[48px] flex justify-center items-center'>
                                    <img src={data.img} alt="" className='rounded-full'/>
                                </div>
                                <div className='col-span-5 mx-3'>
                                    <h1 className='text-md font-semibold text-[#47B5FF]'>{data.name}</h1>
                                    <p className='text-sm text-[#256D85]'>{data.game}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <div className='mx-3 my-1 py-1'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-semibold my-1 text-[#47B5FF]'>Suggested</h1>
                    <p className='font-[25px] text-[#009]'>See all</p>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default GamingLeftSidebar;