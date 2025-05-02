import TechCarousel from './TechCarousel';


export default function About() {
  return (
    <section id='about' className="flex flex-col items-center justify-center h-screen px-4">
      <div className="container">
        {/* Heading for the section */}
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

        {/* Content container */}
        <div className="text-lg">
          {/* Main card container */}
          <div className="relative w-full h-auto rounded-[14px] z-[1111] overflow-hidden flex flex-col items-center justify-center card-styled-shadow p-2">

            {/* Background layer - Covers the parent card */}
            <div className="absolute inset-0 z-[2]  backdrop-blur-lg rounded-[10px] overflow-hidden  p-9 relative z-[3] flex flex-col">
              {/* Content Container within Background Layer */}
              {/* This div holds both the text and the Tech Stack section */}
              <div className="flex flex-col items-center md:flex-row md:gap-8">
                {/* Text Content Section*/}
          
                <div className="md:w-1/2 md:pr-4 flex flex-col gap-5">
                
                  <p className="mb-4">
                    Greetings! I'm Marwan Mohammed Youssef, a junior front-end developer with a deep-seated passion for coding.
                  </p>
                  <span> 
                    While my initial path was in mechatronics engineering, my love for creating and problem-solving through programming led me to the dynamic world of front-end development.
                  </span>

                </div>

                {/* Tech Stack Section */}
                <div className="md:w-1/2 md:pl-4 flex flex-col items-center">
                  {/* Tech Stack heading */}
                  {/* <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack:</h3> */}

                  <TechCarousel />
                </div>

              </div> {/* End of content container within background layer */}

            </div> {/* End of Background layer */}
            <div className="absolute z-[1] top-1/2 left-1/2 w-dvh h-full rounded-full bg-blue-500 opacity-100 blob-styled">
            </div>
          </div> {/* End of Main card container */}

        </div> {/* End of single content container */}
      </div>
    </section>
  );
}
