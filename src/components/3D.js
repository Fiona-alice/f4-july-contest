import React from "react";
import { Diamond } from "./image";
function Img3D() {
        return (
            <div className="imgMockup">
                <p>Find 3D objects, Mockups, and Illustration here</p>
                <div className="angle">
                    <img src={Diamond}  alt="3D"/>
                </div>
            </div>
        );
  }
export default Img3D;