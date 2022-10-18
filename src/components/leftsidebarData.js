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
    {"name" : "Sai Hlyan Phyoe","img":img,"linkUrl": '/'},
    {"name" : "Friends","icon" : <FaUserFriends/> ,"linkUrl": '/friends'},
    {"name" : "Groups","icon" : <MdGroups/> ,"linkUrl": '/groups'},
    {"name" : "Watch","icon" : <BiMoviePlay/> ,"linkUrl": '/watch'},
    {"name" : "Memories","icon" : <BiTimer/> ,"linkUrl": '/memories'},
    {"name" : "Saved","icon" : <BsFillBookmarkStarFill/> ,"linkUrl": '/saved'},
    {"name" : "Pages","icon" : <AiFillFlag/> ,"linkUrl": '/pages'},
    {"name" : "Events", "icon" : <BsFillCalendarEventFill/> ,"linkUrl": '/events'},
    {"name" : "Most Recent","icon" : <FcAlarmClock/> ,"linkUrl": '/mostRecent'},
    {"name" : "See More","icon" : <BiDownArrowAlt/> ,"linkUrl": '/seeMore'},
    {"name" : "Your Shortcuts","icon" : <CgShortcut/> ,"linkUrl": '/shortcuts'},
    {"name" : "MMS IT SWD","img" : mmSit , "linkUrl" : '/mms-it'},


]