import Tags from "./Tags";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const CardProject = ({
  image,
  category,
  title,
  description,
  liveUrl,
  githubUrl,
  techStack = [],
}) => {
  return (
    <div
      className="
        w-full max-w-[314px] sm:w-[314px] 
        rounded-lg overflow-hidden 
        border border-[#1A1E2B] 
        transition-all duration-300 transform 
        hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
        mx-auto sm:mx-0
      "
      style={{
        background:
          "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
      }}
    >
      {/* Bagian Gambar Atas */}
      <div className="relative h-40 sm:h-48 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute top-3 right-3">
          <Tags>{category}</Tags>
        </div>
      </div>

      {/* Bagian Konten Bawah */}
      <div className="p-4 flex flex-col gap-2 text-white">
        {/* Judul dan Ikon Link */}
        <div className="flex flex-col justify-between items-start gap-2">
          <h3 className="text-lg sm:text-xl font-bold leading-tight">{title}</h3>
          <div className="flex items-center gap-3">
            {liveUrl && liveUrl !== "#" && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-gray-700 transition-colors"
                aria-label="View live demo"
              >
                <FiExternalLink className="text-xl sm:text-2xl text-gray-400 hover:text-white transition-colors" />
              </a>
            )}
            {githubUrl && githubUrl !== "#" && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1 rounded hover:bg-gray-700 transition-colors"
                aria-label="View GitHub repository"
              >
                <FaGithub className="text-xl sm:text-2xl text-gray-400 hover:text-white transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-gray-300 font-medium leading-relaxed break-words">
          {description}
        </p>

        {/* Tag Teknologi */}
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <Tags key={index}>{tech}</Tags>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;