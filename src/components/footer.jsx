import '../styles/footer.css'; // Assuming you have a footer.css file

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} Designed & Built by Mustakim Kazi</p>
        </footer>
    );
};

export default Footer;
