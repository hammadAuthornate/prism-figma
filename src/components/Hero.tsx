export default function Hero() {
  return (
    <>
      <div className="flex justify-center my-60">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl">
          <div className="w-1/2">Image</div>
          <div className="flex flex-col gap-4 w-1/2">
            <div>Prism NFT Collection</div>
            <div>
              A Collection of 10,000 Undead NFTs Minted On The Ethereum
              Blockchain. Each Unique Deadfella Is Randomly Generated From A
              Combination.
            </div>
            <div className="w-full flex flex-row justify-between">
              <div>Total Minted</div>
              <div>
                <strong>0%</strong> (0/100)
              </div>
            </div>
            {/* <input type="range" className="w-full" /> */}
            <div className="bg-gray-700 rounded-full w-full h-4"></div>
            <div className="border-b w-full"></div>
            <div>Price</div>
            <div className="flex flex-row w-full items-end justify-between">
              <div className="flex gap-4 items-end">
                <div className="text-xl">0.087121 DUEL</div>
                <div className="text-sm">$0.002398</div>
              </div>
              <div className="flex flex-row rounded-full items-center gap-4 bg-gray-400 px-1">
                <div className="size-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-3xl">
                  +
                </div>
                <div className="text-white text-4xl">0</div>
                <div className="size-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-3xl">
                  -
                </div>
              </div>
            </div>
            <div className="bg-pink-600 w-full rounded-full text-center py-4">
              MINT
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-16 mb-80">
        <div className="text-6xl font-extrabold">GameGPT Avatar Collection</div>
        <div className="max-w-5xl text-center text-2xl">
          Introducing the GameGPT Genesis NFT Collection. Our 6000 NFT avatars
          all play their part in charing the story of a futuristic post-Earth
          world where space exploration and the benevolent (or malevolent) use
          of AI shape the future of humanity. Each of our 6000 NFTs will belong
          to one of out three factions (2000 NFTs per faction)
        </div>
      </div>
    </>
  );
}
