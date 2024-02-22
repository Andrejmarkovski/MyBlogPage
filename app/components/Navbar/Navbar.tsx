import { useRef, useState } from "react";

export default function Navbar({ refs }: any) {
  const { home, skills, aboutMe, project, contact } = refs;

  const scrollTo = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 50,
      behavior: "smooth",
    });
  };
  const NavDiv = useRef<HTMLDivElement>(null);

  const fnc = (e: any) => {
    const hamburgerMenu = e.currentTarget;
    const navMainDiv = NavDiv.current;
    hamburgerMenu.classList.toggle("active");

    if (navMainDiv) {
      navMainDiv.classList.toggle("active");
    }
  };
  return (
    <div id="nav" className=" position-fixed zInex2 w-100">
      <div className="container">
        <nav className="navBarBackGroundColor position-relative  d-flex justify-content-between pt-2 pb-2">
          <div className="d-flex align-items-center">
            <img src="/log/50px3-01.png" alt="" />
            <h4 className="text-white m-0 text-uppercase">Andrej.net</h4>
          </div>
          <div ref={NavDiv} className="d-flex align-items-center navMainDiv">
            <ul className="d-flex m-0 p-0 text-white">
              <li onClick={() => scrollTo(home)} className="navClick">
                home
              </li>
              <li onClick={() => scrollTo(skills)} className="navClick">
                Skills
              </li>
              <li onClick={() => scrollTo(aboutMe)} className="navClick">
                about me
              </li>
              <li onClick={() => scrollTo(project)} className="navClick">
                project
              </li>
              <li onClick={() => scrollTo(contact)} className="navClick">
                contact
              </li>
            </ul>
          </div>
          <div onClick={fnc} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </div>
  );
}
