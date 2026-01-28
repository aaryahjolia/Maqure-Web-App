import React from "react";
import "../CSS/Slider.css"
import UserTestimonial from "../Images/user_testimonial.jpg"
import UnileverLogo from "../Images/Unilever_Logo.png"
import "../CSS/Universal.css"

function Slider() {
    return (
        <>
            <div className="CSSgal">
                <s id="s1"></s>
                <s id="s2"></s>
                <s id="s3"></s>
                <s id="s4"></s>


                <div className="slider">
                    <div>
                        <div className="user_testimonials_main_box">
                            <div className="user_testimonial_box_1">
                                <img src={UserTestimonial} alt="" />
                            </div>
                            <div className="user_testimonial_box_2">
                                <h1 style={{ fontFamily: "poppins" }} className="display_none_to_mobile">&#8221;</h1>
                                <p>Maqure is an outstanding initiative having a capacity as well as capability to transform the chemical industry. During these uncertain times, The credit mechanism offered by Maqure will help companies in offseting the negative impact of cash crunch.</p>
                                <p className="user_testimonials_box_2_member">Unilever | Team member</p>
                                <div className="user_testimonials_box_2_sub_box">
                                    <img src={UnileverLogo} alt="" />
                                    <div className="user_testimonials_box_2_sub_box_image_slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="user_testimonials_main_box">
                            <div className="user_testimonial_box_1">
                                <img src={UserTestimonial} alt="" />
                            </div>
                            <div className="user_testimonial_box_2">
                                <h1 style={{ fontFamily: "poppins" }} className="display_none_to_mobile">&#8221;</h1>
                                <p>The chemical industry requires end-to-end transparent and traceable mechanism that can ensure timely delivery of materials. Maqure indeed taps this much needed space and is revolutionizing it with their blockchain based mechanism.</p>
                                <p className="user_testimonials_box_2_member">Unilever | Team member</p>
                                <div className="user_testimonials_box_2_sub_box">
                                    <img src={UnileverLogo} alt="" />
                                    <div className="user_testimonials_box_2_sub_box_image_slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="user_testimonials_main_box">
                            <div className="user_testimonial_box_1">
                                <img src={UserTestimonial} alt="" />
                            </div>
                            <div className="user_testimonial_box_2">
                                <h1 style={{ fontFamily: "poppins" }} className="display_none_to_mobile">&#8221;</h1>
                                <p>The growth in Indian chemical industry is driven from international demand. Therefore, We required a platform that can make the process for international clients easier in terms of exporting from India. Maqure is primarily doing the same. Therefore, it will become a big platform in the years comeby.</p>
                                <p className="user_testimonials_box_2_member">Unilever | Team member</p>
                                <div className="user_testimonials_box_2_sub_box">
                                    <img src={UnileverLogo} alt="" />
                                    <div className="user_testimonials_box_2_sub_box_image_slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="user_testimonials_main_box">
                            <div className="user_testimonial_box_1">
                                <img src={UserTestimonial} alt="" />
                            </div>
                            <div className="user_testimonial_box_2">
                                <h1 style={{ fontFamily: "poppins" }} className="display_none_to_mobile">&#8221;</h1>
                                <p>The small manufacturers have suffered immensely because of price imposition. Their lack of negotiating power has always kept them susceptible to highly inflated prices. Maqure, with its system, has capability to transform it. Maqure will reverse the age old functioning of market by empowering the end buyer.</p>
                                <p className="user_testimonials_box_2_member">Unilever | Team member</p>
                                <div className="user_testimonials_box_2_sub_box">
                                    <img src={UnileverLogo} alt="" />
                                    <div className="user_testimonials_box_2_sub_box_image_slider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prevNext">
                    <div><a href="#s4">&lt;</a><a href="#s2">&gt;</a></div>
                    <div><a href="#s1">&lt;</a><a href="#s3">&gt;</a></div>
                    <div><a href="#s2">&lt;</a><a href="#s4">&gt;</a></div>
                    <div><a href="#s3">&lt;</a><a href="#s1">&gt;</a></div>
                </div>

                <div className="bullets">
                    <a href="#s1">1</a>
                    <a href="#s2">2</a>
                    <a href="#s3">3</a>
                    <a href="#s4">4</a>
                </div>

            </div>
        </>
    )
}

export default Slider