export default function Cards() {
  return (
    <div className="bg-[url('/bgfull2.png')] bg-cover bg-top">
      <div className="flex justify-center items-center mb-80">
        <div className="max-w-5xl text-center text-2xl">
          Introducing the GameGPT Genesis NFT Collection. Our 6000 NFT avatars
          all play their part in charing the story of a futuristic post-Earth
          world where space exploration and the benevolent (or malevolent) use
          of AI shape the future of humanity. Each of our 6000 NFTs will belong
          to one of out three factions (2000 NFTs per faction)
        </div>
      </div>
      <div className="flex flex-col gap-20 text-black">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-center max-w-7xl w-full bg-[url('/bg1.png')] bg-cover rounded-3xl">
            <div className="flex flex-col justify-between gap-8 w-full md:w-1/2 p-20">
              <div className="text-4xl font-extrabold">The Guard</div>
              <div className="text-pretty">
                Harnessing AI to more deeply understand nature, the Guard are
                brilliant synthetic biologists who find their own answers to the
                universe through a profound understanding of organic life and
                genetic engineering. Their goal is to restore Earth and
                transform it from its current barren state to a once-again green
                and blue paradise.
              </div>
              <div className="flex flex-row gap-8">
                <button className="bg-gray-950 text-white rounded-full px-6 py-4">
                  Character Reveal
                </button>
                <button className="border-gray-950 border rounded-full px-6 py-4 flex gap-4">
                  <img src="/play.png" />
                  Concept Video
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                src="/card1.png"
                alt="card image"
                className="origin-bottom bg-bottom absolute -bottom-20 scale-50 md:scale-100 opacity-40 md:opacity-100"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col-reverse md:flex-row justify-center max-w-7xl w-full bg-[url('/bg2.png')] bg-cover rounded-3xl">
            <div className="w-full md:w-1/2 relative">
              <img
                src="/card2.png"
                alt="card image"
                className=" origin-bottom bg-bottom absolute -bottom-20 scale-50 md:scale-100 opacity-40 md:opacity-100"
              />
            </div>
            <div className="flex flex-col justify-between gap-8 w-full md:w-1/2 p-20">
              <div className="text-4xl font-extrabold">The Code</div>
              <div className="text-pretty">
                Harnessing AI to more deeply understand technology, the Code
                channeled their proficiency in hardware and software to unlock a
                new frontier of nanotechnology. Living underground on Mars, the
                constant flow of nanobots circulating through their body
                eliminates their need for food, water and even sunlight. Their
                goal is to spread the teachings of their founder Null to all who
                will reach out their hand and join The Code.
              </div>
              <div className="flex flex-row gap-8">
                <button className="bg-gray-950 text-white rounded-full px-6 py-4">
                  Character Reveal
                </button>
                <button className="border-gray-950 border rounded-full px-6 py-4 flex gap-4">
                  <img src="/play.png" />
                  Concept Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-center max-w-7xl w-full bg-[url('/bg3.png')] bg-cover rounded-3xl">
            <div className="flex flex-col justify-between gap-8 w-full md:w-1/2 p-20">
              <div className="text-4xl font-extrabold">The Rebels</div>
              <div className="text-pretty">
                Harnessing the power of human ingenuity, the rebels are a
                risk-taking, freedom-seeking nomadic space-faring civilization.
                The last survivors on Earth before its collapse, the rebels have
                become proficient in hydrolysis and use it to its full extent
                for their hydrogen power cells
              </div>
              <div className="flex flex-row gap-8">
                <button className="bg-gray-950 text-white rounded-full px-6 py-4">
                  Character Reveal
                </button>
                <button className="border-gray-950 border rounded-full px-6 py-4 flex gap-4">
                  <img src="/play.png" />
                  Concept Video
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img
                src="/card3.png"
                alt="card image"
                className=" origin-bottom bg-bottom absolute -bottom-20 -left-20 scale-50 md:scale-100 opacity-40 md:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
