import React from "react";
interface ProjectsMeProps {}
const Projects = React.forwardRef<HTMLDivElement, ProjectsMeProps>(
  (props, myProjRef) => {
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
                <img className="w-100" src="/projects/pecurki.jpg" alt="" />
              </div>
            </div>
            <div className="col-12 col-md-5 ">
              <div>
                <img className="w-100" src="/projects/projdect2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default Projects;
