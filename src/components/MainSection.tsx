import { useState } from "react";

export default function MainSection() {
  const [tab, setTab] = useState(0);
  const tabList = [
    "GameGPT Ultimate Game Pass Access",
    "Attribute System",
    "Mythic NFTs",
  ];
  const tab0ItemsList = [
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
  const tab1ItemList = [
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

  const benefitsList = [
    {
      title: "Exclusive Perks for Early Holders 1",
      description:
        "200 Early NFT holders will be randomly selected to receive 500k $DUEL (6000 USD value)",
      image: "bg-[url('/frame1.png')]",
    },
    {
      title: "Exclusive Perks for Early Holders 2",
      description:
        "There will be a twice weekly lottery for our early NFT holders where our holders can be randomly selected to receive various IRL prizes ranging from a PS5, Gaming Laptop, Amazon Giftcard or $1000 in DUEL!",
      image: "bg-[url('/frame2.png')]",
    },
    {
      title: "Exclusive Perks for Early Holders 1",
      description:
        "There will be a private discord channel for our NFT holders where they can get first look on all GameGPT games, GameGPT game builder, new game integrations and NFT news! There will be regular AMAs with the founders and the GameGPT team will be most responsive in this channel",
      image: "bg-[url('/frame3.png')]",
    },
  ];
  return (
    <>
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
              <div className="font-extrabold text-4xl">
                Prism NFT Collection
              </div>
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
          <div className="text-6xl font-extrabold">
            GameGPT Avatar Collection
          </div>
        </div>
      </div>
      <div className="bg-[url('/bgfull2.png')] bg-cover bg-top">
        <div className="flex justify-center items-center mb-80">
          <div className="max-w-5xl text-center text-2xl">
            Introducing the GameGPT Genesis NFT Collection. Our 6000 NFT avatars
            all play their part in charing the story of a futuristic post-Earth
            world where space exploration and the benevolent (or malevolent) use
            of AI shape the future of humanity. Each of our 6000 NFTs will
            belong to one of out three factions (2000 NFTs per faction)
          </div>
        </div>
        <div className="flex flex-col gap-20 text-black">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-center max-w-7xl w-full bg-[url('/bg1.png')] bg-cover rounded-3xl">
              <div className="flex flex-col justify-between gap-8 w-full md:w-1/2 p-20">
                <div className="text-4xl font-extrabold">The Guard</div>
                <div className="text-pretty">
                  Harnessing AI to more deeply understand nature, the Guard are
                  brilliant synthetic biologists who find their own answers to
                  the universe through a profound understanding of organic life
                  and genetic engineering. Their goal is to restore Earth and
                  transform it from its current barren state to a once-again
                  green and blue paradise.
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
                  channeled their proficiency in hardware and software to unlock
                  a new frontier of nanotechnology. Living underground on Mars,
                  the constant flow of nanobots circulating through their body
                  eliminates their need for food, water and even sunlight. Their
                  goal is to spread the teachings of their founder Null to all
                  who will reach out their hand and join The Code.
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
                  risk-taking, freedom-seeking nomadic space-faring
                  civilization. The last survivors on Earth before its collapse,
                  the rebels have become proficient in hydrolysis and use it to
                  its full extent for their hydrogen power cells
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
          {tab === 0 && (
            <>
              <div>
                Owning an NFT grants premier access to the entire GameGPT
                ecosystem, offering exclusive benefits like
              </div>
              <div className="flex flex-col md:flex-row gap-10">
                {tab0ItemsList?.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 max-w-60">
                    <img src={item.image} alt="frame" />
                    <div className="font-extrabold text-2xl">{item.title}</div>
                    <div>{item.description}</div>
                  </div>
                ))}
              </div>
            </>
          )}
          {tab === 1 && (
            <>
              <div>
                When you mint your NFT, you’ll be randomly assigned attribute
                scores on 6 dimensions from 1-20. They are
              </div>
              <div className="flex flex-wrap w-full justify-center items-center gap-10">
                {tab1ItemList?.map((item, index) => (
                  <div key={index}>
                    <img src="/tick.png" className="inline mx-2" /> {item}
                  </div>
                ))}
              </div>
              <div className="text-center justify-center flex text-balance">
                All self-published and creator program games in our arcade will
                have a best to worst ranking of attributes that affect gameplay.
                For example, if you are playing a puzzle game and its best
                ranked attribute is Perception (PER) and you have an above
                average perception score {"(> 10)"}, you will receive an
                advantage in your gameplay.
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
                      <div className="font-extrabold text-xl">
                        {item?.title}
                      </div>
                      <div className="text-pretty">{item?.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {tab === 2 && (
            <>
              <div>
                100 NFTs in our collection will contain a Mythic trait, mythic
                NFTs receive royalties from certain games on the GameGPT
                platform
              </div>
              <img src="/nftimage.png" />
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col md:flex-row justify-center max-w-7xl w-full bg-[url('/bg4.png')] bg-cover rounded-3xl">
          <div className="flex flex-col gap-8 w-full md:w-1/2 p-20">
            <div className="text-4xl font-extrabold">NFT Staking</div>
            <div className="text-pretty">
              Owning an NFT grants premier access to the entire GameGPT
              ecosystem, offering exclusive benefits like
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
      <div className="flex flex-col justify-center items-center my-20 bg-[url('/bgfull1.png')] bg-cover bg-bottom pb-20">
        <div className="max-w-96 text-center font-extrabold text-4xl my-20">
          Early Holder Perks and Benefits
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {benefitsList?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 max-w-md w-full h-96 p-4 ${item.image} bg-cover origin-top pt-32 text-center rounded-3xl`}
            >
              <div className="font-extrabold text-xl">{item?.title}</div>
              <div>{item?.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
