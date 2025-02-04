import React from "react";


import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"


export const Hero = () => {
  return (

    <section className={styles.container}>

      <div className={styles.content}>
        <h1 className={styles.title}>Pedro Goulart</h1>
        <p className={styles.description}>Sou um desenvolvedor Front-End apaixonado por tecnologia. <br/> <br/> Meu propósito é fazer parte de uma equipe onde eu possa aprender constantemente e crescer ao lado de desenvolvedores mais experientes.</p>
        <div className={styles.sectionBtn}>
          <a href="https://www.linkedin.com/in/pedromgoulart/" target="_blank" className={styles.contactBtn}>Entre em contato</a>
          <a href="https://api.whatsapp.com/send?phone=5521998552748" target="_blank" className={styles.contactBtn2}>WhatsApp</a>
        </div>
      </div>

      <img className={styles.heroImg} src={getImageUrl('hero/heroImage.png')} alt="Imagem de Pedro" />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>

  )
}

export default Hero