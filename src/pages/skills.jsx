import "../styles/skills.css";

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="skills-content">
                <div className="skills-section">
                    <h2>Languages</h2>
                    <ul>
                        <li><img src="./icons/python.svg" alt="Python" /> Python</li>
                        <li><img src="./icons/javascript.svg" alt="JavaScript" /> JavaScript</li>
                        <li><img src="./icons/java.svg" alt="Java" /> Java</li>
                        <li><img src="./icons/html.svg" alt="HTML" /> HTML</li>
                        <li><img src="./icons/css.svg" alt="CSS" /> CSS</li>
                        <li><img src="./icons/sql.svg" alt="SQL" /> SQL Databases</li>
                        <li><img src="./icons/kotlin.svg" alt="Kotlin" /> Kotlin</li>
                        <li><img src="./icons/haskell.svg" alt="Haskell" /> Haskell</li>
                        <li><img src="./icons/c.svg" alt="C" /> C</li>
                        <li><img src="./icons/prolog.svg" alt="Prolog" /> Prolog</li>
                    </ul>
                </div>
                <div className="skills-section">
                    <h2>Frameworks & Libraries</h2>
                    <ul>
                        <li><img src="./icons/node.svg" alt="Node" /> Node</li>
                        <li><img src="./icons/react.svg" alt="React" /> React</li>
                        <li><img src="./icons/docker.svg" alt="Docker" /> Docker</li>
                        <li><img src="./icons/mongo.svg" alt="MongoBD" /> MongoDB</li>
                        <li><img src="./icons/express.svg" alt="Express" /> Express</li>
                        <li><img src="./icons/firebase.svg" alt="Firebase" /> Firebase</li>
                    </ul>
                </div>
                <div className="skills-section">
                    <h2>Tools & Technologies</h2>
                    <ul>
                        <li><img src="./icons/git.svg" alt="Git" /> Git</li>
                        <li><img src="./icons/postman.svg" alt="Postman" /> Postman</li>
                        <li><img src="./icons/linux.svg" alt="Linux" /> Linux</li>
                        <li><img src="./icons/windows.svg" alt="Windows" /> Windows</li>
                        <li><img src="./icons/intellij.svg" alt="Intellij" /> Intellij Idea</li>
                        <li><img src="./icons/vscode.svg" alt="VSCode" /> VSCode</li>
                        <li><img src="./icons/jupyter.svg" alt="Jupyter" /> Jupyter</li>
                        <li><img src="./icons/vite.svg" alt="Vite" /> Vite</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
