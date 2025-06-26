import React from "react";
import greedIslandCard from "../../assets/greedIslandCard.png"; // Adjust the path as necessary
import angelBreath from "../../assets/angelBreath.png"; // Adjust the path as necessary

export default function GreedIslandCard({ 
  jobTitle = "Tutor", 
  rank = "SS-19", 
  id = "17", 
  image = angelBreath, 
  desc = "I did absolute" 
}) {
    return (
      <div className="flex justify-center items-center min-h-auto p-8">
        <div className="card relative w-70 h-96 cursor-pointer group transition-transform duration-300 ease-in-out hover:scale-110 hover:z-50">
          {/* FRONT SIDE */}
          <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${greedIslandCard})`}}
              >
              <div aria-label="job-id" className="absolute top-[16px] left-[20px] h-8 w-14 bg-[#DFDBC1] flex items-center justify-center">
                  <p className=" font-japanese text-lg">{id}</p>
              </div>
              <div aria-label="job-rank" className="absolute top-[16px] right-[20px] h-8 w-14 bg-[#DFDBC1] flex items-center justify-center">
                  <p className="font-japanese text-lg">{rank}</p>
              </div>
              <div aria-label="job-title" className="absolute top-[16px] left-[90px] h-8 w-25 bg-[#DFDBC1] flex items-center justify-center">
                  <p className=" text-xs font-bold font-japanese">{jobTitle}</p>
              </div>
              <div aria-label="card-image" className="absolute top-[64px] left-[15px] h-[145px] w-[250px] bg-[#DFDBC1] flex items-center justify-center">
                  <img src={image} alt="" className="w-full h-full object-cover border-1" />
              </div>
              <div aria-label="job-desc" className="absolute top-[233px] left-[22px] h-[122px] w-[236px] bg-[#DFDBC1] flex items-center justify-center p-2">
                 <p className="text-sm">{desc}</p> 
              </div>
          </div>
        </div>
      </div>
    );
  }