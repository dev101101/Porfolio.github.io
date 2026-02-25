const Proyects = ()=>{
    const proyectList = [
    {
      id: 1,
      name: "CONTAB",
      type: "FINANCIAL SYSTEM",
      description: "A high-precision accounting system designed for real-time asset tracking, automated tax calculation, and fiscal reporting with encrypted data storage.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      status: "STABLE_BUILD"
    },
    {
      id: 2,
      name: "NEBULA UI",
      type: "DESIGN SYSTEM",
      description: "A comprehensive component library focused on dark-mode aesthetics and fluid cosmic animations for modern web applications.",
      tech: ["TypeScript", "Storybook", "Framer Motion"],
      status: "PRODUCTION"
    },
    {
      id: 3,
      name: "ORBITAL TRACKER",
      type: "DATA VISUALIZATION",
      description: "Interactive 3D dashboard for monitoring satellite positions and debris density in Low Earth Orbit using real-time API telemetry.",
      tech: ["Three.js", "D3.js", "Python"],
      status: "BETA_TESTING"
    }
  ];
    return (
        <article className=" ">
            <section className=" mx-auto p-4  max-w-5xl bg-[#1a181a]">
                <div className=" text-7xl flex w-full flex-col fontstart">
                    <h2 className=" ">
                    Proyects
                    </h2>
                    
                    <div className="flex flex-col gap-6 w-full mt-4 font-mono text-lg border-t-4 border-dashed border-white pt-6">
                        {proyectList.map((proyect) => (
              <div key={proyect.id} className="group relative border-l-2 border-white/20 pl-6 hover:border-white transition-all duration-500">
                
                {/* Type & Status - font-mono */}
                <div className="flex justify-between items-center mb-4 font-mono text-xs tracking-[0.2em] text-gray-500">
                  <span>// {proyect.type}</span>
                  <span className="text-green-500">[{proyect.status}]</span>
                </div>

                {/* Name - fontstart */}
                <h3 className="text-5xl fontstart text-white group-hover:text-gray-300 transition-colors">
                  {proyect.name}
                </h3>
                
                {/* Description - font-mono */}
                <p className="mt-6 text-gray-400 max-w-3xl leading-relaxed font-mono text-lg">
                  {proyect.description}
                </p>

                {/* Tech Stack - font-mono */}
                <div className="mt-6 flex flex-wrap gap-3 font-mono">
                  {proyect.tech.map(t => (
                    <span key={t} className="bg-white text-black px-3 py-1 text-xs font-bold uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action - font-mono */}
                <div className="mt-8">
                  <a href="#" className="font-mono text-sm border-b-2 border-white pb-1 hover:bg-white hover:text-black transition-all">
                    VIEW_SOURCE_CODE -{`>`}
                  </a>
                </div>
              </div>
            ))}
                    </div>
                </div> 
            </section>
        </article>  
    )
}

export default Proyects