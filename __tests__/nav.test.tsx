import Nav from '../components/Nav';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

const navLinksText = ["NutriFacts", "Home", "Nutrition analysis", "Meal planner", "Favorites", "Contact"];

describe('Nav', () => {
    beforeEach(() => {
        render(<Nav/>)
    })
    it('renders a nav', () => {
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()
    })
    it('renders a nav links', () => {
        const navLinks = screen.getAllByRole('link')
        expect(navLinks).toHaveLength(6)
    })

    it("renders proper link text", () => {
        const navLinks = screen.getAllByRole('link')
        navLinks.forEach((link, index) => {
            expect(link).toHaveTextContent(navLinksText[index])
        });
    })

    it("renders a shop span button", () => {
        const shopButton = screen.getByRole('button', {
            name: "Shop",
        })
        expect(shopButton).toBeInTheDocument()
    })
})

