import Image from "../assets/images/Sarah.png";

const About = () => {
  return (
    <div className="bg-black">
      <div className="flex h-screen px-10">
        <div className="w-3/5 mt-20 pt-40">
          <h1 className="text-blue font-playFair font-bold text-xl">
            Hello There!{" "}
          </h1>
          <h2 className="text-blue font-playFair font-normal text-5xl mt-4">
            I am a Software Developer {`<>`}
          </h2>
          <p className="text-blue mt-6 font-playFair font-normal text-xl">
            Let me turn your <span> Ideas </span>{" "}
            <span> into Digital Reality </span>
          </p>
          <div className="flex justify-between w-2/4 mt-20">
            <button className="text-blue font-playFair font-normal border border-blue px-4 py-2 rounded hover:bg-blue hover:text-black">
              Contact Me
            </button>
            <button className="text-blue font-playFair font-normal border border-blue px-4 py-2 rounded hover:bg-blue hover:text-black">
              Download my CV
            </button>
          </div>
        </div>
        {/* <div
        // className="mt-20 w-[40%] border-8 border-blue rounded-full bg-white"
        >
          <img className="object-contain" src={Image} alt="Sarah {`'`}s Image" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
