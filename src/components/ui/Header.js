import Nav from "./Nav";

const Header = () => {
  return (
    <header className="absolute top-0  z-20 w-full after:absolute after:top-full after:left-0 after:z-30 after:block after:h-px  after:bg-slate-200 lg:border-slate-200  lg:after:hidden">
      <Nav />
    </header>
  );
};

export default Header;
