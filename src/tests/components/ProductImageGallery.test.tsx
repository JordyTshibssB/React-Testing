import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render no images", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render images", () => {
    const imageUrls = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    expect(screen.getAllByRole("img")).toHaveLength(imageUrls.length);
    imageUrls.forEach((url, index) => {
      expect(screen.getAllByRole("img")[index]).toHaveAttribute("src", url);
    });
  });
});
