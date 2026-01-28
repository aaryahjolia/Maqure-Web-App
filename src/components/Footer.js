import React from 'react'
import "../CSS/Footer.css"

function Footer(props) {

    function handleWhatWeDoClick() {
        document.getElementById("navbar_link_1").click();
        props.WhatWeDoRef.scrollIntoView();
    }

    function handleCreditFacilityClick() {
        document.getElementById("navbar_link_1").click();
        props.CreditFacilityRef.scrollIntoView();
    }

    return (
        <footer className="footer">
            <div className="footer_content_main_box">
                <div className="footer_section_1">
                    <h1>Maqure</h1>
                    <p>&copy; 2022 MAQURE, All rights reserved.</p>
                </div>
                <div className="footer_section_2">
                    <div className="footer_section_2_subsection_1">
                        <a href="/#what_we_do" onClick={handleWhatWeDoClick}>What we do?</a>
                        <a href="/Buyers" className="display_none_to_desktop">Are you a Buyer?</a>
                        <a href="/Sellers" className="display_none_to_desktop">Are you a Seller?</a>
                        <a href="/#credit_facility" onClick={handleCreditFacilityClick}>Credit Facility</a>
                    </div>
                    <div className="footer_section_2_subsection_2">
                        <a href="/" className="terms_conditions_link" style={{ pointerEvents: "none" }}>Terms & Conditions</a>
                        <a href="/" style={{ pointerEvents: "none" }}>Privacy Policy</a>
                    </div>
                </div>
                <div className="footer_section_3">
                    <h1>Head Office</h1>
                    <p>Office No. 501-502, Skylar Building, Prahladnagar, Ahmedabad - 380015 <br className="display_none_to_desktop" /> Gujarat, India <br className="display_none_to_desktop" /> <i className="flag-icon flag-icon-in flag_footer"></i></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer