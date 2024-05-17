export default function Hero() {
  return (
    <div className="bg-[url('/bgfull1.png')] bg-cover bg-bottom">
      <div className="flex justify-center my-60">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl">
          <div className="w-full md:w-1/2 border p-6 border-white rounded-3xl flex justify-center items-center">
            <img
              src="/hero_image.png"
              alt="image"
              className="border border-white/40 rounded-3xl w-full"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 justify-between p-4">
            <div className="font-extrabold text-4xl">Prism NFT Collection</div>
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
              <div className="flex flex-row rounded-full items-center gap-4 bg-gray-900 px-1 h-10">
                <button className="size-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-2xl">
                  +
                </button>
                <div className="text-white text-2xl">0</div>
                <button className="size-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-2xl">
                  -
                </button>
              </div>
            </div>
            <button className="bg-pink-600 w-full rounded-full text-center py-4">
              MINT
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-12">
        <div className="text-6xl font-extrabold">GameGPT Avatar Collection</div>
      </div>
    </div>
  );
}
