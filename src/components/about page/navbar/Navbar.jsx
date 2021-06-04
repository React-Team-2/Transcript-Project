import React, {useState} from 'react';
import './navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder'

const Navbar = ()=> {

    const[showLinks, setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="logo">
                <div className="ok">TA</div>
                Transcript App</div>
            </div>
            <div className="rightSide ">
                <div className="navLinks" id={showLinks ? "hidden" : ""}>
                    
                    <a href="/login">LOGIN</a>
                    <a href="/">ABOUT</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>
                    <ReorderIcon />
                </button>
            </div>

        </div>
    )
}

export default Navbar;