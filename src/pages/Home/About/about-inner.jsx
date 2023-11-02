import React from "react";

import "./about.css";

const AboutInner = () => {
  const aboutArr = [
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
    {
      par: "Rajarshi Sarkar",
      paragraph: "April 22,2022",
      Text: " The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation.",
    },
  ];
  return (
    <div className="about-mainContainer" style={{ marginBottom: "2rem" }}>
      <div className="home-labs-img">
        <p className="pra" style={{ marginBottom: "0rem" }}>
          What Our Customers have to say?
        </p>
      </div>
      <div>
        {/* <Carousel responsive={responsive}>
          {aboutArr.map((item) => {
            return (
              <div
                style={{ display: "flex", gap: "3rem", alignItems: "center" }}
              >
                <div className="trend-col">
                  <p className="about-inner-par">
                    {item.par}
                    <span className="about-inner-par1">
                      {"  "},{item.paragraph}
                    </span>
                  </p>
                  <p></p>
                  <p className="about-inner-par2">{item.Text} </p>
                </div>
              </div>
            );
          })}
        </Carousel> */}
      </div>
    </div>
  );
};
export default AboutInner;
