export default function StakingCard() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col md:flex-row justify-center max-w-7xl w-full bg-[url('/bg4.png')] bg-cover rounded-3xl">
        <div className="flex flex-col gap-8 w-full md:w-1/2 p-20">
          <div className="text-4xl font-extrabold">NFT Staking</div>
          <div className="text-pretty">
            Owning an NFT grants premier access to the entire GameGPT ecosystem,
            offering exclusive benefits like
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <button className="bg-gray-950 text-white rounded-full px-6 py-4">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/card4.png"
            alt="card image"
            className="origin-right scale-110 bg-bottom h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
