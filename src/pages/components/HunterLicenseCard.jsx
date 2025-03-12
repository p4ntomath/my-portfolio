export default function HunterLicenseCard() {
    return (
      <div className="flex justify-center items-center min-h-auto">
        <div className="relative w-60 h-96 perspective-1000 cursor-pointer group">
          {/* Card Container */}
          <div className="relative w-full h-full transform-style-3d transition-transform duration-600 ease-in-out group-hover:rotate-y-180">
            {/* FRONT SIDE */}
            <div className="absolute w-full h-full bg-white border-4 border-black rounded-xl backface-hidden p-2">
              <div className="h-2/3 bg-black flex flex-col items-center justify-center rounded-t-xl p-4">
                <div className="h-32 w-full m-4 bg-white flex items-center justify-center ">
                  <img src="src\assets\hunter-logo.png" alt="Hunter Sign" />
                </div>
                <div className=" bg-white flex items-center justify-center rounded-sm">
                  <img src="src\assets\barcode.png" alt="" />
                </div>
              </div>
              <div className="h-1/3 bg-blue-300 flex flex-col items-center justify-between rounded-b-xl p-2">
                <div className="w-full bg-amber-50 h-9 rounded-sm flex justify-center items-center font-bold">
                    <h1 className="text-sm">ラッキー Rabothata</h1>
                </div>
                <div className="w-full bg-amber-50 ">
                    <p className="text-xs px-1.5">Software Developer</p>
                </div>
                <div className="w-full bg-amber-50 ">
                    <p className="text-xs px-1.5">Computational Scientist</p>
                </div>
                <div className="w-full bg-amber-50 ">
                    <p className="text-xs px-1.5">Designer</p>
                </div>
              </div>
            </div>
  
            {/* BACK SIDE */}
            <div className="absolute w-full h-full bg-blue-300 border-4 border-black rounded-xl flex flex-col items-center justify-center transform rotate-y-180 backface-hidden">
              <div className="w-5/6 h-10 bg-black text-white flex items-center justify-center rounded-lg">
                <span className="font-bold">Official Hunter ID</span>
              </div>
              <div className="mt-4 w-5/6 h-20 bg-gray-800 rounded-md"></div>
              <div className="mt-2 w-5/6 h-8 bg-black rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }