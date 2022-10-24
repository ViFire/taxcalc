import {NavLink} from "react-router-dom";
import './MenuBar.css';

function MenuBar() {
    return (
        <div className="MenuBar">
            <div className="nav">
                <NavLink to="content1" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Content 1</NavLink>
            </div>
            <div className="nav">
                <NavLink to="content2" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Content 2</NavLink>
            </div>
            <div className="nav">
                <NavLink to="content3" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Content 3</NavLink>
            </div>
        </div>
    );
}

export default MenuBar;