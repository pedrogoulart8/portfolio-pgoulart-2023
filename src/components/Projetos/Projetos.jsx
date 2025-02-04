import React from "react";

import styles from "./Projetos.module.css"

import projects from "../../data/projects.json";
import { ProjetoCard }  from "./ProjetoCard";

export const Projetos = () => {
  return (
    <section className={styles.container} id="projetos">
      <h2 className={styles.title}>Projetos</h2>

      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjetoCard key={id} project={project} />
          )
        })}
      </div>

    </section>
  )
}

export default Projetos