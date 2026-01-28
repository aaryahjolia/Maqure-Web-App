import React from 'react'
import "../CSS/Sellers.css"
import FAQImage from "../Images/Sellers/Sellers_Page_FAQ_section.png"
import FAQAccordion from './FAQAccordion'

// Section 2 Images
import FirstLogoSellers from "../Images/Sellers/Section_2_1_Sellers.jpeg"
import SecondLogoSellers from "../Images/Sellers/Section_2_2_Sellers.jpeg"
import ThirdLogoSellers from "../Images/Sellers/Section_2_3_Sellers.jpeg"
import FourthLogoSellers from "../Images/Sellers/Section_2_4_Sellers.jpeg"

// Why Prefer Sellers card image
import Prefer_Sellers_1 from "../Images/Sellers/Why_Prefer_Sellers/Prefer_Sellers_1.png"
import Prefer_Sellers_2 from "../Images/Sellers/Why_Prefer_Sellers/Prefer_Sellers_2.png"
import Prefer_Sellers_3 from "../Images/Sellers/Why_Prefer_Sellers/Prefer_Sellers_3.png"
import Prefer_Sellers_4 from "../Images/Sellers/Why_Prefer_Sellers/Prefer_Sellers_4.png"

import SellersPageBackground from "../Images/Sellers/Sellers_Page_Main_Image.png"
import Section3Sellers from "../Images/Sellers/Section_3_Sellers.png"

function Sellers() {
  document.title = "Maqure | Sellers"
  return (
    <>
      <div className="sellers_page_heading_section_box">
        <h1 className="sellers_page_heading_1"><span>Sell</span> on <span>Maqure</span></h1>
        <h1 className="sellers_page_heading_2">Nationally & Internationally</h1>
      </div>
      <a href="/Sellers#why_sellers_prefer_maqure" className="sellers_page_heading_section_a">Sell Now</a>

      <div className="sellers_page_section_2_main_div display_none_to_mobile">
        <h1 className="sellers_page_section_2_main_div_heading display_none_to_mobile">The Benefits</h1>
        <h1 className="sellers_page_section_2_main_div_heading display_none_to_desktop">For Sellers, Maqure in nutshell!</h1>
        <div className="sellers_page_heading_section_background display_none_to_mobile">
          <img src={SellersPageBackground} alt="" />
        </div>
        <div className="sellers_page_section_2_cards">
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={FirstLogoSellers} alt="Logo" />
            </div>
            <h1>Upfront Payment</h1>
          </div>
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={SecondLogoSellers} alt="Logo" />
            </div>
            <h1>Initiate Leads</h1>
          </div>
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={ThirdLogoSellers} alt="Logo" />
            </div>
            <h1>No Customer Acquisition Cost</h1>
          </div>
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={FourthLogoSellers} alt="Logo" />
            </div>
            <h1>No Logistical Headache</h1>
          </div>
        </div>
      </div>

      <div className="sellers_page_section_3_main_div display_none_to_mobile">
        <h1 className="sellers_page_section_3_main_div_heading">How <span style={{ color: "var(--blue)" }}>MAQURE</span> increases your business multifold?</h1>
        <div className="sellers_page_section_3_box">
          <img src={Section3Sellers} alt="" />
        </div>
      </div>

      <div className="sellers_page_why_prefer_maqure_main_div" id="why_sellers_prefer_maqure">
        <h1>Why Sellers prefer <span style={{ color: "var(--blue)" }}>MAQURE ?</span></h1>
        <div className="sellers_page_why_prefer_maqure_box">
          <div className="sellers_page_why_prefer_maqure_box_2">
            <div className="sellers_page_why_prefer_maqure_box_2_subbox">
              <div className="sellers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Sellers_1} alt="" />
              </div>
              <p>Maqure guarantees upfront payment within 15 days.</p>
            </div>
            <div className="sellers_page_why_prefer_maqure_box_2_subbox">
              <div className="sellers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Sellers_2} alt="" />
              </div>
              <p>Maqure charges &#8377;0 as a platform cost.</p>
            </div>
            <div className="sellers_page_why_prefer_maqure_box_2_subbox">
              <div className="sellers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Sellers_3} alt="" />
              </div>
              <p>Maqure ensures dedicated logistical support for deliveries.</p>
            </div>
            <div className="sellers_page_why_prefer_maqure_box_2_subbox">
              <div className="sellers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Sellers_4} alt="" />
              </div>
              <p>Maqure offers large kity of national & international clientele.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}

      <div className="sellers_page_faq_main_div">
        <div className="sellers_page_faq_main_box">
          <div className="sellers_page_faq_box sellers_page_faq_box_1">
            <div className="sellers_page_faq_box_heading">
              <h1>Still got <span style={{ color: "var(--blue)" }}>questions?</span> Find <span style={{ color: "var(--blue)" }}>answers</span> here.</h1>
            </div>

            <FAQAccordion
              question1="Does Maqure charge any subscription fees?"
              answer1="No, as of now, It is completely free to operate and use the platform of Maqure."
              question2="What is the payment policy of Maqure?"
              answer2="Maqure is working on upfront payment facility, wherein, we settle the payment within 15 days of successful material delivery."
              question3="Is Maqure taking care of logistics?"
              answer3="Yes, Maqure provides real time freight service with a live order tracking facility"
              question4="Will Maqure provide access to international clientele?"
              answer4="Maqure is building an exclusive exporting platform to attract international buyers."
              question5="Have any other questions?"
            />

          </div>
          <div className="sellers_page_faq_box sellers_page_faq_box_2">
            <img src={FAQImage} alt="" />
          </div>
        </div>
      </div>

      <div className="sellers_page_section_2_main_div display_none_to_desktop">
        <h1 className="sellers_page_section_2_main_div_heading display_none_to_mobile">The Benefits</h1>
        <h1 className="sellers_page_section_2_main_div_heading display_none_to_desktop">For Sellers, Maqure in nutshell!</h1>
        <div className="sellers_page_heading_section_background display_none_to_mobile">
          <img src={SellersPageBackground} alt="" />
        </div>
        <div className="sellers_page_section_2_cards">
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={FirstLogoSellers} alt="Logo" />
            </div>
            <h1>Upfront Payment</h1>
          </div>
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={SecondLogoSellers} alt="Logo" />
            </div>
            <h1>Initial Leads</h1>
          </div>
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={ThirdLogoSellers} alt="Logo" />
            </div>
            <h1>No Customer Acquisition Cost</h1>
          </div>
          <div className="sellers_page_section_2_card">
            <div className="sellers_page_section_2_card_image_div">
              <img src={FourthLogoSellers} alt="Logo" />
            </div>
            <h1>No Logistical Headache</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sellers