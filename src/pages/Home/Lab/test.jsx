import React from "react";
import "../../../assets/css/Lab/index.css";

import All from "../../../assets/images/lab/test/all.jpg";
import Book from "../../../assets/images/lab/test/book.jpg";
import Health from "../../../assets/images/lab/test/health.jpg";
import Test from "../../../assets/images/lab/test/test.jpg";
import { useNavigate } from "react-router-dom";
const AllTest = () => {
  const navigate = useNavigate();
  const testLists = [
    {
      id: 1,
      name: "All Test",
      Image: Test,
      path: "/lab/all-tests",
    },
    {
      id: 2,
      name: "Health Packages",
      Image: Health,
      path: "/lab",
    },
    // {
    //   id: 3,
    //   name: "Upload Prescription",
    //   Image: Book,
    //   path: "/lab",
    // },
    // {
    //   id: 4,
    //   name: "Book on Call",
    //   Image: All,
    //   path: "/lab",
    // },
  ];

  return (
    <>
      <div className="test-container">
        {testLists.map((testList) => (
          <div
            onClick={() => navigate(testList.path)}
            className="test-flexContainer"
            key={testList.id}
          >
            <img
              className="test-image"
              src={testList.Image}
              alt={testList.name}
            />
            <p className="test-button">{testList.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default AllTest;
