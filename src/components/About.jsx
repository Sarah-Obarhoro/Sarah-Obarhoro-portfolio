import Image from '../assets/images/Sarah.png'

const About = () => {
  return (
    <div className="bg-black flex">
      <div>
        <h1 className="text-blue font-playFair font-bold text-3xl">Hi!</h1>
        <h2 className="text-blue">I am Sarah</h2>
        <p className="text-blue">
          A Software Developer who is passionate about creating not just
          visually appealing, but highly functional websites and products that
          prioritize user experience and are easy to navigate. I believe that
          coding is a superpower, and I take joy in tackling challenges for my
          clients, solving them one line of code at a time. When I{`'`}m not
          immersed in code, you{`'`}ll often find me engrossed in fiction, using
          it as a portal to explore other worlds, or unwinding to the tunes of
          my favorite music. At other times, I indulge my curiosity by delving
          into emerging technologies, fascinated by the ever-evolving landscape
          of innovation. That being said, if you are looking for someone to
          translate your ideas into tangible digital experiences and transform
          your concepts into reality, I{`'`}m your girl!
        </p>
      </div>
      <div>
        <img src={Image} alt="Sarah {`'`}s Image" />
      </div>
    </div>
  );
}

export default About