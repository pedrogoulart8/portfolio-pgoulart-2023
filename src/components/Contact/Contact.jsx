import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contato" className={styles.container}>
            <div className={styles.text}>
                <h2>Aguardo seu contato!</h2>
                
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:pedromgoulartt@gmail.com">pedromgoulartt@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/pedromgoulart/">linkedin.com/in/pedromgoulart/</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/pedrogoulart8">github.com/pedrogoulart8</a>
                </li>
            </ul>
        </footer>
    );
};

export default Contact