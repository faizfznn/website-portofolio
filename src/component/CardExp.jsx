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
    // Menggunakan gradient yang sudah kita definisikan sebelumnya
    <div
      className="flex w-[953px] p-6 flex-col items-start gap-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:brightness-125"
      style={{
        background:
          "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
      }}
    >
      {/* Bagian Header Kartu */}
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex justify-between items-start self-stretch text-white">
          <p className="text-2xl font-black">{title}</p>
          <p className="text-base font-medium">{date}</p>
        </div>
        <div className="flex justify-between items-start self-stretch ">
          <p className="text-base font-medium text-white">{organization}</p>
          <Tags>{tag}</Tags>
        </div>
        <p className="self-stretch text-white font-sans text-base font-medium">
          {location}
        </p>
      </div>

      {/* Bagian List Tanggung Jawab (Dibuat Dinamis) */}
      <ul className="text-white text-base font-medium list-disc list-outside pl-5 space-y-1">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardExp;
