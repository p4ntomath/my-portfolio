import "../styles/Hcard.css"
import hunterLogo from "../../assets/hunter-logo.png";
import barcodeImg from "../../assets/barcode.png";

export default function HunterLicenseCard() {
    return (
      <div className="flex justify-center items-center min-h-auto">
        <div className="card relative w-60 h-96 perspective-1000 cursor-pointer group">
          <div className="card__content relative w-full h-full transform-style-3d transition-transform duration-600 ease-in-out group-hover:rotate-y-180">
            {/* FRONT SIDE */}
            <div className="card__front absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-white border-1 border-black rounded-xl backface-hidden p-2">
              <div className="h-2/3 bg-black flex flex-col items-center justify-center rounded-t-xl p-4">
              <div className="h-32 w-full m-4 bg-white flex items-center justify-center overflow-hidden">
                <img src={hunterLogo} alt="Hunter Sign" className="h-full w-full object-contain"/>
              </div>
                <div className="bg-white flex items-center justify-center rounded-sm">
                  <img src={barcodeImg} alt="Barcode" />
                </div>
              </div>
              <div className="h-1/3 bg-blue-300 flex flex-col items-center justify-between rounded-b-xl p-2">
                <div className="w-full bg-white h-9 rounded-sm flex justify-center items-center font-bold">
                  <h1 className="text-sm">ラッキー Rabothata</h1>
                </div>
                <div className="w-full bg-white">
                  <p className="text-xs px-1.5">Software Engineer</p>
                </div>
                <div className="w-full bg-white">
                  <p className="text-xs px-1.5">Computational Scientist</p>
                </div>
                <div className="w-full bg-white">
                  <p className="text-xs px-1.5"></p>
                </div>
              </div>
            </div>
  
            {/* BACK SIDE */}
            <div className="card__back absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-white border-1 border-black rounded-xl flex flex-col items-center justify-center transform rotate-y-180 backface-hidden p-2">
              <div className="bg-blue-300 h-full w-full rounded-md">
                <div className="flex flex-col justify-end h-full w-full">
                  <div className="w-1.2">
                    <div className="bg-black w-10">
                    </div>
                    <div className="bg-black w-10">
                    </div>
                  </div>
                <div className="bg-black ml-34 h-full w-10">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }