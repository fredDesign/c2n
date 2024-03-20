import NavbarContainer from "./NavbarContainer";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-3 px-[59px] gap-[7px] border-b-[1px] border-solid border-aliceblue">
      <NavbarContainer
        dimensionCode="/navbar-brand@2x.png"
        imageDimensionsCode="/image-1@2x.png"
        imageDimensionsCode2="/image-11@2x.png"
        imageDimensionsCode3="/image-12@2x.png"
        navbarContainerWidth="unset"
        navbarContainerAlignSelf="stretch"
      />
      <MainNav
        mainNavWidth="unset"
        mainNavMargin="0"
        mainNavAlignSelf="stretch"
      />
    </div>
  );
};

export default Header;
