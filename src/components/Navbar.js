import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../CSS/Navbar.css";
import Maqure_Logo_Animation from "../Images/Maqure-Logo-Animation.mp4"


function Navbar(props) {
    const location = useLocation();
    const currentRoute = location.pathname;
    // console.log(currentRoute)

    function handleWhatWeDoClick() {
        document.getElementById("navbar_link_1").click();
        props.WhatWeDoRef.scrollIntoView();
    }
    function handleContactUsClick() {
        document.getElementById("navbar_link_1").click();
        props.ContactUsRef.current.scrollIntoView();
    }

    React.useEffect(() => {
        const video = document.getElementById("video_id");
        let previousWindowScrollYValue = window.scrollY;
        let play_pause = 0; // 0: at start, 1: at 1.8s mark
        let lock = 0; // 0: ready to play down, 1: ready to play up

        const handleScroll = () => {
            if (!video) return;

            const currentScrollY = window.scrollY;

            // Scroll Down Logic
            if (currentScrollY > previousWindowScrollYValue && lock === 0 && play_pause === 0) {
                lock = 1;
                video.playbackRate = 2;
                video.play();

                const onTimeUpdateDown = () => {
                    if (video.currentTime >= 1.9 && play_pause === 0) {
                        video.pause();
                        video.currentTime = 2;
                        play_pause = 1;
                        video.removeEventListener("timeupdate", onTimeUpdateDown);
                    }
                };
                video.addEventListener("timeupdate", onTimeUpdateDown);
            }
            // Scroll Up Logic
            else if (currentScrollY < previousWindowScrollYValue && lock === 1 && play_pause === 1) {
                lock = 0;
                video.playbackRate = 2;
                video.play();

                const onTimeUpdateUp = () => {
                    // Play until near the end (4s) or when ended
                    if ((video.currentTime >= video.duration - 0.1 || video.ended) && play_pause === 1) {
                        video.pause();
                        video.currentTime = 0; // Reset for next cycle
                        play_pause = 0;
                        video.removeEventListener("timeupdate", onTimeUpdateUp);
                    }
                };
                video.addEventListener("timeupdate", onTimeUpdateUp);
            }

            previousWindowScrollYValue = currentScrollY;
        };

        window.onscroll = null; // Clear any old manual assignment
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const hamburger_menu_click = () => {
        document.getElementById("hamburger_toggler").click();
    };

    return (
        <>
            <nav id="navbar" className="navbar">
                <div className="navbar_subpart_1">
                    <Link to="/">
                        <video muted preload="true" id="video_id">
                            <source src={Maqure_Logo_Animation} type="video/mp4" />
                            <p>Video is Not Supported on your Device.</p>
                        </video>
                    </Link>
                </div>
                <div className="navbar_subpart_2 display_none_to_mobile">
                    <Link to="/" className={currentRoute === "/" ? "navbar_link_1 active_button_color" : "navbar_link_1"} id="navbar_link_1" >Home</Link>
                    <Link to="/#what_we_do" className={currentRoute === "#" ? "navbar_link_2 active_button_color" : "navbar_link_2"} id="navbar_link_2" onClick={handleWhatWeDoClick}>What we do?</Link>
                    <Link to="/Buyers" className={currentRoute.includes("/Buyers") ? "navbar_link_3 active_button_color" : "navbar_link_3"} id="navbar_link_3">Buyers</Link>
                    <Link to="/Sellers" className={currentRoute.includes("/Sellers") ? "navbar_link_4 active_button_color" : "navbar_link_4"} id="navbar_link_4">Sellers</Link>
                    {/* <Link to="/AboutUs" className={currentRoute.includes("/AboutUs") ? "navbar_link_5 active_button_color" : "navbar_link_5"} id="navbar_link_5">About Us</Link> */}
                </div>
                <div className="navbar_subpart_3 display_none_to_mobile">
                    <a href="/#contact_us" onClick={handleContactUsClick} id="partner_with_us">Partner with Us</a>
                </div>

                {/* Hamburger */}

                <div className="menu-wrap display_none_to_desktop">
                    <input type="checkbox" className="toggler" id="hamburger_toggler" />
                    <div className="hamburger">
                        <div>
                        </div>
                    </div>
                    <div className="menu" id="hamburger_menu">
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/" onClick={hamburger_menu_click} id="navbar_link_1">Home</Link></li>
                                    <hr />
                                    <li><Link to="/#what_we_do" onClick={(event) => { hamburger_menu_click(); handleWhatWeDoClick(); }} id="navbar_link_2" >What we do?</Link></li>
                                    <hr />
                                    <li><Link to="/Buyers" onClick={hamburger_menu_click} id="navbar_link_3">Buyers</Link></li>
                                    <hr />
                                    <li><Link to="/Sellers" onClick={hamburger_menu_click} id="navbar_link_4">Sellers</Link></li>
                                    <hr />
                                    {/* <li><Link to="/AboutUs" onClick={hamburger_menu_click} id="navbar_link_5">About Us</Link></li> */}
                                    {/* <hr/> */}
                                    <li><Link to="/#contact_us" className="partner_with_us_button_hamburger contact_us_button" onClick={(event) => { hamburger_menu_click(); handleContactUsClick(); }}>Partner With Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="chat_widget"><i className="fa-solid fa-message"></i></div>
        </>
    )
}

export default Navbar