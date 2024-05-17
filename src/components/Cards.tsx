export default function Cards() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-center">
        <div className="flex flex-row justify-center max-w-7xl w-full bg-blue-300 rounded-3xl">
          <div className="flex flex-col gap-8 w-1/2 p-20">
            <div>The Guard</div>
            <div className="text-pretty">
              Harnessing AI to more deeply understand nature, the Guard are
              brilliant synthetic biologists who find their own answers to the
              universe through a profound understanding of organic life and
              genetic engineering. Their goal is to restore Earth and transform
              it from its current barren state to a once-again green and blue
              paradise.
            </div>
            <div className="flex flex-row gap-8">
              <button className="bg-gray-950 text-white rounded-full px-6 py-4">
                Character Reveal
              </button>
              <button className="border-gray-950 border rounded-full px-6 py-4">
                Concept Video
              </button>
            </div>
          </div>
          <div className="w-1/2">Image</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row justify-center max-w-7xl w-full bg-blue-300 rounded-3xl">
          <div className="w-1/2">Image</div>
          <div className="flex flex-col gap-8 w-1/2 p-20">
            <div>The Code</div>
            <div className="text-pretty">
              Harnessing AI to more deeply understand technology, the Code
              channeled their proficiency in hardware and software to unlock a
              new frontier of nanotechnology. Living underground on Mars, the
              constant flow of nanobots circulating through their body
              eliminates their need for food, water and even sunlight. Their
              goal is to spread the teachings of their founder Null to all who
              will reach out their hand and join The Code.
            </div>
            <div className="flex flex-row gap-8">
              <button className="bg-gray-950 text-white rounded-full px-6 py-4">
                Character Reveal
              </button>
              <button className="border-gray-950 border rounded-full px-6 py-4">
                Concept Video
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-row justify-center max-w-7xl w-full bg-blue-300 rounded-3xl">
          <div className="flex flex-col gap-8 w-1/2 p-20">
            <div>The Rebels</div>
            <div className="text-pretty">
              Harnessing the power of human ingenuity, the rebels are a
              risk-taking, freedom-seeking nomadic space-faring civilization.
              The last survivors on Earth before its collapse, the rebels have
              become proficient in hydrolysis and use it to its full extent for
              their hydrogen power cells
            </div>
            <div className="flex flex-row gap-8">
              <button className="bg-gray-950 text-white rounded-full px-6 py-4">
                Character Reveal
              </button>
              <button className="border-gray-950 border rounded-full px-6 py-4">
                Concept Video
              </button>
            </div>
          </div>
          <div className="w-1/2">Image</div>
        </div>
      </div>
    </div>
  );
}
