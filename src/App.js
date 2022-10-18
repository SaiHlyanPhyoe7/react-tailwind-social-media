import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DataProvider from "./store/DataProvider";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Friends from "./components/posts/leftsidebarComponents/Friends";
import Groups from "./components/posts/leftsidebarComponents/Groups";
import Watch from "./components/posts/leftsidebarComponents/Watch";
import Memories from "./components/posts/leftsidebarComponents/Memories";
import Saved from "./components/posts/leftsidebarComponents/Saved";
import Pages from "./components/posts/leftsidebarComponents/Pages";
import Events from "./components/posts/leftsidebarComponents/Events";
import MostRecent from "./components/posts/leftsidebarComponents/MostRecent";
import SeeMore from "./components/posts/leftsidebarComponents/SeeMore";
import ShortCuts from "./components/posts/leftsidebarComponents/ShortCuts";
import MmsitSwd from "./components/posts/leftsidebarComponents/MmsitSwd";

function App() {
  return (
        <DataProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Hero/>}/>
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
