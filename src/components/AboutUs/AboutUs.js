import React from "react";
import './AboutUs.css'
import Card from "react-bootstrap/Card";


function AboutUs() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <img className="blockquot" src="https://avatars.githubusercontent.com/u/73418649?v=4" alt="" />

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">saiful isalm</footer>
                    <br />
                    <br />
                    <p style={{ textAlign: "center" }}>
                        Hi Everyone, I am <span className="purple">SAIFUL ISLAM </span>
                        from <span className="purple"> Dhaka Bangladesh</span>
                        <br /><h6>Hello everyone, I'm a   & Web Developer & Graphic Designer I have 3 years of experience, with different companies and customers from different countries in the world. And I have skills in programs: Adobe Photoshop Adobe Illustrator Adobe In Design. I have good experience in the following areas: Web Development, HTML CSS, PHP, JAVASCRIPT, JQUERY WordPress. I have 2 years of design experience. 100% refund if not satisfied.</h6>


                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutUs;
