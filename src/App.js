import './App.css';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import DataProvider from "./store/DataProvider";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Friends from "./components/leftSideBar/leftsidebarComponents/Friends";
import Groups from "./components/leftSideBar/leftsidebarComponents/Groups";
import Watch from "./components/leftSideBar/leftsidebarComponents/Watch";
import Memories from "./components/leftSideBar/leftsidebarComponents/Memories";
import Saved from "./components/leftSideBar/leftsidebarComponents/Saved";
import Pages from "./components/leftSideBar/leftsidebarComponents/Pages";
import Events from "./components/leftSideBar/leftsidebarComponents/Events";
import MostRecent from "./components/leftSideBar/leftsidebarComponents/MostRecent";
import SeeMore from "./components/leftSideBar/leftsidebarComponents/SeeMore";
import ShortCuts from "./components/leftSideBar/leftsidebarComponents/ShortCuts";
import MmsitSwd from "./components/leftSideBar/leftsidebarComponents/MmsitSwd";
import Profile from "./components/profile/Profile";

function App() {
  return (
        <DataProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Hero/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                    <Route path='/groups' element={<Groups/>}/>
                    <Route path='/watch' element={<Watch/>}/>
                    <Route path='/memories' element={<Memories/>}/>
                    <Route path='/saved' element={<Saved/>}/>
                    <Route path='/pages' element={<Pages/>}/>
                    <Route path='/events' element={<Events/>}/>
                    <Route path='/mostrecent' element={<MostRecent/>}/>
                    <Route path='/seemore' element={<SeeMore/>}/>
                    <Route path='/shortcuts' element={<ShortCuts/>}/>
                    <Route path='/mms-it' element={<MmsitSwd/>}/>
                </Routes>
            </Router>
        </DataProvider>
  );
}

export default App;
