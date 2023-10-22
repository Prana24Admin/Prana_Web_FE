import React from "react";
import All from "../../../assets/images/lab/test/all.jpg";
import Book from "../../../assets/images/lab/test/book.jpg";
import Health from "../../../assets/images/lab/test/health.jpg";
import Test from "../../../assets/images/lab/test/test.jpg";
import "../../../assets/css/Lab/index.css";
const AllTest = () => {
  const testLists = [
    {
      id: 1,
      name: "All Test",
      Image: Test,
    },
    {
      id: 2,
      name: "Health Packages",
      Image: Health,
    },
    {
      id: 3,
      name: "Upload Prescription",
      Image: Book,
    },
    {
      id: 4,
      name: "Book on Call",
      Image: All,
    },
  ];

  return (
    <>
      <div className="test-container">
        {testLists.map((testList) => (
          <div className="test-flexContainer" key={testList.id}>
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
