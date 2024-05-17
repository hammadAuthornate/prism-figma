export default function Footer() {
  return (
    <div className="bg-black py-20 flex justify-center">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">Logo</div>
        <div className="flex flex-wrap justify-center items-center divide-x">
          <div className="px-4">TERMS OF SERVICE</div>
          <div className="px-4">PRIVACY POLICY</div>
          <div className="px-4">DISCORD</div>
          <div className="px-4">SUPPORT</div>
          <div className="px-4">CAREERS</div>
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
