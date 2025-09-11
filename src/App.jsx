import { useState } from "react";
import Navbar from "./component/Navbar";
import CardProject from "./component/CardProject";
import CardExp from "./component/CardExp";
import Button from "./component/Button";
import "./App.css";
import TextType from "./component/TextType"; // <-- 1. Impor komponen TextType
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import heroImage from "./assets/hero-section.png";
import about from "./assets/about.jpg";
import Footer from "./component/Footer";

function App() {
  const cardDataProjects = [
    {
      image: about, // Gunakan variabel gambar yang sudah diimpor
      category: "UI/UX",
      title: "Lock Your Phone In",
      description:
        "A productivity web app that uses computer vision and object detection to monitor you through your camera.",
      liveUrl: "#", // Ganti dengan link live demo
      githubUrl: "#", // Ganti dengan link repository GitHub
      techStack: ["React.js", "TensorFlow.js"],
    },
    {
      image: about, // Gunakan variabel gambar yang sudah diimpor
      category: "Full-Stack",
      title: "Event Management System",
      description:
        "A web platform to manage and register for campus events, built with a team of 4 developers.",
      liveUrl: "#",
      githubUrl: "#",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    {
      image: about, // Gunakan variabel gambar yang sudah diimpor
      category: "Full-Stack",
      title: "Event Management System",
      description:
        "A web platform to manage and register for campus events, built with a team of 4 developers.",
      liveUrl: "#",
      githubUrl: "#",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    {
      image: about, // Gunakan variabel gambar yang sudah diimpor
      category: "Full-Stack",
      title: "Event Management System",
      description:
        "A web platform to manage and register for campus events, built with a team of 4 developers.",
      liveUrl: "#",
      githubUrl: "#",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    {
      image: about, // Gunakan variabel gambar yang sudah diimpor
      category: "Full-Stack",
      title: "Event Management System",
      description:
        "A web platform to manage and register for campus events, built with a team of 4 developers.",
      liveUrl: "#",
      githubUrl: "#",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    {
      image: about, // Gunakan variabel gambar yang sudah diimpor
      category: "Full-Stack",
      title: "Event Management System",
      description:
        "A web platform to manage and register for campus events, built with a team of 4 developers.",
      liveUrl: "#",
      githubUrl: "#",
      techStack: ["Node.js", "Express", "MongoDB"],
    },
    // Tambahkan data proyek lainnya di sini
  ];

  const expData = [
    {
      title: "Vice Head of Front End Department",
      date: "Jan 2025 - Present",
      organization: "BEM FILKOM UB",
      tag: "Organizational", // <-- Tag untuk filter
      location: "Malang, Indonesia",
      responsibilities: [
        "Leading a team of 14 active members in frontend development initiatives.",
        "Mentoring junior members and conducting weekly code reviews.",
      ],
    },
    {
      title: "Frontend Developer Intern",
      date: "Jun 2024 - Dec 2024",
      organization: "Tech Company",
      tag: "Internship", // <-- Tag untuk filter
      location: "Jakarta, Indonesia",
      responsibilities: [
        "Developed and maintained critical components for the main web application.",
        "Worked with a team to build a new feature for a million users.",
      ],
    },
    {
      title: "Freelance Web Developer",
      date: "2023 - Present",
      organization: "Self-Employed",
      tag: "Work", // <-- Tag untuk filter
      location: "Malang, Indonesia",
      responsibilities: [
        "Translated Figma designs into responsive websites for local businesses.",
        "Optimized page loading speed and performance.",
      ],
    },
  ];

  // --- LOGIKA FILTER DIMULAI DI SINI ---

  // 2. State untuk menyimpan filter yang sedang aktif
  const [activeFilter, setActiveFilter] = useState("All");

  // 3. Daftar kategori untuk tombol filter
  const categories = ["All", "Organizational", "Internship", "Work"];

  // 4. Filter data pengalaman berdasarkan state yang aktif
  const filteredExperiences =
    activeFilter === "All"
      ? expData
      : expData.filter((exp) => exp.tag === activeFilter);

  return (
    <div className="bg-[#05060B] min-h-screen flex flex-col items-center py-10 px-4 md:px-16 gap-16">
      <Navbar />

      {/* ===== 1. BUAT PEMBUNGKUS BARU UNTUK HERO SECTION ===== */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl justify-center">
        {/* Kolom Kiri: Teks dan Tombol */}
        <div className="flex flex-col gap-6 items-start max-w-2xl text-center md:text-left">
          {/* Ikon Sosial Media */}
          <div className="flex items-center gap-6 w-full justify-center md:justify-start">
            <a
              href="https://github.com/faizfznn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/mfaizfauzan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>
            <a
              href="https://www.instagram.com/faizfznn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>

            <a href="mailto:faiz150605@gmail.com">
              <FaEnvelope className="text-white text-3xl hover:text-gray-400 transition-all duration-200 transform hover:scale-110" />
            </a>
          </div>

          {/* Teks Utama */}
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-5xl md:text-[64px] font-black leading-tight md:leading-[72px]">
              Hi, I'm Faiz.
            </h1>
            <p className="text-white font-medium text-2xl md:text-[32px]">
              Undergraduate | CS @ UB
            </p>
            {/* <p className="text-white font-medium text-xl md:text-[32px]">
              Interested in Software Engineering and UI/UX, focusing on creating
              seamless digital experiences.
            </p> */}
            <TextType
              as="p"
              text={[
                "Interested in Software Engineering and UI/UX, focusing on creating seamless digital experiences.",
                "hi stego, im tyro",
                "UI/UX Designer",
              ]}
              className="text-white font-medium text-xl md:text-[32px] min-w-[672px]" 
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={1500}
            />
          </div>

          <Button
            href="https://docs.google.com/document/d/1MUVU7px2PdNLKCUQPGYkxkPEeKpSIObc74uD_KbiTvE/edit?usp=sharing"
            target="_blank"
          >
            Explore My Resume
          </Button>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="flex-shrink-0 mt-10 md:mt-0">
          <img
            src={heroImage}
            alt="Faiz dan tim memenangkan kompetisi"
            className="max-w-xs md:max-w-md lg:max-w-[500px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Bagian About Me */}
      <div
        id="about-me"
        className="flex flex-col gap-8 w-full max-w-7xl mt-16 items-center"
      >
        {/* Judul "About Me" */}
        <h2 className="text-white text-center font-sans text-5xl md:text-[64px] font-black leading-tight">
          About Me
        </h2>

        {/* Kontainer untuk konten (teks di kiri, gambar di kanan) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24 px-4">
          {/* Kolom Kiri: Teks */}
          <div className="flex flex-col gap-4 max-w-xl text-white">
            <h3 className="text-4xl font-bold">Muhammad Faiz Fauzan</h3>

            {/* Paragraf dipisah untuk memberi jarak */}
            <div className="space-y-4 text-lg text-gray-300 font-medium">
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
                  className="font-bold hover:underline"
                >
                  faiz150605@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="flex-shrink-0 mt-8 md:mt-0">
            <img
              src={about}
              alt="Muhammad Faiz Fauzan"
              className="rounded-lg w-72 lg:w-80 h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Bagian Experience
      <div
        id="experience"
        className="flex flex-col gap-6 w-full max-w-7xl mt-16 justify-center items-center"
      >
        <p className="self-stretch text-white text-center font-sans text-5xl md:text-[64px] font-black leading-tight md:leading-[72px]">
          Experience
        </p>
        {expData.map((project, index) => (
          <CardExp key={index} {...project} />
        ))}
      </div> */}

      <div
        id="experience"
        className="flex flex-col gap-8 w-full max-w-7xl mt-16 justify-center items-center"
      >
        <p className="self-stretch text-white text-center font-sans text-5xl md:text-[64px] font-black leading-tight md:leading-[72px]">
          Experience
        </p>

        {/* ===== 5. TAMBAHKAN TOMBOL FILTER DI SINI ===== */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                w-fit py-2 px-5 flex justify-center items-center rounded-md text-white font-medium 
                transition-all duration-300 transform hover:scale-105
                ${
                  activeFilter === category
                    ? "border border-blue-400 bg-blue-600/50 brightness-125" // Style Aktif
                    : "border border-white/10 hover:brightness-125" // Style Non-Aktif
                }
              `}
              // Terapkan background gradient hanya jika tombol tidak aktif
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
        {/* ============================================== */}
        
        {/* 6. Tampilkan data yang sudah difilter */}
        <div className="flex flex-col gap-6 w-full items-center">
            {filteredExperiences.map((exp, index) => (
              <CardExp key={index} {...exp} />
            ))}
        </div>
      </div>

      {/* Bagian Project */}
      <div
        id="project"
        className="flex flex-col gap-8 w-full max-w-7xl mt-16 justify-center items-center"
      >
        <p className="self-stretch text-white text-center font-sans text-5xl md:text-[64px] font-black leading-tight md:leading-[72px]">
          Projects
        </p>

        {/* ===== CARA MEMANGGILNYA DI SINI ===== */}
        <div className="flex flex-wrap justify-center gap-8">
          {cardDataProjects.map((project, index) => (
            <CardProject
              key={index} // Kunci unik untuk setiap item
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
