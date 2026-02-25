const Speaking = ()=>{
    const talks = [
    {
      id: 1,
      topic: "THE AI BUBBLE",
      title: "THE SILICON OVERFLOW: WHY THE AI BUBBLE IS READY TO BURST",
      description: "A critical analysis of the current IT landscape. We are over-investing in LLMs while neglecting fundamental architecture. The hype is decoupling from utility, and the correction will be historic.",
      tags: ["CRITICAL_THINKING", "MARKET_TRENDS", "AI"]
    },
    {
      id: 2,
      topic: "GAME DEVELOPMENT",
      title: "PROCEDURAL WORLDS VS. HANDCRAFTED DESIGN",
      description: "Discussing the soul of video games. Why the industry's obsession with scale and AI-generated assets is killing the 'art' in game design. A call to return to mechanics-first development.",
      tags: ["GAMEDEV", "PHILOSOPHY", "DESIGN"]
    },
    {
      id: 3,
      topic: "SOFTWARE ENGINEERING",
      title: "CLEAN CODE IN THE AGE OF CO-PILOTS",
      description: "Programming is becoming a managed service. How to maintain technical excellence and deep understanding when automated tools are writing 60% of our boilerplate.",
      tags: ["PROGRAMMING", "BEST_PRACTICES", "FUTURE_WORK"]
    }
  ];
    return(
        <article className=" ">
            <section className=" mx-auto p-4  max-w-5xl bg-[#1a181a]">
                <div className=" text-7xl flex w-full flex-col fontstart">
                    <h2 className=" ">
                    Speaking
                    </h2>             
                    <div className="flex flex-col gap-6 w-full mt-4 font-mono text-lg border-t-4 border-dashed border-white pt-6">
                        {talks.map((talk) => (
              <div key={talk.id} className="relative group">
                {/* Topic Header - font-mono */}
                <div className="font-mono text-sm mb-2 flex items-center gap-3">
                  <span className="text-red-500 animate-pulse">● LIVE_TALK</span>
                  <span className="text-gray-500">// {talk.topic}</span>
                </div>

                {/* Talk Title - fontstart */}
                <h3 className="text-4xl fontstart text-white leading-tight hover:text-red-500 transition-colors duration-300">
                  {talk.title}
                </h3>
                
                {/* Description - font-mono */}
                <p className="mt-6 text-gray-400 font-mono text-lg leading-relaxed border-l-2 border-white/10 pl-4">
                  {talk.description}
                </p>

                {/* Tags & Metadata - font-mono */}
                <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
                  {talk.tags.map(tag => (
                    <span key={tag} className="text-white border border-white/20 px-2 py-1 italic">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Aesthetic Detail */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <span className="text-white fontstart text-2xl tracking-tighter">{`>>>`}</span>
                </div>
              </div>
            ))}
                    </div>
                </div> 
            </section>
        </article>  
    )
}
export default Speaking