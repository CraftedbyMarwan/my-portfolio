export default function About() {
  return (
    <section id='about' className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="text-lg">
          <p className="mb-4">
            Greetings! I'm Marwan Mohammed Youssef, a junior front-end developer with a deep-seated passion for coding. While my initial path was in mechatronics engineering, my love for creating and problem-solving through programming led me to the dynamic world of front-end development.          </p>
          <h3 className="text-2xl font-semibold mb-4">Skills:</h3>
          <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}