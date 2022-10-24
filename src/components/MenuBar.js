import {NavLink} from "react-router-dom";
import './MenuBar.css';

function MenuBar() {
    return (
        <div className="MenuBar">
            <div className="nav">
                <NavLink to="content1" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Übersicht</NavLink>
            </div>
            <div className="nav">
                <NavLink to="content2" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Einzelrechnung</NavLink>
            </div>
            <div className="nav">
                <NavLink to="content3" className={({isActive}) => (isActive ? 'active' : 'inactive')}>Item</NavLink>
            </div>
        </div>
    );
}

export default MenuBar;