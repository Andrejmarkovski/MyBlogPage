import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
interface ConMeProps {}
const Contact = React.forwardRef<HTMLDivElement, ConMeProps>(
  (props, myConREf) => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();

      if (form.current) {
        emailjs
          .sendForm(
            "service_lnenayv",
            "template_3u05yzh",
            form.current,
            "n59rqRJQNOaXWm07X"
          )
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert("Message is Sent");
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    };
    return (
      <div ref={myConREf} className="aboutmeBackGroundColor pt-3 pb-3">
        <div className="BackGrouImgContact">
          <div className="position-relative d-flex text-center  justify-content-center align-items-center flex-column">
            {/* <img
              className="w-100 contactImg"
              src="/conctack/contact-us-banner.jpg"
              alt=""
            /> */}
            <div className="w-100 pt-3 pb-3">
              <h1 className="logoColor">Let's chat</h1>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="d-flex  justify-content-center align-items-center flex-column"
              >
                <input
                  placeholder="Name"
                  id="name"
                  className="mb-2"
                  type="text"
                  name="name_massage"
                  required
                />
                <input
                  placeholder="Email"
                  id="email"
                  className="mb-2"
                  type="email"
                  name="email_massage"
                  required
                />
                <textarea
                  className="mb-2"
                  id="textarea"
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <button className="btncontact" type="submit">
                  Sent message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Contact;
