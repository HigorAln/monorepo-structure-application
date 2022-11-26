import { Text } from "./index";
import { render, screen } from "@alura/test-commons/react-testing-library";

describe("<Text />", () => {
  it("render h1 tag", () => {
    const { container } = render(<Text tag="h1">Simple Text</Text>);

    expect(container).toMatchSnapshot();
  });

  it("render h2 tag", () => {
    render(<Text tag="h1">Simple Text</Text>);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
