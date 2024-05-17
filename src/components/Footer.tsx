export default function Footer() {
  const footerLinks = [
    { name: "TERMS OF SERVICE", link: "/terms" },
    { name: "PRIVACY POLICY", link: "/policy" },
    { name: "DISCORD", link: "/discord" },
    { name: "SUPPORT", link: "/support" },
    { name: "CAREERS", link: "/careers" },
  ];
  return (
    <div className="bg-black py-20 flex justify-center">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <button>
            <img src="/logo.png" alt="logo" />
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center divide-x">
          {footerLinks?.map((item, index) => (
            <button key={index} className="px-4">
              {item?.name}
            </button>
          ))}
        </div>
        <div className="text-center max-w-6xl">
          © 2024 Prism is not endorsed by Riot Games, nor does it reflect the
          views or opinions of Riot Games or anyone officially involved in
          League of Legends’ production and/or management. League of Legends and
          Riot Games are trademarks or registered trademarks of Riot Games, Inc.
          League of Legends © Riot Games, Inc.
        </div>
      </div>
    </div>
  );
}
