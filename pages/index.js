import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Vue.js",
  "React.js",
  "LESS / SCSS / SASS",
  "PHP/Laravel",
  "Next.js",
  "React Native",
  "Node.js",
  "REST APIs",
  "SQL/NoSQL",
  "Git",
  "Scrum and Agile",
  "UI Libraries",
  "A11Y Accessibility",
];

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Holden Madagame - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <hr className={homeStyles.homeHr} />
        <p>
          Hi, I'm Holden Madagame{" "}
          <span className={utilStyles.ipa}>/mƏ-'da-gƏ-mi/</span>.{" "}
          <b>I'm a junior frontend developer</b> with a background in opera and
          trans/queer activism. Currently based in Berlin, Germany.{" "}
        </p>
        <p>
          I am a thoughtful, communicative, and professional frontend developer
          who values efficient and structured code. I'm a trained classical
          musician with an eye for perfection, a drive to work for sustainable
          goals and to create beautiful things.
        </p>
        <hr className={homeStyles.homeHr} />
        <div className={homeStyles.center}>
          <div className={homeStyles.skillsBlock}>
            {skills.map((skill) => (
              <div className={homeStyles.skill}>// {skill}</div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
