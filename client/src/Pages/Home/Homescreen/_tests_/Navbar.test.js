import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../Navbar";
import { MemoryRouter, useLocation } from "react-router-dom";
import "@testing-library/jest-dom";

// Correct single mock
jest.mock("react-scroll", () => ({
  Link: ({ children, to, className }) => (
    <a data-testid={`scroll-link-${to}`} className={className}>
      {children}
    </a>
  ),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  const renderNavbar = (path = "/") => {
    useLocation.mockReturnValue({ pathname: path });
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Navbar />
      </MemoryRouter>
    );
  };

  test("renders the navbar logo", () => {
    renderNavbar("/");
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
  });

  test("shows login and register when user is not logged in", () => {
    renderNavbar("/");
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("displays logged-in user's name", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Sammy" }));
    renderNavbar("/");
    expect(screen.getByText(/Logged in as/i)).toBeInTheDocument();
    expect(screen.getByText("Sammy")).toBeInTheDocument();
  });

  test("uses react-scroll links on home page", () => {
    renderNavbar("/");
    expect(screen.getByTestId("scroll-link-heroSection")).toBeInTheDocument();
    expect(screen.getByTestId("scroll-link-AboutMe")).toBeInTheDocument();
  });

  test("uses RouterLink on /signin", () => {
    renderNavbar("/signin");
    expect(
      screen.queryByTestId("scroll-link-heroSection")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
  });

  test("logout clears localStorage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Sammy" }));
    localStorage.setItem("token", "abc123");
    renderNavbar("/");
    fireEvent.click(screen.getByText("Logout"));
    expect(localStorage.getItem("user")).toBeNull();
    expect(localStorage.getItem("token")).toBeNull();
  });
});
