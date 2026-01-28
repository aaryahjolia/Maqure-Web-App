import React from 'react'
import "../CSS/AboutUs.css"
import About_Us_Page_Company_Team_Image from "../Images/user_testimonial.jpg"

function AboutUs(props) {

    document.title = "Maqure | About Us"

    return (
        <>
            <div className="about_us_page_blue_background"></div>
            <div className="about_us_page_blue_background_2"></div>

            <h1 className="about_us_company_and_team_heading">About Company & the Team</h1>
            <div className="about_us_company_and_team_main_box">
                <div className="about_us_company_and_team_box about_us_company_and_team_box_1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi ab officiis beatae error at tempore delectus voluptas veniam inventore commodi esse rem numquam saepe totam eveniet possimus consectetur eos nulla molestiae, aliquid accusamus. Vero dolore, modi omnis excepturi nemo, doloremque est a laborum nulla velit, molestias dignissimos eligendi. Error enim eius voluptatem doloremque ex.</p>
                </div>
                <div className="about_us_company_and_team_box about_us_company_and_team_box_2">
                    <img src={About_Us_Page_Company_Team_Image} alt="About Company" />
                </div>
            </div>

            <h1 className="about_us_founders_heading">Meet Our Founders</h1>
            <div className="about_us_founders_main_box">
                <div className="about_us_founders_box about_us_founders_box_1">
                    <img src={About_Us_Page_Company_Team_Image} alt="" />
                    <div className="about_us_founders_box_image_text">
                        <h2>Pranav Singh</h2>
                        <p>CEO</p>
                    </div>
                </div>
                <div className="about_us_founders_box about_us_founders_box_2">
                    <img src={About_Us_Page_Company_Team_Image} alt="" />
                    <div className="about_us_founders_box_image_text">
                        <h2>Pranav Singh</h2>
                        <p>CEO</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs