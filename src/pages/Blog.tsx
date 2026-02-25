const Blog =() => {
    const posts = [
    {
      id: 1,
      date: "2024.05.12",
      title: "Exploring the Neural Nebula",
      excerpt: "A deep dive into how modern AI architectures mimic cosmic structures.",
      tags: ["AI", "Space", "Tech"]
    },
    {
      id: 2,
      date: "2024.04.28",
      title: "Zero Gravity CSS Layouts",
      excerpt: "Mastering Flexbox and Grid without losing your orbit in the viewport.",
      tags: ["Frontend", "Design"]
    },
    {
      id: 3,
      date: "2024.03.15",
      title: "The Silent Void of Debugging",
      excerpt: "What happens when your code goes into a black hole? Strategies for error recovery.",
      tags: ["Coding", "Logbook"]
    }
  ];
 return (
       <article className=" ">
            <section className=" mx-auto p-4  max-w-5xl bg-[#1a181a]">
                <div className=" text-7xl flex w-full flex-col fontstart">
                    <h2 className=" ">
                    Blog
                    </h2>
                    
                    <div className="flex flex-col gap-6 w-full mt-4 font-mono text-lg border-t-4 border-dashed border-white pt-6">
                        {posts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                
                {/* Meta data - font-mono */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-mono">
                  <span>[{post.date}]</span>
                  <div className="h-[1px] flex-grow bg-white/20"></div>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="border border-white/40 px-2 py-0.5 text-[10px]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Post Title - fontstart */}
                <h3 className="text-3xl fontstart text-white group-hover:text-gray-400 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                {/* Excerpt - font-mono */}
                <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed font-mono text-lg">
                  {post.excerpt}
                </p>

                {/* Read more - font-mono */}
                <div className="mt-6 inline-block text-sm font-mono border-b border-white pb-1 hover:text-gray-300 transition-all">
                  READ_FULL_LOG -{'>'}
                </div>
              </div>
            ))}
                    </div>
                </div> 
            </section>
        </article>  
 )
}

export default Blog