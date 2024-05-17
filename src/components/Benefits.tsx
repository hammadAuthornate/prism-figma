export default function Benefits() {
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
  );
}
