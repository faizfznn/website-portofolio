import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import CardProject from "./component/CardProject";
import CardExp from "./component/CardExp";
import Button from "./component/Button";
import "./App.css";
import TextType from "./component/TextType";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import heroImage from "./assets/hero-section.png";
import about from "./assets/about.jpg";
import Footer from "./component/Footer";
import { expData } from "./data/experienceData";
import { cardDataProjects } from "./data/projectData";
import BackToTop from "./component/BackToTop";
import { Analytics } from '@vercel/analytics/react';

function App() {
  // Filter logic
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = [
    "All",
    "Organizational",
    "Achievement",
    "Internship",
    "Work",
  ];

  const filteredExperiences =
    activeFilter === "All"
      ? expData
      : expData.filter((exp) => exp.tag === activeFilter);

  return (
    <div className="bg-[#05060B] min-h-screen flex flex-col items-center py-6 sm:py-10 px-4 sm:px-8 md:px-16 gap-12 sm:gap-16">
      <Navbar />
      <Analytics/>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl justify-center gap-8 lg:gap-12">
        {/* --- UBAH BAGIAN INI --- */}
        <div className="flex flex-col gap-6 items-center lg:items-start w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 sm:gap-6 w-full justify-center lg:justify-start">
            <a
              href="https://github.com/faizfznn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-2xl sm:text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/mfaizfauzan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl sm:text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>
            <a
              href="https://www.instagram.com/faizfznn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-2xl sm:text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>
            <a href="mailto:faiz150605@gmail.com">
              <FaEnvelope className="text-white text-2xl sm:text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>
          </div>

          {/* Title and Description */}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black leading-tight">
              Hi, I'm Faiz.
            </h1>
            <p className="text-white font-medium text-lg sm:text-xl md:text-2xl lg:text-[32px]">
              Undergraduate | CS @ UB
            </p>
            {/* Pembungkus TextType sekarang memiliki tinggi minimum dan lebar penuh */}
            <div className="min-h-[80px] sm:min-h-[120px] w-full flex items-center justify-center lg:justify-start">
              <TextType
                as="p"
                text={[
                  "Interested in Software Engineering and UI/UX, focusing on creating seamless digital experiences.",
                  "hi stego, im tyro",
                  "UI/UX Designer",
                ]}
                className="text-white font-medium text-base sm:text-lg md:text-xl lg:text-[32px] w-full break-words"
                typingSpeed={70}
                deletingSpeed={50}
                pauseDuration={1500}
              />
            </div>
          </div>

          {/* CTA Button */}
          <Button
            href="https://docs.google.com/document/d/1MUVU7px2PdNLKCUQPGYkxkPEeKpSIObc74uD_KbiTvE/edit?usp=sharing"
            target="_blank"
          >
            Explore My Resume
          </Button>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <img
            src={heroImage}
            alt="Faiz dan tim memenangkan kompetisi"
            className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div
        id="about-me"
        className="flex flex-col gap-8 w-full max-w-7xl mt-8 sm:mt-16 items-center"
      >
        <h2 className="text-white text-center font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black leading-tight">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-24 px-4">
          <div className="flex flex-col gap-4 max-w-xl text-white order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left">
              Muhammad Faiz Fauzan
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-300 font-medium text-center lg:text-left">
              <p>
                Hi, you can call me Faiz. I am an undergraduate Computer Science
                student at Brawijaya University from Indonesia. I love learning
                and building things that are related to Software Engineering and
                UI/UX Design.
              </p>
              <p>
                I am very active in several campus organizations and
                communities. I usually document my projects and share
                information related to technology on my social media platforms.
              </p>
              <p>
                Aside from the nitty-gritty, I love listening to Clairo, Slow
                Pulp, Arctic Monkeys, The Marias, and many more. Here's my
                Spotify link if you're interested. I also love Marvel, Harry
                Potter, and all of my cats!
              </p>
              <p>
                Email me for any inquiries at{" "}
                <a
                  href="mailto:faiz150605@gmail.com"
                  className="font-bold hover:underline text-white"
                >
                  faiz150605@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 order-1 lg:order-2">
            <img
              src={about}
              alt="Muhammad Faiz Fauzan"
              className="rounded-lg w-64 sm:w-72 lg:w-80 h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div
        id="experience"
        className="flex flex-col gap-8 w-full max-w-7xl mt-8 sm:mt-16 justify-center items-center"
      >
        <p className="self-stretch text-white text-center font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black leading-tight">
          Experience
        </p>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                w-fit py-2 px-3 sm:px-5 flex justify-center items-center rounded-md text-white font-medium text-sm sm:text-base
                transition-all duration-300 transform hover:scale-105
                ${
                  activeFilter === category
                    ? "border border-blue-400 bg-blue-600/50 brightness-125"
                    : "border border-white/10 hover:brightness-125"
                }
              `}
              style={
                activeFilter !== category
                  ? {
                      background:
                        "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
                    }
                  : {}
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 w-full items-center px-4">
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((exp, index) => (
              <CardExp key={index} {...exp} />
            ))
          ) : (
            <p className="text-white text-center text-4xl mt-8">
              Maybe Next Year 😅
            </p>
          )}
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="project"
        className="flex flex-col gap-8 w-full max-w-7xl mt-8 sm:mt-16 justify-center items-center"
      >
        <p className="self-stretch text-white text-center font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black leading-tight">
          Projects
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4">
          {cardDataProjects.length > 0 ? (
            cardDataProjects.map((project, index) => (
              <CardProject
                key={index}
                image={project.image}
                category={project.category}
                title={project.title}
                description={project.description}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                techStack={project.techStack}
              />
            ))
          ) : (
            <p className="text-white text-center text-4xl mt-8">
              Maybe Next Year 😅
            </p>
          )}
        </div>
      </div>
      <Footer />
      {/* <BackToTop /> */}
    </div>
  );
}

export default App;
