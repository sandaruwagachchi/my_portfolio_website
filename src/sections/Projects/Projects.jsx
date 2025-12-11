import styles from './ProjectsStyles.module.css';
import movie from '../../assets/assets/movie.jpg';
import netflix from '../../assets/assets/netflix.jpg';
import news from '../../assets/assets/news.webp';
import gemini from '../../assets/assets/gemini.webp';
import hotel from '../../assets/assets/hotel.jpg';
import ProjectCard from '../../common/ProjectCard';
import iPhone from '../../assets/assets/iPhone.jpg';
import game from '../../assets/assets/gaming.png';
import music from '../../assets/assets/music.png';
import solor from '../../assets/assets/solor.jpg';
import bus from '../../assets/assets/bus.jpg';
import park from '../../assets/assets/park.jpg';


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
        <ProjectCard
          src={game}
          link="https://github.com/sandaruwagachchi/sandavortex-gaming-website"
          h3="SandaVortex Gaming Website"
          p="Using React JS, GSAP and Tailwind CSS"
        />
         <ProjectCard
          src={music}
          link="https://github.com/sandaruwagachchi/sw-music.lk"
          h3="SW-Music.lk"
          p="Using React Native CLI and Supabase"
        />
        <ProjectCard
          src={solor}
          link="https://github.com/sandaruwagachchi/rayspire_solor_mobile_app"
          h3="Rayspire Solor App"
          p="Using Kotlin and Firebase"
        />
        <ProjectCard
          src={bus}
          link="https://github.com/Thenula09/PassengerApp"
          h3="Highway Bus Tracking & Booking App"
          p="Using React Native CLI and Firebase"
        />
        <ProjectCard
          src={park}
          link="https://github.com/sandaruwagachchi/smartparky_app"
          h3="SmartParky App"
          p="Using Flutter and Firebase"
        />
      </div>
    </section>
  );
}

export default Projects;
