import { useState } from "react";

export default function UtilityTabs() {
  const [tab, setTab] = useState(0);
  const tabList = [
    "GameGPT Ultimate Game Pass Access",
    "Attribute System",
    "Mythic NFTs",
  ];
  return (
    <div className="rounded-3xl w-full bg-[url('/bg5.png')] bg-cover bg-top py-60 mt-20">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="font-extrabold text-4xl">NFT Utility</div>
        <div className="flex flex-row gap-6 bg-white/25 text-black p-1 rounded-full">
          {tabList?.map((item, index) => (
            <button
              key={index}
              onClick={() => setTab(index)}
              className={`${
                tab === index ? "bg-white" : ""
              } rounded-full py-2 px-4`}
            >
              {item}
            </button>
          ))}
        </div>
        {tab === 0 && <Tab0 />}
        {tab === 1 && <Tab1 />}
        {tab === 2 && <Tab2 />}
      </div>
    </div>
  );
}

function Tab0() {
  const itemsList = [
    {
      title: "EARLY ACCESS",
      description:
        "for upcoming games on the platform, allowing holders to play, provide feedback, and influence game development",
      image: "/item1.png",
    },
    {
      title: "EXCLUSIVE ACCESS",
      description: "to game modes with DUEL token rewards and wagering",
      image: "/item2.png",
    },
    {
      title: "BATTLE PASS FOR LIFE",
      description:
        " which provide in-game rewards, loot boxes, lotteries, airdrops and IRL prizes as you play.",
      image: "/item3.png",
    },
  ];
  return (
    <>
      <div>
        Owning an NFT grants premier access to the entire GameGPT ecosystem,
        offering exclusive benefits like
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        {itemsList?.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 max-w-60">
            <img src={item.image} alt="frame" />
            <div className="font-extrabold text-2xl">{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function Tab1() {
  const itemList = [
    "Strength",
    "Dexterity",
    "Perception",
    "Intelligence",
    "Speed",
    "Luck",
  ];

  const nftList = [
    {
      title: "Leveling up NFTs through staking",
      image: "bg-[url('/nftlist1.png')]",
      description:
        "The fastest way to earn experience on your NFT is by staking, at progressively higher levels of experience your NFT will level up and you will be given the choice on which NFT attribute to upgrade",
    },
    {
      title: "Leveling up through gameplay",
      image: "bg-[url('/nftlist2.png')]",

      description:
        "The fastest way to earn experience on your NFT is by staking, at progressively higher levels of experience your NFT will level up and you will be given the choice on which NFT attribute to upgrade",
    },
    {
      title: "NFT mutation",
      image: "bg-[url('/nftlist3.png')]",

      description:
        "you can choose to mutate your NFT and by doing so redistributing your attribute points by paying a mutation fee.",
    },
  ];

  return (
    <>
      <div>
        When you mint your NFT, you’ll be randomly assigned attribute scores on
        6 dimensions from 1-20. They are
      </div>
      <div className="flex flex-wrap w-full justify-center items-center gap-10">
        {itemList?.map((item, index) => (
          <div key={index}>
            <img src="/tick.png" className="inline mx-2" /> {item}
          </div>
        ))}
      </div>
      <div className="text-center justify-center flex text-balance">
        All self-published and creator program games in our arcade will have a
        best to worst ranking of attributes that affect gameplay. For example,
        if you are playing a puzzle game and its best ranked attribute is
        Perception (PER) and you have an above average perception score{" "}
        {"(> 10)"}, you will receive an advantage in your gameplay.
      </div>
      <div className="flex justify-center text-balance text-4xl font-extrabold text-pink-500">
        How can you change your initial attributes?
      </div>
      <div className="flex flex-col gap-10">
        {nftList?.map((item, index) => (
          <div key={index} className="flex flex-row gap-8 max-w-4xl">
            <div
              className={`${item.image} min-w-36 min-h-36 rounded-3xl bg-cover text-black flex justify-center items-center font-extrabold text-6xl`}
            >
              {index + 1}
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <div className="font-extrabold text-xl">{item?.title}</div>
              <div className="text-pretty">{item?.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Tab2() {
  return (
    <>
      <div>
        100 NFTs in our collection will contain a Mythic trait, mythic NFTs
        receive royalties from certain games on the GameGPT platform
      </div>
      <img src="/nftimage.png" />
    </>
  );
}
