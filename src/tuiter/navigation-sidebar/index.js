import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <div className="text-nowrap overflow-hidden">
                <a className="list-group-item">Tuiter</a>
            </div>
            <div className="text-nowrap overflow-hidden">
                <Link to="/tuiter" className={`list-group-item ${active === undefined || active ===''?'active':''}`}>
                    <i className="bi bi-house-door-fill"></i> Home
                </Link>
            </div>
            <div className="text-nowrap overflow-hidden">
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-search"></i> Explore
                </Link>
            </div>
            <div className="text-nowrap overflow-hidden">
                <Link to="/a7" className="list-group-item">
                    <i className="bi bi-asterisk"></i> Labs
                </Link>
            </div>
            <div className="text-nowrap overflow-hidden">
                <a className={`list-group-item
                        ${active === 'notifications'?'active':''}`}>
                    <i className="bi bi-bell"></i> Notifications
                </a>
            </div>
            <div className="text-nowrap overflow-hidden">
                <a className={`list-group-item
                        ${active === 'messages'?'active':''}`}>
                    <i className="bi bi-envelope"></i> Messages
                </a>
            </div>
            <div className="text-nowrap overflow-hidden">
                <a className={`list-group-item
                        ${active === 'bookmarks'?'active':''}`}>
                    <i className="bi bi-bookmark"></i> Bookmarks
                </a>
            </div>
            <div className="text-nowrap overflow-hidden">
                <a className={`list-group-item
                        ${active === 'lists'?'active':''}`}>
                    <i className="bi bi-card-text"></i> Lists
                </a>
            </div>
            <div className="text-nowrap overflow-hidden">
                <Link to="/tuiter/profile" className={`list-group-item ${active ==='profile' || active ==='edit-profile' ?'active':''}`}>
                    <i className="bi bi-person"></i> Profile
                </Link>
            </div>
            <div className="text-nowrap overflow-hidden">
                <a className={`list-group-item
                        ${active === 'more'?'active':''}`}>
                    <i className="bi bi-three-dots"></i> More
                </a>
            </div>
        </div>
    );
};
export default NavigationSidebar;