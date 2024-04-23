import React,{useEffect} from "react";
import "./homef.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Chair from "./Images/chair.jpeg";
import Tablechair from "./Images/tablechair.jpeg";
import Turfchair from "./Images/tuftchair.jpeg";
import Centertable from "./Images/Centertable.jpeg";
import hall from "./Images/hall.png";
import bedroom from "./Images/bedroom.jpg";
// import "animate.css/animate.min.css";
import Blog1 from "./Images/blog1.jpeg";
import Blog2 from "./Images/blog2.jpeg";
import Blog3 from "./Images/blog3.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Furnitureplus from "./Images/Furnitureplus.jpeg";
function HomeP()
{
    useEffect(()=>{
        AOS.init({duration:2500})
    }, [])
    return(
        <div className="holder">
           <nav>
                <div className="navbar">
                    <div className=" name"><span>Furniture</span><span className="nameplus">+</span></div>
                        <div className="anchor"><a href="#arrivalss">Arrivals</a></div>
                        <div className="anchor"><a>Discover</a></div>
                        <div className="anchor"><a>Contact</a></div>
                        <div className="anchor"><a>Blogs</a></div>
                </div>
            </nav> 
            <div className="mainpage">
                <div className="part1">
                    <span className="design">Luxury Meets</span>
                    <h1>
                    <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:120,
                            strings:["Furniture+"]
                        }}
                    />
                </h1>
                <button className="btn">View Latest Collections</button>
                </div>
                <div className="part2">
                    <span className="content">Our goal at Furniture+ is to work with you to design an environment that says who you are and what you enjoy.</span>
                </div>
                <div className="part3">
                    <span className="content">We'll assemble everything for you. Free in-store or in-home design consultations one-on-one!</span>
                </div>
            </div>
            <div className="subpage" id="arrivalss">
                <div className="header">
                    <h1>Latest Arrivals</h1>
                    <a className="viewall">View All</a>
                </div>
                <div className="products">
                    <div className="product">
                        <div className="product1">
                            <img src={Chair} alt="Chair"/>
                        </div>
                        <div className="product2">
                            <span> Chair </span>
                            <span className="price">₹ 6999 </span>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product1">
                            <img src={Tablechair} alt="Tablechair"/>
                        </div>
                        <div className="product2">
                            <span> Rosewood Table </span>
                            <span className="price">₹ 9999 </span>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product1">
                            <img src={Turfchair} alt="Turfchair"/>
                        </div>
                        <div className="product2">
                            <span> Tuft Chair </span>
                            <span className="price">₹ 16999 </span>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product1">
                            <img src={Centertable} alt="Centertable"/>
                        </div>
                        <div className="product2">
                            <span> Center Table </span>
                            <span className="price">₹ 19999 </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thirdpage" data-aos="fade-up" data-aos-anchor-placement="top-bottom" id="discoverr">
                <div className="header2">
                    <h1>Discover</h1>
                </div>
                <div className="empty"></div>
                <div className="thirdholder">
                    <div className="discover1">
                        <div className="dpart1">
                            <img src={hall} alt="LivingroomImage"/>
                        </div>
                        <div className="dpart2">
                            <h1>Living room furniture</h1>
                            <span className="content2">Your living room is probably where you unwind the most, so you should make it comfy. It's simple to combine comfort with current elegance.</span>
                            <a className="viewall2">View more</a>
                        </div>
                    </div>
                <div className="empty"></div>
                    <div className="discover1">
                    <div className="dpart2">
                            <h1>Bedroom furniture</h1>
                            <span className="content2">Your living room is probably where you unwind the most, so you should make it comfy. It's simple to combine comfort with current elegance.</span>
                            <a className="viewall2">View more</a>
                        </div>
                        <div className="dpart1">
                            <img src={bedroom} alt="BedroomImage"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="fourpage">
                <div className="fourholder">
                    <div className="fpart1">
                        <h1>OUR STRENGTHS</h1>
                        <br></br>
                        <br></br>
                        <span className="contentofSTRENGTHS">We provide excellent pricing, premium products, and top-notch customer support. We make novel and surprising connections between consumers and goods and services.</span>
                        <br></br>
                        <span className="contentofSTRENGTHS">We contribute to building everyone's ideal house. Recognised by influential people in the industry as one of the most reliable retailers, they score well on employee and customer satisfaction.</span>
                        <br></br>
                        <br></br>
                        <div className="entries">
                            <div className="entry1">
                                <span className="num">700+</span>
                                <span className="numspan">Projects Finished</span>
                            </div>
                            <div className="entry2">
                                <span className="num">29+</span>
                                <span className="numspan">Across the Country</span>
                            </div>
                        </div>

                    </div>
                    <div className="fpart2">
                        <img src={Furnitureplus} alt="logo"/>
                        
                    </div>
                </div>
            </div>
            <div className="pagefive">
                <div className="blogholder">
                    <div className="blog">
                        <img src={Blog1} alt="blog1"/>
                        <br></br>
                        <span className="price">2024-05-27 </span>
                        <h2>The Craftsmanship Behind Quality Furniture</h2>
                        <button className="btn2">→</button>
                    </div>
                    <div className="blog">
                        <img src={Blog2} alt="blog1"/>
                        <br></br>
                        <span className="price">2024-05-27 </span>
                        <h2>Whats Your Living Room Furniture Style?</h2>
                        <button className="btn2">→</button>
                    </div>
                    <div className="blog">
                        <img src={Blog3} alt="blog1"/>
                        <br></br>
                        <span className="price">2024-05-27 </span>
                        <h2>A Monochromatic Color Scheme</h2>
                        <button className="btn2">→</button>
                    </div>
                </div>
            </div>
            <div className="contact" id="contactt">
                <div className="contact1">
                    <h1>WE WORK WITH INDIVIDUALS <br></br>AND THE AMBITIONS BRAND. <br></br>LET'S DISCUSS AND DESIGN <br></br>FANTASTIC PRODUCTS.</h1>
                    <span>helpfurnitureplus@outlook.com</span>
                </div>
                <div className="contact1">
                    <div className="border"></div>
                    <h1>Main Office</h1>
                    <span className="address">132/b Judges Bunglow Opp. <br></br>Wildcrew Hydreabad 465421</span>
                    <div className="linkholder">
                        <span className="link">Instagram</span>
                        <span className="link">Facebook</span>
                        <span className="link">Twitter</span>
                    </div>
                    <div className="border"></div>
                </div>
            </div>
            <div className="footer">
                <span>©Furniture+. All Rights Reserved 2024 <br></br></span>
                <span>Developed by <Link to="https://bento.me/dharmeesh">Dharmeesh Rathod</Link></span>
            </div>
        </div>
    );
}
export default HomeP;