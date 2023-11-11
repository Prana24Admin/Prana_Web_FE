// cart.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from ".";
import axios from "axios";

// Mock the react-query hook
import { useQuery } from "@tanstack/react-query";

jest.mock("axios");

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock the CouponDrawer component
jest.mock("../../../components/Slider/CouponDrawer", () => ({
  CouponDrawer: jest.fn(() => <div>Mocked CouponDrawer</div>),
}));

// Mock the fetchCartData function
jest.mock("../../../services/cartService", () => ({
  fetchCartData: jest.fn(),
}));

// Mock Axios
jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  create: jest.fn(() => ({
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() }, // Add this line to mock response interceptors
    },
  })),
}));

describe("Cart component", () => {
  beforeEach(() => {
    // Reset mocks and clear localStorage before each test
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it("renders loader when fetching data", () => {
    useQuery.mockReturnValue({ isLoading: true });

    render(<Cart />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders error message when fetching fails", async () => {
    useQuery.mockReturnValue({ isLoading: false, error: true });

    render(<Cart />);

    expect(
      await screen.findByText("Error fetching. Try again")
    ).toBeInTheDocument();
  });

  it("renders empty cart message when no items", () => {
    useQuery.mockReturnValue({ isLoading: false, data: [] });

    render(<Cart />);

    expect(
      screen.getByText("Your Healthcare cart is empty!")
    ).toBeInTheDocument();
  });

  it("renders cart items and bill section when there are items", async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      data: [{ product: { uuid: "1", price: 10 }, quantity: 2 }],
    });

    render(<Cart />);

    expect(await screen.findByText("Items in Your cart")).toBeInTheDocument();
    expect(screen.getByTestId("cart-card")).toBeInTheDocument();
    expect(screen.getByTestId("cart-rightContainer")).toBeInTheDocument();
  });

  it("applies coupon discount when a coupon is selected", async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      data: [{ product: { uuid: "1", price: 10 }, quantity: 2 }],
    });

    // Mock a selected coupon
    const selectedCoupon = {
      min_value: 5,
      max_value: 20,
      discount: 10,
      max_amount: 5,
    };
    localStorageMock.getItem.mockReturnValue(JSON.stringify(selectedCoupon));

    render(<Cart />);

    // Wait for coupon discount calculation
    await waitFor(() => {
      expect(screen.getByTestId("couponValue")).toHaveTextContent("$1.00");
    });
  });

  it("removes applied coupon when handleRemoveCoupon is called", () => {
    useQuery.mockReturnValue({
      isLoading: false,
      data: [{ product: { uuid: "1", price: 10 }, quantity: 2 }],
    });

    render(<Cart />);

    // Trigger handleRemoveCoupon
    fireEvent.click(screen.getByTestId("removeCouponButton"));

    // Check if appliedCoupon is removed from localStorage
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("appliedCoupon");
  });

  it("opens and closes the coupon drawer", () => {
    useQuery.mockReturnValue({
      isLoading: false,
      data: [{ product: { uuid: "1", price: 10 }, quantity: 2 }],
    });

    render(<Cart />);

    // Open the coupon drawer
    fireEvent.click(screen.getByTestId("openCouponDrawerButton"));
    expect(screen.getByText("Mocked CouponDrawer")).toBeInTheDocument();

    // Close the coupon drawer
    fireEvent.click(screen.getByTestId("closeCouponDrawerButton"));
    expect(screen.queryByText("Mocked CouponDrawer")).not.toBeInTheDocument();
  });
});
