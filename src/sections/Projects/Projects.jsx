import styles from './ProjectsStyles.module.css';
import movie from '../../assets/assets/movie.jpg';
import netflix from '../../assets/assets/netflix.jpg';
import news from '../../assets/assets/news.webp';
import gemini from '../../assets/assets/gemini.webp';
import hotel from '../../assets/assets/hotel.jpg';
import ProjectCard from '../../common/ProjectCard';
import iPhone from '../../assets/assets/iPhone.jpg';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={movie}
          link="https://github.com/sandaruwagachchi/Movie-Tickets-Booking-System"
          h3="Movie Tickets Booking System"
          p="Using Java Language and MySQL"
        />
        <ProjectCard
          src={hotel}
          link="https://github.com/sandaruwagachchi/Hotel-Management-System"
          h3="Hotel Management System"
          p="Using C# Language and MySQL"
        />
         <ProjectCard
          src={netflix}
          link="https://github.com/sandaruwagachchi/Netflix-Clone"
          h3="Netflix Clone Website"
          p="Using React JS and Firebase"
        />
         <ProjectCard
          src={news}
          link="https://github.com/sandaruwagachchi/news-website"
          h3="SandaNews-360 Website"
          p="Using React JS"
        />
         <ProjectCard
          src={gemini}
          link="https://github.com/sandaruwagachchi/gemini-clone"
          h3="Gemini Clone Website"
          p="Using React JS"
        />
         <ProjectCard
          src={iPhone}
          link="https://github.com/sandaruwagachchi/apple-clone"
          h3="Apple iPhone 15 Pro Website"
          p="Using React JS, GSAP and Three JS"
        />
      </div>
    </section>
  );
}

export default Projects;
