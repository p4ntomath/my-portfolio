import "../styles/Book.css"
import React from "react";

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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil magni laudantium
              beatae quia. Recusandae, fuga quas consectetur perferendis aperiam esse velit veniam
              ducimus? Quisquam consequatur perferendis quidem quia, recusandae ab!
            </p>
            <label className="next" htmlFor="checkbox-page1">▶</label>
          </div>
          <div className="back-page">
            <img src="1.jpg" alt="Page 1" />
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
            <img src="2.jpg" alt="Page 2" />
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

