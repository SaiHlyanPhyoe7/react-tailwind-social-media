import React from 'react';
import GamingLeftSidebar from "../../main/gaming/GamingLeftSidebar";
import {FaFlag, FaGamepad, FaMap, FaRunning} from "react-icons/fa";
import {TbBoxModel, TbBrandAppleArcade, TbPlayerPlay} from "react-icons/tb";
import {SiAffinitydesigner, SiApplearcade, SiClockify, SiWeightsandbiases} from "react-icons/si";
import {GiMatchbox, GiNinjaArmor, GiShatteredSword, GiWhiteTower} from "react-icons/gi";
import {CgCardHearts} from "react-icons/cg";
import {MdOutlineCasino, MdQuiz} from "react-icons/md";
import {AiOutlineMergeCells} from "react-icons/ai";
import {BsPuzzle} from "react-icons/bs";
import {VscSymbolKeyword} from "react-icons/vsc";
import GamingRightSidebar from "../../main/gaming/GamingRightSidebar";

const Gaming = () => {
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
            icon : <fcsportsmode/>,
            text : 'Sports'
        },
        {
            id : 22,
            icon : <VscSymbolKeyword/>,
            text : 'Word'
        },

    ]

    return (
        <div className='w-full min-h-screen grid grid-cols-12'>
            <GamingLeftSidebar/>
            <GamingRightSidebar/>
        </div>
    );
};

export default Gaming;