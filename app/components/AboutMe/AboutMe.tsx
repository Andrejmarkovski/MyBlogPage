import React from "react";
interface AboutMeProps {}
const AboutMe = React.forwardRef<HTMLDivElement, AboutMeProps>(
  (props, myRef) => {
    return (
      <div
        ref={myRef}
        className="aboutmeBackGroundColor pt-md-5 pb-md-5 pt-3 pb-3"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 pb-lg-0 pb-3 col-md-6  col-lg-6 ">
              <h5 className="logoColor">about me</h5>
              <h2 className="text-white">
                Transforming design and imagination <br />
                <span className="logoColor text-capitalize"> into </span>
                reality involves bringing creative ideas to life
              </h2>
              <hr />
              <p className="pTagAboutMe text-white m-0">
                I am a frontend developer currently living in Kratovo, North
                Macedonia. I got a great love for programming after high school,
                where until then I studied electrical engineering. I dedicate a
                large part of my time to learning new things that are in
                trending and the most important thing is that I am a sporty
                person and I often go to exercise (as I call it the relaxation
                of the brain).
              </p>
            </div>
            <div className="col-12 col-lg-6 col-md-6  position-relative">
              <img
                className=" float-end aboutmeImg"
                src="/slika/1212.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

AboutMe.displayName = "AboutMe";

export default AboutMe;
