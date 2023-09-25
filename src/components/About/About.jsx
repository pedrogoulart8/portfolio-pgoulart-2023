import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {

    return (

        <section className={styles.container} id='about'>
            <h2 className={styles.title}>Sobre</h2>
            <div className={styles.content}>

                <img
                    src={getImageUrl('about/aboutImage.png')} alt="Imagem seçao sobre"
                    className={styles.aboutImage}
                />

                <ul className={styles.aboutItems}>

                    <li className={styles.aboutItem}>
                        <img className={styles.liImg} src={getImageUrl('about/cursorIcon.png')} alt="cursor imagem" />
                        <div className={styles.aboutItemText}>
                            <h3>Desenvolvedor Front-end</h3>
                            <p>Iniciei minha carreira como Desenvolvedor em 2022 e, desde então, tenho me dedicado a aprimorar minhas habilidades em tecnologias como: 
                                <br/>
                                <strong>
                                    React, JavaScript, PHP, WordPress, HTML, CSS(SCSS), Bootstrap, Node.js, Git, GitHub
                                </strong>
                            </p>
                        </div>
                    </li>

                    
                    <li className={styles.aboutItem}>
                        <img className={styles.liImg} src={getImageUrl('about/uiIcon.png')} alt="UI imagem"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Experiências anteriores</h3>
                            <p>Iniciei minha carreira no setor administrativo, porém, nos últimos anos, assumi a gestão do meu próprio e-commerce, ao mesmo tempo em que oferecia serviços de desenvolvimento de websites e tráfego pago para clientes externos.</p>
                        </div>
                    </li>


                    <li className={styles.aboutItem}>
                        <img className={styles.liImg} src={getImageUrl('about/serverIcon.png')} alt="server imagem"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Portfólio</h3>
                            <p> Estou constantemente buscando oportunidades para aprender e evoluir na minha profissão. <br/>
                            Meu portfólio contém projetos pessoais onde busco aplicar meus conhecimentos em soluções para os problemas do nosso cotidiano.</p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>

    )

}

export default About