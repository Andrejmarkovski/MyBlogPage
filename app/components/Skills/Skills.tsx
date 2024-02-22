import React from "react";
interface SkillsMeProps {}

const Skills = React.forwardRef<HTMLDivElement, SkillsMeProps>(
  (props, mySkills) => {
    return (
      <div
        ref={mySkills}
        className="aboutmeBackGroundColor pt-md-5 pb-md-5 pt-3 pb-3"
      >
        <div className="pb-4">
          <p className="fs-2  text-capitalize d-flex m-0 logoColor justify-content-center align-items-center">
            skills
          </p>
        </div>
        <div className="container ">
          <div className="row gx-md-3 ">
            {/* FRONTEND */}
            <div className="col-lg-4 colHeightSkills pb-2 col-md-4  col-xs-12 ">
              <div
                id="imgFrontEnd"
                className="skillCard h-100  text-white cardsBackG"
              >
                <h4 className="logoColor">FrontEnd</h4>
                <hr className="w-100" />
                <ul className="m-0 p-0">
                  <li className="">React</li>
                  <li className="">material design (MUI)</li>
                  <li className="">Next JS</li>
                  <li className="">JavaScript</li>
                  <li className="">TylieScript</li>
                  <li className="">HTML</li>
                  <li className="">CSS</li>
                  <li className="">Bootstrap</li>
                </ul>
              </div>
            </div>
            {/* PHOTOSHOP  */}
            <div className="col-lg-4 colHeightSkills pb-2 col-md-4  col-xs-12   ">
              <div
                id="desFrontEnd"
                className="skillCard h-100  text-white cardsBackG"
              >
                <h4 className="logoColor">Design Tools</h4>
                <hr className="w-100" />
                <ul className="m-0 p-0">
                  <li>adobe photoshop</li>
                  <li>adobe illustrator</li>
                  <li>adobe indesign</li>
                  <li>adobe lightroom</li>
                  <li>figma</li>
                </ul>
              </div>
            </div>
            {/* VIDEOEDIT  */}
            <div className="col-lg-4 colHeightSkills col-md-4  col-xs-12    ">
              <div
                id="videoFrontEnd"
                className="skillCard h-100  text-white cardsBackG"
              >
                <h4 className="logoColor">Video Editing</h4>
                <hr className="w-100" />
                <ul className="m-0 p-0">
                  <li>capcat</li>
                  <li>adobe after effects</li>
                  <li>filmora</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Skills.displayName = "Skills";

export default Skills;
