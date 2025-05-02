import { Styles } from "@/styles/hero";

export default function Hero() {
  return (
    <section
      id="hero"
      className={Styles.section}
    >

      <div className={Styles.sectioncontent}>

        {/* Section for Profile Image */}
        <div className={Styles.profileImage}> 
          <img
            src="imgs/profile.webp"
            alt="Marwan Mohammed"
            className={Styles.profileImageStyle}
          />
        </div>
    
        {/* Section for Text Content */}
        <div className={Styles.textContent}>
          {/* Headline */}
          <h1 className={Styles.headline}>
            Marwan Mohammed <span className=""> Junior Front-End Developer </span>
          </h1>

          {/* Tagline */}
          <p className={Styles.tagline}>
            Crafting engaging and responsive web experiences.
          </p>

          {/* Call to Action Button */}
          <a
            href="#projects"
            className={Styles.awesomeButton}
          >
            View My Work
          </a>
        </div>

      </div>
    </section>
  );
}