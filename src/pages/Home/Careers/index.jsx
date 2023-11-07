import React from "react";
import "./careers.css";

import Image from "../../../assets/images/career/image.jpg";
import MainLayout from "../../../components/MainLayout";

const Careers = () => {
  return (
    <MainLayout>
      <div className="career-mainContainer">
        <div className="career-body">
          <div className="career-head">
            <p>
              Prana 24 is digitizing the pharmaceutical supply chain in India.
              We’re building the <br />
              biggest medicines/ medical devices wholesaler and pharmacy
              financing partner starting
              <br /> in Nigeria. We are backed by some of the most well
              respected investors in Africa & the U.S.
            </p>
          </div>
        </div>
        <div className="openings">
          <div className="d-flex flex-row career-row">
            <div className="d-flex flex-column career-col">
              <p className="career-title">Career Page</p>
              <p className="career-row-para">
                Raise awareness, drive interest in your company, and build a
                pipeline of candidates for your open roles.
              </p>
              <div className="career-button">
                <button className="career-btn">Contact Sales</button>
              </div>
            </div>
            <div className="d-flex flex-column career-col1">
              <img className="career-img" src={Image} alt="" />
            </div>
          </div>
        </div>
        <div className="career-openings">
          <p className="career-h1">
            Make an unforgettable first impression with a Career Page.
          </p>
          <p className="career-h4">
            Attract top candidates by putting your company culture and job
            opportunities in the spotlight.
          </p>
        </div>
        <div>
          <div className="career-openings-story">
            <div>
              <p className="career-header">Share your company's story.</p>
              <p>
                Give candidate’s a snapshot of your culture with videos and
                photos, employee-created content, testimonials, and tailored
                messaging.
              </p>
            </div>
            <div>
              <p className="career-header">Reach the right candidates.</p>
              <p>
                Create content and job recommendations for targeted audiences.
                We’ll surface the most relevant opportunities based on their
                qualifications.
              </p>
            </div>
            <div>
              <p className="career-header">Drive applications.</p>
              <p>
                Help candidates assess if they’re a good fit for your role with
                personalized opportunities and insights.
              </p>
            </div>
          </div>
        </div>
        <div className="career-customer">
          <p className="career-h1">
            Learn more about what you can do with Career Pages.
          </p>
          <div className="career-button" style={{ padding: "2rem 0" }}>
            <button className="career-btn">Contact Sales</button>
          </div>
        </div>
        <div className="career-learn">
          <div className="d-flex flex-row career-row ">
            <div className="d-flex flex-column career-row-col1">
              <p>1.8X</p>
            </div>
            <div className="d-flex flex-column career-row-col">
              <p className="career-h1">
                Candidates are{" "}
                <span className="career-story-col"> 1.8x more likely </span> to
                apply for a job if they’re familiar with the company.
              </p>
            </div>
          </div>
        </div>
        <div className="career-customer-learn">
          <p className="career-customer-par">
            See how our customers are using Career Pages.
          </p>
          <div>
            {/* <div className="d-flex flex-column career-customer-learn-col"> */}
            <div className="d-flex flex-row career-customer-learn-row">
              <p className="career-row-para">Prana 24</p>
              {/* </div> */}
              {/* <div className="d-flex flex-column career-customer-learn-col1"> */}
              <p className="career-row-para">
                “By leveraging the employee voice [on LinkedIn],
                <br /> we are able to share a more authentic view of <br /> what
                it is like to work at Unilever — our values, <br />
                culture, and what is important to us as an <br />
                organization.”
              </p>
            </div>
            <div className="career-button">
              <button className="career-btn">Contact Sales</button>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="career-ready">
          <p className="career-customer-par">
            Ready to start building your career page
          </p>
          <div className="career-button" style={{ padding: "1.5rem 0" }}>
            <button className="career-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Careers;
