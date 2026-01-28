import React from 'react'
import "../CSS/Buyers.css"

import FAQImage from "../Images/Buyers/Buyers_Page_FAQ_section.png"
import FAQAccordion from './FAQAccordion'

// Section 2 Images
import FirstLogoBuyers from "../Images/Buyers/Section_2_1_Buyers.jpg"
import SecondLogoBuyers from "../Images/Buyers/Section_2_2_Buyers.jpg"
import ThirdLogoBuyers from "../Images/Buyers/Section_2_3_Buyers.jpg"
import FourthLogoBuyers from "../Images/Buyers/Section_2_4_Buyers.jpg"

// Why Prefer Buyers card image
import Prefer_Buyers_1 from "../Images/Buyers/Why_Prefer_Buyers/Prefer_Buyers_1.png"
import Prefer_Buyers_2 from "../Images/Buyers/Why_Prefer_Buyers/Prefer_Buyers_2.png"
import Prefer_Buyers_3 from "../Images/Buyers/Why_Prefer_Buyers/Prefer_Buyers_3.png"
import Prefer_Buyers_4 from "../Images/Buyers/Why_Prefer_Buyers/Prefer_Buyers_4.png"

import BuyersPageBackground from "../Images/Buyers/Buyers_Page_Main_Image.png"
import Section3 from "../Images/Buyers/Section_3.png"


function Buyers(props) {
  document.title = "Maqure | Buyers"

  return (
    <>
      <div className="buyers_page_heading_section_box">
        <h1 className="buyers_page_heading_1">Ease of Procure on  Maqure</h1>
        <h1 className="buyers_page_heading_2">At the competitive price in the market</h1>
      </div>
      <a href="/Buyers#why_buyers_prefer_maqure" className="buyers_page_heading_section_a display_none_to_desktop">Raise a Demand</a>

      <div className="buyers_page_section_2_main_div display_none_to_mobile">
        <div className="buyers_page_heading_section_background display_none_to_mobile">
          <img src={BuyersPageBackground} alt="" />
        </div>
        <h1 className="buyers_page_section_2_main_div_heading display_none_to_mobile" id="buyers_benefits">The Benefits</h1>
        <h1 className="buyers_page_section_2_main_div_heading display_none_to_desktop">For Buyers, Maqure in nutshell!</h1>
        <div className="buyers_page_section_2_cards">
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={FirstLogoBuyers} alt="Logo" />
            </div>
            <h1>Lowest Cost</h1>
          </div>
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={SecondLogoBuyers} alt="Logo" />
            </div>
            <h1>On time Delivery</h1>
          </div>
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={ThirdLogoBuyers} alt="Logo" />
            </div>
            <h1>Assured Quality</h1>
          </div>
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={FourthLogoBuyers} alt="Logo" />
            </div>
            <h1>Credit facilities</h1>
          </div>
        </div>
      </div>

      <div className="buyers_page_section_3_main_div display_none_to_mobile">
        <h1 className="buyers_page_section_3_main_div_heading">How <span style={{ color: "var(--blue)" }}>MAQURE</span> ensures lowest price in the market?</h1>
        <div className="buyers_page_section_3_box">
          <img src={Section3} alt="" />
        </div>
      </div>

      <div className="buyers_page_why_prefer_maqure_main_div" id="why_buyers_prefer_maqure">
        <h1>Why Buyers prefer <span className="buyers_page_why_prefer_maqure_box_heading_maqure">maqure?</span></h1>
        <div className="buyers_page_why_prefer_maqure_box">
          <div className="buyers_page_why_prefer_maqure_box_2">
            <div className="buyers_page_why_prefer_maqure_box_2_subbox">
              <div className="buyers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Buyers_1} alt="" />
              </div>
              <p>Maqure ensures quality of material.</p>
            </div>
            <div className="buyers_page_why_prefer_maqure_box_2_subbox">
              <div className="buyers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Buyers_2} alt="" />
              </div>
              <p>Maqure charges 0% commission on deals.</p>
            </div>
            <div className="buyers_page_why_prefer_maqure_box_2_subbox">
              <div className="buyers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Buyers_3} alt="" />
              </div>
              <p>Maqure provides competitive price in the market.</p>
            </div>
            <div className="buyers_page_why_prefer_maqure_box_2_subbox">
              <div className="buyers_page_why_prefer_maqure_box_2_subbox_img">
                <img src={Prefer_Buyers_4} alt="" />
              </div>
              <p>Maqure gives upfront credit facility option.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}

      <div className="buyers_page_faq_main_div">
        <div className="buyers_page_faq_main_box">
          <div className="buyers_page_faq_box buyers_page_faq_box_1">
            <div className="buyers_page_faq_box_heading">
              <h1>Still got <span style={{ color: "var(--blue)" }}>questions?</span> Find <span style={{ color: "var(--blue)" }}>answers</span> here.</h1>
            </div>

            <FAQAccordion
              question1="Does Maqure charge any subscription fees?"
              answer1="No, as of now, It is completely free to operate and use the platform of Maqure."
              question2="Does Maqure take care of logistics?"
              answer2="Yes, Maqure provides real time freight service with a live order tracking facility."
              question3="Is Maqure providing credit facility?"
              answer3="Yes, Maqure is tying up with leading financial institutions to provide the credit facility"
              question4="Who will take care of GST settlements?"
              answer4="As a buyer, you absolutely do not have to worry about GST settlements. Maqure takes care of this as well!"
              question5="Have any other questions?"
            />

          </div>
          <div className="buyers_page_faq_box buyers_page_faq_box_2">
            <img src={FAQImage} alt="" />
          </div>
        </div>
      </div>

      <div className="buyers_page_section_2_main_div display_none_to_desktop">
        <div className="buyers_page_heading_section_background display_none_to_mobile">
          <img src={BuyersPageBackground} alt="" />
        </div>
        <h1 className="buyers_page_section_2_main_div_heading display_none_to_mobile">The Benefits</h1>
        <h1 className="buyers_page_section_2_main_div_heading display_none_to_desktop">For Buyers, Maqure in nutshell!</h1>
        <div className="buyers_page_section_2_cards">
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={FirstLogoBuyers} alt="Logo" />
            </div>
            <h1>Lowest Cost</h1>
          </div>
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={SecondLogoBuyers} alt="Logo" />
            </div>
            <h1>On time Delivery</h1>
          </div>
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={ThirdLogoBuyers} alt="Logo" />
            </div>
            <h1>Assured Quality</h1>
          </div>
          <div className="buyers_page_section_2_card">
            <div className="buyers_page_section_2_card_image_div">
              <img src={FourthLogoBuyers} alt="Logo" />
            </div>
            <h1>Credit facilities</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buyers