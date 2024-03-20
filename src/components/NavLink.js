const NavLink = ({ text = "Le laboratoire" }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-[5px] text-left text-xs text-prim-light font-title5">
      <a
        className="relative font-bold text-[inherit] [text-decoration:none]"
        href="https://link"
        target="_blank"
      >
        {text}
      </a>
      <img className="w-[9px] relative h-[5px]" alt="" src="/chevronbot.svg" />
    </div>
  );
};

export default NavLink;
