import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders header, children and footer", () => {
    render(
      <Layout
        header={<header>Header</header>}
        footer={<footer>Footer</footer>}
      >
        <div>Content</div>
      </Layout>,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
});
