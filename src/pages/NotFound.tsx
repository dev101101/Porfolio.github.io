import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <article className="min-h-[70vh] flex items-center justify-center">
      <section className="mx-auto p-8 max-w-5xl bg-[#1a181a] border-2 border-dashed border-white text-center">
        <div className="flex flex-col items-center gap-6">
          {/* Usando tu clase fontstart para el título grande */}
          <h2 className="text-9xl fontstart text-white">404</h2>
          
          <div className="font-mono text-xl text-gray-300">
            <p className="uppercase tracking-widest text-2xl font-bold mb-2">Lost in space</p>
            <p className="text-sm opacity-80">
              The coordinates you provided do not exist in this sector of the galaxy.
            </p>
          </div>

          <Link 
            to="/home" 
            className="mt-6 px-8 py-3 bg-white text-black font-bold font-mono hover:invert transition-all duration-300"
          >
            RETURN TO MISSION CONTROL
          </Link>
        </div>
      </section>
    </article>
  );
};

export default NotFound;