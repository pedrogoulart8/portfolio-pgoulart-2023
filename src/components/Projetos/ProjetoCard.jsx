import React from 'react'


import styles from "./ProjetoCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjetoCard = ({
    project: { title, imageSrc, description, skills, demo, source },
}) => {
    return (
        <div className={styles.container} >
            <img src={getImageUrl(imageSrc)} alt={`imagem de ${title}`} className={styles.image}  />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li className={styles.skill} key={id}>
                            {skill}
                        </li>
                    )
                })}
            </ul>
            <div className={styles.links}>
                <a className={styles.link} href={demo}>Link</a>
                <a className={styles.link} href={source}>GitHub</a>
            </div>
        </div>
    )
}

export default ProjetoCard