import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "../CSS/HomePage.css"
import "../CSS/HomePageResponsive.css"
// import Slider from './Slider'

import SellingCard from "../Images/Selling_Card.png"
import LogisticsCard from "../Images/Logistics_Card.png"
import QualityCard from "../Images/Quality_Card.png"
import TransparencyCard from "../Images/Transparency_Card.png"
import FinancingCard from "../Images/Financing_Card.png"
import BuyingCard from "../Images/Buying_Card.png"

import HomePageBackground from "../Images/Home_Page_Background.svg"

function HomePage(props) {
    document.title = "Maqure | Home"

    const WhatWeDoRef = useRef(null);
    const ContactUsRef = useRef(null);
    const CreditFacilityRef = useRef(null);

    function handleCreditFacilityClick() {
        // document.getElementById("navbar_link_1").click();
        props.CreditFacilityRef.scrollIntoView();
    }


    return (
        <>
            <div className="home_page_main_content">
                <h1 className="display_none_to_mobile">Solution to your end to end</h1>
                <h1 style={{ color: "#39B4FF" }} className="display_none_to_mobile">Material procurement & Financing,</h1>
                <h1 className="display_none_to_mobile">powered by <span className="home_page_main_content_span">Blockchain</span></h1>
                {/* <p className="home_page_main_content_short display_none_to_mobile">Maqure makes procurement of raw materials easy, It helps in getting easy <span >Credit Facility</span> & ensures Timely as well as Quality material delivery. Maqure, powered by <span >Blockchain</span>, ensures <span >Privacy</span>, <span >Transparency</span> and <span >Traceability</span>.</p> */}
                <h1 className="display_none_to_desktop">Solution to Material procurement & Financing</h1>
                <p className="display_none_to_desktop mobile_version_powered">Powered by Blockchain</p>
            </div>

            <a href="/Buyers" className="contact_us_button display_none_to_desktop">Raise a Demand</a>
            <a className="contact_us_button display_none_to_desktop" href="/#credit_facility" onClick={handleCreditFacilityClick}>Apply for Credits</a>
            <a href="/#contact_us" className="contact_us_button home_page_contact_us_button">Contact Us</a>

            <div className="what_we_do_main_box" id="what_we_do_main_box" ref={WhatWeDoRef}>
                <div className="background_image display_none_to_mobile">
                    <img src={HomePageBackground} alt="" />
                </div>
                <div id="what_we_do">
                    <h1 className="what_we_do_heading">What we do?</h1>
                </div>

                {/* <BoxSlider/> */}

                <div className="home_page_section_2_cards">
                    <div className="home_page_section_2_card">
                        <h2><img src={BuyingCard} alt="" /> Buying</h2>
                        <div className="home_page_section_2_card_overlay">
                            <p>Through Maqure, Save Time & Money, by procuring raw material from any among many of suppliers at a guaranteed lowest price in the market. Maqure is here to serve you!</p>
                        </div>
                    </div>
                    <div className="home_page_section_2_card">
                        <h2><img src={SellingCard} alt="" /> Selling</h2>
                        <div className="home_page_section_2_card_overlay">
                            <p>Increase your business multifold by selling to National & International clients without worrying about payment problems, GST settlements and timely-safe delivery of the material. Maqure helps you with all this!</p>
                        </div>
                    </div>
                    <div className="home_page_section_2_card">
                        <h2><img src={FinancingCard} alt="" /> Financing</h2>
                        <div className="home_page_section_2_card_overlay">
                            <p>Do you not have money to procure? Don't worry, Maqure helps you with this as well! We facilitate instant financing cum credit facilities from our associate lending partners.</p>
                        </div>
                    </div>
                    <div className="home_page_section_2_card">
                        <h2><img src={LogisticsCard} alt="" /> Logistics</h2>
                        <div className="home_page_section_2_card_overlay">
                            <p>Handling logistics is troublesome for sellers as well as buyers. Maqure helps in quick  delivery as well. Maqure provides transparent, real time optimized freight service including live order tracking facility.</p>
                        </div>
                    </div>
                    <div className="home_page_section_2_card display_none_to_mobile">
                        <h2><img src={QualityCard} alt="" /> Quality</h2>
                        <div className="home_page_section_2_card_overlay">
                            <p>In chemical industry, quality has always been an issue. If you're a buyer, it is your utmost priority. Maqure understands your concerns. Thereby, we ensure the quality of material 'agreed' while finalizing the deal.</p>
                        </div>
                    </div>
                    <div className="home_page_section_2_card display_none_to_mobile">
                        <h2 style={{ fontSize: "1.8rem" }}><img src={TransparencyCard} alt="" /> Transparency & Traceability</h2>
                        <div className="home_page_section_2_card_overlay">
                            <p>Maqure has integrated the entire system with safe & secure blockchain technology. This integration will help in making supply chain more robust by increased transparency and traceability.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div id="credit_facility" ref={CreditFacilityRef}></div>
            <h1 className="our_partners_heading display_none_to_desktop">How to avail Credit Facility?</h1>
            <div className="our_partners_box">
                <h1 className="display_none_to_mobile">Smart Credit Financing Mechanism</h1>
                <h1 className="display_none_to_desktop"><span style={{ color: "#39B4FF" }}>Maqure</span> partners with financial institutions to provide smart credit financing.</h1>
                <p className="display_none_to_mobile">Maqure is partnering with financial institutions to provide easy and fast credit facility for SMEs. The buyers just have to follow the simple 3 step mechanism illustrated below to finance their procurement.</p>
                <div className="our_partners_box_cards">
                    <Link to="/GetCreditPage" className="our_partners_box_cards_Link">
                        <div className="our_partners_box_card">
                            <i className="fa-solid fa-building-columns"></i>
                            <h2>Purchase Billed Discounting</h2>
                        </div>
                    </Link>
                    {/* <div className="our_partners_box_card"></div>
                <div className="our_partners_box_card"></div> */}
                </div>
                {/* <Link to="/GetCreditPage" className="contact_us_button our_partners_box_button">Get Credit in 3 Days</Link> */}
            </div>

            {/* <div className="user_testimonials">
            <h1>Know, What industry stalwarts are saying about us!</h1> */}
            {/* <div className="user_testimonials_main_box">
                <div className="user_testimonial_box_1">
                    <img src={UserTestimonial} alt="" />
                </div>
                <div className="user_testimonial_box_2">
                    <h1 style={{fontFamily: "poppins"}}>&#8221;</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, quas. Dolore molestias nobis eos iste ea sunt dolores, a minima, accusamus odit alias perspiciatis ipsum molestiae cumque aut quia amet earum saepe dolorum. </p>
                    <p className="user_testimonials_box_2_member">Unilever | Team member</p>
                    <div className="user_testimonials_box_2_sub_box">
                        <img src={UnileverLogo} alt="" />
                        <div className="user_testimonials_box_2_sub_box_image_slider"></div>
                    </div>
                </div>
            </div> */}

            {/* <Slider/> */}
            {/* </div> */}


            <div id="contact_us" ref={ContactUsRef}></div>
            <div style={{ opacity: 0 }} className="display_none_to_desktop">A</div>
            <div style={{ opacity: 0 }} className="display_none_to_desktop">A</div>
            <div className="contact_us_main_box">
                <h1>Contact Us for more Information</h1>
                <div className="contact_us_box">
                    <div className="contact_us_form_box">
                        <form action="#" method="POST">
                            <div className="contact_us_form_section_1 contact_us_form_section">
                                <input type="text" placeholder="Company Name" id="companyName" name="companyName" required />
                                <input type="text" placeholder="Owner Name" id="ownerName" name="ownerName" required />
                            </div>
                            <div className="contact_us_form_section_2 contact_us_form_section">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                                <input type="number" id="phone" name="phone" placeholder="Phone no." required />
                            </div>
                            <div className="contact_us_form_section_3 contact_us_form_section">
                                <input type="text" id="whatYouManufacture" name="whatYouManufacture" placeholder="What you manufacture?" required />
                                <input type="text" id="remarks" name="remarks" placeholder="Remarks" required />
                            </div>
                            <div className="contact_us_submit_button_div">
                                <button type="submit" className="submit_button">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact_us_info_box">
                        <h1>Contact Information</h1>
                        <div className="contact_us_info_box_address">
                            <p className="contact_us_info_box_address_p">
                                <div className="contact_us_info_box_address_p_logo">
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <div className="contact_us_info_box_address_p_text">
                                    <a href="/">+91-9997186532 <br />+91-9772195021</a>
                                </div>
                            </p>
                            <p className="contact_us_info_box_address_p">
                                <div className="contact_us_info_box_address_p_logo">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact_us_info_box_address_p_text">
                                    <a href="/" target={"_blank"}>pranav@maqure.com vikram@maqure.com</a>
                                </div>
                            </p>
                            {/* <p className="contact_us_info_box_address_p">
                            <div className="contact_us_info_box_address_p_logo">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="contact_us_info_box_address_p_text">
                                <a href="/">Office No. 501-502, Skylar Building, Prahladnagar, Ahmedabad - 380015 <br/><br/>Gujarat, India <i className="flag-icon flag-icon-in"></i></a>
                            </div>
                        </p> */}
                        </div>
                        <div className="contact_us_info_box_social_media">
                            <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="/"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;