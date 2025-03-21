import "../styles/Book.css"
import React from "react";
import myImage from '../../assets/my-picture.png'

export default function Book(){
    return(
        <div>
      {/* Hidden Checkboxes */}
      <input type="checkbox" id="checkbox-cover" />
      <input type="checkbox" id="checkbox-page1" />
      <input type="checkbox" id="checkbox-page2" />
      <input type="checkbox" id="checkbox-page3" />

      {/* Book Container */}
      <div className="book">
        <div className="cover">
          <label htmlFor="checkbox-cover"></label>
        </div>

        {/* Page 1 */}
        <div className="page" id="page1">
          <div className="front-page">
          <p className="para-text">
            Welcome to my life! <br />
            My name is Mahlatse Rabothata, and I grew up in a small village called Tlhotlhokwe, Ga-Modjadji, in Limpopo.  
            I am an aspiring software engineer and computational scientist, deeply passionate about leveraging technology to solve real-world problems, particularly in applied science and mathematics.  
            Beyond coding, I enjoy socializing, making music, and continuously learning new things that challenge my thinking.  
            My journey is fueled by curiosity, innovation, and the desire to make a meaningful impact through technology.  
        </p>

            <label className="next" htmlFor="checkbox-page1">▶</label>
          </div>
          <div className="back-page">
            <img src={myImage} alt="Page 1" className="w-full h-auto object-contain"/>
            <label className="prev" htmlFor="checkbox-page1">◀</label>
          </div>
        </div>

        {/* Page 2 */}
        <div className="page" id="page2">
          <div className="front-page">
            <h2>Page 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium
              beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam
              ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!
            </p>
            <label className="next" htmlFor="checkbox-page2">▶</label>
          </div>
          <div className="back-page">
        <img src={myImage} alt="Page 2" className="w-full h-auto object-contain" />
            <label className="prev" htmlFor="checkbox-page2">◀</label>
          </div>
        </div>

        {/* Page 3 */}
        <div className="page" id="page3">
          <div className="front-page">
            <h2>Page 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium
              beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam
              ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!
            </p>
          </div>
        </div>

        <div className="back-cover"></div>
      </div>
    </div>
    )
}

