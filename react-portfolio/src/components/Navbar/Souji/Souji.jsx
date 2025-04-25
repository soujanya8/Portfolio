import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Souji.module.css";

export const Souji = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Soujanya</h1>
        <p className={styles.description}>
          Full-Stack Developer with 3+ years of experience, specializing in
          frontend development with React, JavaScript, TypeScript, and Redux,
          plus solid backend work using Java, Spring Boot, and MongoDB. I am
          skilled in building accessible, high-performance web apps with strong
          API development, integration and Agile/TDD practices.
        </p>
        <a href = "mailto:soujanyagodugu82@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src = {getImageUrl("hero/heroImage.png")} alt = "Soujanya Image" className={styles.soujiImage}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur}/>
    </section>
  );
};
