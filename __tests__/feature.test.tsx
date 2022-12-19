import Feature from "../components/Feature";
import { features } from "../components/Feature"
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


describe("Feature", () => {
    beforeEach(() => {
        render(<Feature/>);
    });

    it("renders a feature component title", () => {
        const featureTitle = screen.getByRole("heading", {
            name: "Awareness",
        });
        expect(featureTitle).toBeInTheDocument();
    });

    it("renders features info container", () => {
        const feature = screen.getByRole("region");
        expect(feature).toBeInTheDocument();
    });

    features.forEach((feature, index) => {
        it(`renders a ${feature.name} feature`, () => {
            const featureTitle = screen.getByText(feature.name);
            expect(featureTitle).toBeInTheDocument();
        });
        it(`renders a ${feature.name} feature description`, () => {
            const featureDescription = screen.getByText(feature.description);
            expect(featureDescription).toBeInTheDocument();
        });
        it(`renders a ${feature.name} feature svg icon`, () => {
            const featureIcon = screen.getAllByRole("img")[index];
            expect(featureIcon).toBeInTheDocument();
        });
    })
});
