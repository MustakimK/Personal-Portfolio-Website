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
                    My name is Mustakim Kazi and I&apos;m currently a 3rd year Computer Science student at McMaster University. 
                    I&apos;m passionate about software development and my portfolio reflects a diverse range of projects, including a 
                    custom UNIX shell, a full-stack Android application, a full-stack web application, and many more. I&apos;m actively 
                    looking for a software engineering internship opportunity for the Winter of 2025, and I would be more than happy to 
                    answer any questions or explore potential collaborations. Please feel free to <a href="#contact" onClick={handleContactClick}>contact me</a> if you&apos;re interested!
                </div>
                <img src='./images/aboutme.jpg' alt="Picture of Me" className="about-pic" />
            </div>
        </section>
    );
};

export default About;
