import '../styles/contact.css';

const Contact = () => {
    return (
        <section className="contact-me">
            <h1 className="contact-me-title">Contact Me</h1>
            <p className="contact-text">
                I&apos;m always open to discussing new opportunities, projects, or collaborations. 
                Let&apos;s make something great together!
            </p>
            <div className="contact-buttons">
                <a href="./MustakimKazi_Resume.pdf" className="contact-btns" download>Get Resume</a>
                <a href="mailto:mustakimkazi10@gmail.com" className="contact-btns">Email Me</a>
            </div>
            <p className="connect-text">Connect with me here:</p>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/mustakim-kazi-92844a221/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src="./icons/linkedin.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/MustakimK" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <img src="./icons/github.svg" alt="GitHub" className="social-icon" />
                </a>
            </div>
        </section>
    );
};

export default Contact;