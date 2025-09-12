const Tags = (props) => {
  const { children } = props;
  return (
    <div
      className="w-fit h-fit flex py-[6px] px-[10px] flex-col justify-center items-center rounded-md border border-white/10 bg-[#353E5F]/40 backdrop-blur-xs text-white text-xs sm:text-sm"
    >
      {children}
    </div>
  );
};

export default Tags;