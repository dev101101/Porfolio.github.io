import { NavLink } from "react-router-dom"

const Header = () => {
  const buttos = [
    "Home",
    "Blog",
    "Proyects",
    "Speaking",
    
  ]
  const name = "Diego Amachi"
  const Routernav = (arg:string)=>{
    if (arg = "GitHub"){
      return 
    }
  }
  return (
    <header className="relative  flex w-full h-screen items-center gap-2 justify-center ">
      <div className='galaxy'>
          <div className='stars1'></div>
          <div className='stars2'></div>
          <div className='stars3'></div>
      </div>
      <div className='title w-full h-full flex titlecont'>
        <h1 className=" text-9xl title text-white"> {name.toLocaleUpperCase()}</h1>
        <div className=" text-6xl text-nowrap devstyle text-[#ffea00]">
          Developer Engineer  
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <nav className=" fontstart gap-5 flex justify-around content-center  w-full top-0 z-10 p-4   px-3 py-2">
          <ul className=" bg-black p-1 box-border flex gap-1 justify-start">
            { buttos.map((nav, index) => {
                return (
                  
                <NavLink key={index} to={nav.toLocaleLowerCase()} className={`
                      py-2 px-4  text-center text-2xl
                      text-gray-300 bg-[#0466c8] cursor-pointer box-border border-4 border-t-[#5fadfc] border-l-[#5fadfc] border-r-[#003367] border-b-[#003367] min-w-[150px] active:border-t-[#003367] active:border-l-[#003367] active:border-r-[#5fadfc] active:border-b-[#5fadfc] hover:text-white active:text-white select-none w-1/5 active:translate-y-1 transition-all duration-75
                    `}>
                          {nav}
                </NavLink>
                )}) }

              <a 
                href="https://github.com/dev101101" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
              py-2 px-4  text-center text-2xl
              text-gray-300 bg-[#0466c8] cursor-pointer box-border border-4 border-t-[#5fadfc] border-l-[#5fadfc] border-r-[#003367] border-b-[#003367] min-w-[150px] active:border-t-[#003367] active:border-l-[#003367] active:border-r-[#5fadfc] active:border-b-[#5fadfc] hover:text-white active:text-white select-none w-1/5 active:translate-y-1 transition-all duration-75
            `}
              >
                  GitHub
              </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
