export default function Navbar() {
  const selectedRoute = "/";
  const routeList = [
    { name: "Home", link: "/" },
    { name: "Challenges", link: "/challenges" },
    { name: "Arcade", link: "/arcade" },
    { name: "Tokenomics", link: "/tokenomics" },
    { name: "Roadmap", link: "/roadmap" },
    { name: "Whitepaper", link: "/whitepaper" },
    { name: "NFT", link: "/nft" },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-between min-h-12 px-16 border-b">
      <button>
        <img src="/logo.png" alt="logo" />
      </button>
      <div className="flex flex-col md:flex-row gap-8">
        {routeList?.map((item, index) => (
          <button
            key={index}
            className={`${
              selectedRoute === item.link
                ? "border-t border-pink-600 text-pink-600"
                : ""
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <button className="rounded-3xl bg-gray-950 border border-white/70 px-4 py-2 my-4">
        Connect Button
      </button>
    </div>
  );
}
