import "../styles/Hcard.css"

export default function HunterLicenseCard() {
    return (
      <div className="flex justify-center items-center min-h-auto">
        <div className="card relative w-60 h-96 perspective-1000 cursor-pointer group">
          <div className="card__content relative w-full h-full transform-style-3d transition-transform duration-600 ease-in-out group-hover:rotate-y-180">
            {/* FRONT SIDE */}
            <div className="card__front absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-white border-1 border-black rounded-xl backface-hidden p-2">
              <div className="h-2/3 bg-black flex flex-col items-center justify-center rounded-t-xl p-4">
              <div className="h-32 w-full m-4 bg-white flex items-center justify-center overflow-hidden">
                <img src="src/assets/hunter-logo.png" alt="Hunter Sign" className="h-full w-full object-contain"/>
              </div>
                <div className="bg-white flex items-center justify-center rounded-sm">
                  <img src="src/assets/barcode.png" alt="Barcode" />
                </div>
              </div>
              <div className="h-1/3 bg-blue-300 flex flex-col items-center justify-between rounded-b-xl p-2">
                <div className="w-full bg-amber-50 h-9 rounded-sm flex justify-center items-center font-bold">
                  <h1 className="text-sm">ラッキー Rabothata</h1>
                </div>
                <div className="w-full bg-amber-50">
                  <p className="text-xs px-1.5">Software Developer</p>
                </div>
                <div className="w-full bg-amber-50">
                  <p className="text-xs px-1.5">Computational Scientist</p>
                </div>
                <div className="w-full bg-amber-50">
                  <p className="text-xs px-1.5">Designer</p>
                </div>
              </div>
            </div>
  
            {/* BACK SIDE */}
            <div className="card__back absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-blue-300 border-1 border-black rounded-xl flex flex-col items-center justify-center transform rotate-y-180 backface-hidden p-4">
              <div className="w-full h-10 bg-black text-white flex items-center justify-center rounded-lg mb-4">
                <h1 className="font-bold text-sm font-sans">Mahlatse Rabothata</h1>
              </div>
              <div className="w-full h-32 bg-[var(--primary)] rounded-md flex items-center justify-center text-white">
                <p className="text-center text-xs px-1 text-balck font-sans">a passionate and driven final year student majoring in Computer Science and Applied Mathematics with keen interest in software development and coding</p>
              </div>
              <div className="w-full h-8 bg-black rounded-md mt-4 flex items-center justify-center text-white text-xs">
                <p>ID: 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }