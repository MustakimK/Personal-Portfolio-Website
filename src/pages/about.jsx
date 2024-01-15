import '../styles/about.css';
import { smoothScroll } from '../components/smoothscroll.js';

const About = () => {

    const handleContactClick = (event) => {
        event.preventDefault();
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            smoothScroll(contactSection);
        }
    };

    return (
        <section className="about-me">
            <h1 className="about-me-title">About Me</h1>
            <div className="about-me-container">
                <div className="about-text">
                    My name is Mustakim Kazi and I am a full-stack web developer. 
                    I am currently a 3rd year student at McMaster University studying Computer Science.
                    I am currently looking for an internship for the summer of 2024 as a software engineer.
                    Feel free to <a href="#contact" onClick={handleContactClick}>contact me</a> if you have any questions or would like to work with me! (WIP)
                </div>
                <img src='./images/aboutme.jpg' alt="Picture of Me" className="about-pic" />
            </div>
        </section>
    );
};

export default About;
