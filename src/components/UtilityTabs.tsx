export default function UtilityTabs() {
  return (
    <div className="rounded-3xl w-full bg-orange-400 py-60 mt-20">
      <div className="flex flex-col justify-center items-center gap-8">
        <div>NFT Utility</div>
        <div>
          Owning an NFT grants premier access to the entire GameGPT ecosystem,
          offering exclusive benefits like
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 max-w-44">
            <div className="h-12 bg-blue-300"></div>
            <div>EARLY ACCESS</div>
            <div>
              for upcoming games on the platform, allowing holders to play,
              provide feedback, and influence game development
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-44">
            <div className="h-12 bg-blue-300"></div>
            <div>EXCLUSIVE ACCESS</div>
            <div>to game modes with DUEL token rewards and wagering</div>
          </div>
          <div className="flex flex-col gap-4 max-w-44">
            <div className="h-12 bg-blue-300"></div>
            <div>BATTLE PASS FOR LIFE</div>
            <div>
              which provide in-game rewards, loot boxes, lotteries, airdrops and
              IRL prizes as you play.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
