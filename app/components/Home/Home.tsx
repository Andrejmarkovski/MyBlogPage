import React from "react";
interface HomeMeProps {}
const Home = React.forwardRef<HTMLDivElement, HomeMeProps>(
  (props, myHomeRef) => {
    return (
      <div ref={myHomeRef} className="position-relative imgBG">
        <div className="container vh100">
          <div className="row vh100">
            <div className="col-12  col-md-6 col-sm-6  d-flex flex-column justify-content-center align-items-start">
              <div className="marginTop">
                <h1 className="text-white  mb-4">
                  Hi 👋👋👋 , I&apos;am Andrej I&apos;am
                  <span className="logoColor"> Front-End Developer</span>
                </h1>
                <h3 className="text-white">
                  I am Andrej i am a passionate Front-End Developer. Let&apos;s
                  chat and see what we can do together.
                </h3>
                <a
                  id="firstBtnCv"
                  className="CVbtn mt-2"
                  href="/CV/Black Modern Professional Resume.pdf"
                  download
                >
                  My CV <i className="fa-solid fa-download"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <img
                  className="myImg"
                  src="/slika/andrejnew-removebg-preview.png"
                  alt=""
                />
                <a
                  id="secondBtnCv"
                  className="CVbtn mt-2"
                  href="/CV/Black Modern Professional Resume.pdf"
                  download
                >
                  My CV <i className="fa-solid fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
Home.displayName = "Home";

export default Home;
