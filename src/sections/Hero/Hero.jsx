import styles from './HeroStyles.module.css';
import heroImage from '../../assets/assets/IMG-20240817-WA0027.jpg';
import sun from '../../assets/assets/sun.svg';
import moon from '../../assets/assets/moon.svg';
import twitterLight from '../../assets/assets/twitter-light.svg';
import twitterDark from '../../assets/assets/twitter-dark.svg';
import linkedInLight from '../../assets/assets/linkedin-light.svg';
import linkedInDark from '../../assets/assets/linkedin-dark.svg';
import githubLight from '../../assets/assets/github-light.svg';
import githubDark from '../../assets/assets/github-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile picture of Sandaru Wagachchi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sandaru
          <br />
          Wagachchi
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/sandaru-wagachchi-8996a32b2/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="linkedIn" />
          </a>

          <a href="https://github.com/sandaruwagachchi" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="https://x.com/SPWagachchi" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm currently studying Diploma in Software Engineering at National
          Institute of Business Management. <br />
          (NIBM-SriLanka)
        </p>
      </div>
    </section>
  );
}

export default Hero;
