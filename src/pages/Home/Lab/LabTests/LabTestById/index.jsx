import React from "react";
import "./labTestById.css";

import MainLayout from "../../../../../components/MainLayout";
import labTest from "../../../../../assets/images/VectorImages/LabTest.png";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "../../../../../components/Loader";
import {
  BookMarked,
  Dot,
  Package,
  ShieldPlus,
  TestTube2,
  UtensilsCrossed,
} from "lucide-react";
import { handleAddToLabCart } from "../../../../../services/labCartService";
import { fetchLabTestById } from "../../../../../services/labService";

const LabTestsById = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Use the useQuery hook to manage test data and its state
  const {
    data: testData,
    isLoading,
    error,
  } = useQuery(["LabTestId", id], () => fetchLabTestById(id));

  // Use the useMutation hook to handle the addition of the test to the cart
  const { mutate, isLoading: AddingToCart } = useMutation(
    (testId) => handleAddToLabCart(testId),
    {
      onSuccess: () => navigate("/lab/cart"),
    }
  );

  return (
    <MainLayout>
      <div className="packageOrder-mainContainer">
        {isLoading && (
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
        {testData && (
          <>
            <div className="packageOrder-mainFlexContainer">
              <div className="packageOrder-leftContainer">
                <div className="packageOrder-borderContainer">
                  <p className="packageOrder-title">{testData.name}</p>
                  <div className="packageOrder-flexContainer">
                    <p className="packageOrder-mrpText">
                      ₹
                      {(
                        testData.price -
                        testData.price * (testData.discount / 100)
                      ).toFixed(2)}
                    </p>
                    <p className="packageOrder-discountText">
                      MRP:
                      <span className="packageOrder-overLine">
                        ₹{testData.price}
                      </span>
                    </p>
                  </div>
                  <div className="packageOrder-separator" />
                  <div className="packageOrder-justifyContainer">
                    <div className="packageOrder-flexContainer">
                      <p
                        style={{
                          textTransform: "uppercase",
                          color: "var(--ashGray)",
                          fontWeight: "500",
                        }}
                      >
                        Get your test report in {testData.report_tat}{" "}
                        {testData.report_tat_unit.toLowerCase()}
                      </p>
                    </div>
                    <button
                      onClick={() => mutate(testData.uuid)}
                      className="packageOrder-button"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="packageOrder-borderContainer">
                  <div className="packageOrder-detailsContainer">
                    <div className="packageOrder-packageFlex">
                      <UtensilsCrossed
                        size={24}
                        strokeWidth={2}
                        color="var(--ashGray)"
                      />
                      <p className="packageOrder-descriptionText">
                        {testData.preparation}
                      </p>
                    </div>
                    <div>
                      <div className="packageOrder-packageFlex">
                        <Package size={24} color="var(--ashGray)" />
                        <p className="packageOrder-titleText">
                          Packages Included
                        </p>
                      </div>
                      <div className="packageOrder-packageFlex">
                        {testData.tests.map((test) => (
                          <p className="packageOrder-flex">
                            <Dot size={35} color="var(--neutralBlack)" />
                            <span className="packageOrder-descriptionText">
                              {test.name}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="packageOrder-packageFlex">
                        <TestTube2 size={23} color="var(--ashGray)" />
                        <p className="packageOrder-titleText">Lab Details</p>
                      </div>
                      <div className="packageOrder-labDetailsContainer">
                        <p className="packageOrder-descriptionText">
                          Lab Name:{" "}
                          <span className="packageOrder-subText">
                            {testData.labs[0].name}
                          </span>
                        </p>
                        <p className="packageOrder-descriptionText">
                          Lab Address:{" "}
                          <span className="packageOrder-subText">
                            {testData.labs[0].name}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="packageOrder-packageFlex">
                        <BookMarked size={24} color="var(--ashGray)" />
                        <p className="packageOrder-titleText">Description</p>
                      </div>
                      <div className="packageOrder-labDetailsContainer">
                        <p className="packageOrder-descriptionText">
                          {testData.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="packageOrder-rightContainer">
                <img
                  loading="lazy"
                  className="packageOrder-image"
                  src={labTest}
                  alt="lab"
                />
                <div className="packageOrder-imageFlex">
                  <ShieldPlus color="var(--crimsonPink)" size={100} />
                  <p className="packageOrder-imageText">
                    "Our goal is to ensure the well-being of India's population"
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default LabTestsById;
