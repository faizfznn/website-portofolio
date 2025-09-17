const Button = ({ children, href, target }) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={
        "w-fit h-[56px] py-[12px] px-[16px] flex justify-center items-center rounded-md border border-white/10 text-white transition-all duration-300 transform hover:scale-105 hover:brightness-125 text-sm sm:text-base"
      }
      style={{
        background:
          "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
      }}
    >
      {children}
    </a>
  );
};

export default Button;