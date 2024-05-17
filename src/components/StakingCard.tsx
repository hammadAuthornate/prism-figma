export default function StakingCard() {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-row justify-center max-w-7xl w-full bg-blue-300 rounded-3xl">
        <div className="flex flex-col gap-8 w-1/2 p-20">
          <div>NFT Staking</div>
          <div className="text-pretty">
            Owning an NFT grants premier access to the entire GameGPT ecosystem,
            offering exclusive benefits like
          </div>
          <div className="flex flex-row gap-8">
            <button className="bg-gray-950 text-white rounded-full px-6 py-4">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="w-1/2">Image</div>
      </div>
    </div>
  );
}
