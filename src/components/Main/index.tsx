import styles from './Main.module.css';

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & CSS Modules',
}) => (
  <main className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.description}>{description}</h2>
  </main>
);

export default Main;
