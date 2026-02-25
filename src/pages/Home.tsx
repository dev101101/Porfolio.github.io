const Home = () => {

  return (
    <article className=" ">

      <section className=" mx-auto p-4  max-w-5xl bg-[#1a181a]">
        <div className=" text-7xl flex w-full flex-col fontstart">
            <h2 className=" ">
                Hey , I'm Diego!
            </h2>
            
            <div className="flex flex-col gap-6 w-full mt-4 font-mono text-lg border-t-4 border-dashed border-white pt-6">
              <picture className=" m-auto">
                <img className=" max-w-96 pixel-corners--wrapper" src="Daigo.png" alt="diego" />
              </picture>
                <p>
                    I am a <span className="text-blue-400">Backend-focused Software Engineer</span> with a solid track record of building scalable and efficient applications since 2022. My core ecosystem is built on **Node.js and Express**, where I architect robust server-side logic and manage relational databases such as **MySQL and SQLite**. On the client side, I have extensive experience using **React** to develop dynamic and interactive user interfaces.
                </p>

                <p>
                    Currently, I am dedicated to deepening my expertise in backend services, optimizing data handling, and refining business logic. I am passionate about solving complex infrastructure challenges and am actively seeking new professional opportunities where I can contribute to high-performance backend systems.
                </p>

                <p>
                    Beyond the terminal, I am an enthusiast of <span className="text-pink-400">Pixel Art</span>. This hobby allows me to merge my love for technology with visual creativity, a discipline I occasionally showcase through my social media pieces.
                </p>
            </div>
        </div>
        </section>  
    </article>
  );
};

export default Home;