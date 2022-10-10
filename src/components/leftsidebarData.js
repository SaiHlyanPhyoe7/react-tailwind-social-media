import img from '../imagesToTest/1.png'
import mmSit from '../imagesToTest/2.jpeg'
import {FaUserFriends} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'
import {BiMoviePlay,BiTimer,BiDownArrowAlt} from 'react-icons/bi'
import {BsFillBookmarkStarFill,BsFillCalendarEventFill} from 'react-icons/bs'
import {AiFillFlag} from 'react-icons/ai'
import {FcAlarmClock} from 'react-icons/fc'
import {CgShortcut} from 'react-icons/cg'


export const leftSidebarData = [
    {"name" : "Sai Hlyan Phyoe","img":img},
    {"name" : "Friends","icon" : <FaUserFriends/>},
    {"name" : "Groups","icon" : <MdGroups/>},
    {"name" : "Watch","icon" : <BiMoviePlay/>},
    {"name" : "Memories","icon" : <BiTimer/>},
    {"name" : "Saved","icon" : <BsFillBookmarkStarFill/>},
    {"name" : "Pages","icon" : <AiFillFlag/>},
    {"name" : "Events", "icon" : <BsFillCalendarEventFill/>},
    {"name" : "Most Recent","icon" : <FcAlarmClock/>},
    {"name" : "See More","icon" : <BiDownArrowAlt/>},
    {"name" : "Your Shortcuts","icon" : <CgShortcut/>},
    {"name" : "MMS IT SWD","img" : mmSit}


]