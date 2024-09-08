import styles from './ProjectsStyles.module.css';
import movie from '../../assets/assets/viberr.png';
import hotel from '../../assets/assets/fresh-burger.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={movie}
          link="https://github.com/sandaruwagachchi/Movie-Tickets-Booking-System"
          h3="Movie Tickets Booking System"
          p="Using Java Language"
        />
        <ProjectCard
          src={hotel}
          link="https://github.com/sandaruwagachchi/Hotel-Management-System"
          h3="Hotel Management System"
          p="Using C# Language"
        />
      </div>
    </section>
  );
}

export default Projects;
