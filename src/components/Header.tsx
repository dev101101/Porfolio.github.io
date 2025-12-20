
const Header = () => {
  return (
    <header className=" h-18 flex w-full position-sticky top-0 z-10  items-center gap-2 justify-around">
      <div className='title'>
       <a className='start items-center justify-center '>Diego Amachi</a>
      </div>
      <nav>
        <a className=" rounded ">Home</a>
        <a>About me</a>
        <a>Contact</a>
        <a>Projects</a>
      </nav>
    </header>
  );
};

export default Header;
