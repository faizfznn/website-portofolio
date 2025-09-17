import Tags from "./Tags";

const CardExp = ({
  title,
  date,
  organization,
  tag,
  location,
  responsibilities,
}) => {
  return (
    <div
      className="
        flex w-full max-w-[953px] p-4 sm:p-6 
        flex-col items-start gap-4 
        rounded-lg transition-all duration-300 
        transform hover:scale-[1.02] hover:brightness-125
        mx-auto
      "
      style={{
        background:
          "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
      }}
    >
      {/* Bagian Header Kartu */}
      <div className="flex flex-col items-start gap-2 sm:gap-1 self-stretch">
        {/* Title and Date - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start self-stretch text-white gap-2 sm:gap-0">
          <p className="text-xl sm:text-2xl font-black leading-tight">{title}</p>
          <p className="text-sm sm:text-base font-medium text-gray-300 sm:text-white">{date}</p>
        </div>
        
        {/* Organization and Tag - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start self-stretch gap-2 sm:gap-0">
          <p className="text-sm sm:text-base font-medium text-white">{organization}</p>
          <div className="self-start sm:self-auto">
            <Tags>{tag}</Tags>
          </div>
        </div>
        
        {/* Location */}
        {location && (
          <p className="self-stretch text-white font-sans text-sm sm:text-base font-medium">
            {location}
          </p>
        )}
      </div>

      {/* Bagian List Tanggung Jawab */}
      <ul className="text-white text-sm sm:text-base font-medium list-disc list-outside pl-4 sm:pl-5 space-y-1 leading-relaxed">
        {responsibilities.map((item, index) => (
          <li key={index} className="break-words">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardExp;