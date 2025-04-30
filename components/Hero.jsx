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
          {/* Profile Picture Image */}
          <img
            src="/images/your-profile-picture.jpg" // *** Replace with the actual path to your image ***
            alt="Marwan Mohammed"
            className={Styles.profileImageStyle}
          />
        </div>

        {/* Section for Text Content */}
        <div className={Styles.textContent}>
          {/* Headline */}
          <h1 className={Styles.headline}>
            Marwan Mohammed | Junior Front-End Developer
          </h1>

          {/* Tagline */}
          <p className={Styles.tagline}>
             Crafting engaging and responsive web experiences.
          </p>

          {/* Call to Action Button */}
          <a
            href="#projects"
            className={Styles.awesomeButton}
            // className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg"
          >
            View My Work
          </a>
        </div>

      </div>
    </section>
  );
}