import Navbar from "./component/Navbar/Navbar.jsx";
import {SideBar, MainContent} from "./component/HomeLayout"
import "./App.css"


function App() {

    return (
        <>
            <Navbar />
            <div className="main-page">
                <div className="sidebar-section">
                    <SideBar />
                </div>
                <div className="main-section">
                    <MainContent />
                </div>
            </div>
        </>
    )
}

export default App
