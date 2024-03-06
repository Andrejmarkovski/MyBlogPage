import Link from "next/link";
import React, { useState } from "react";
interface ProjectsMeProps {}
const Projects = React.forwardRef<HTMLDivElement, ProjectsMeProps>(
  (props, myProjRef) => {
    let [hoverEle, setHoverele] = useState(false);

    const onMouseEnter = () => {
      setHoverele(true);
      console.log(hoverEle);
    };

    const onMouseLeave = () => {
      setHoverele(false);
      console.log(hoverEle);
    };
    return (
      <div
        ref={myProjRef}
        className="aboutmeBackGroundColor pt-md-5 pb-md-5 pt-3 pb-3"
      >
        <div className="container">
          <h5 className="logoColor">my recent projects</h5>
          <h2 className="text-white">
            give me your ideas
            <span className="logoColor text-capitalize">
              {" "}
              So i can <br /> show you{" "}
            </span>
            what is the beauty of FrontEnd
          </h2>
          <div className="row gap-5 pt-3">
            <div className="col-12 col-md-6 ">
              <div>
                <Link
                  target="_blank"
                  href="https://pechurki-mk-3f58vzv4f-andrejmarkovskis-projects.vercel.app/"
                >
                  <img className="w-100" src="/projects/pecurki.jpg" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-5 ">
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="position-relative pointer"
              >
                <img className="w-100 " src="/projects/projdect2.jpg" alt="" />
                <div
                  className={`w-100 notshowingdiv  position-absolute ${
                    hoverEle ? "unHidden" : "hidden"
                  }`}
                >
                  <p className="m-0 p-0 ptagNotReady">Not ready yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Projects.displayName = "Projects";

export default Projects;
