import Nav from '../components/Nav';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

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
        expect(navLinks[0]).toHaveTextContent("NutriFacts")
        expect(navLinks[1]).toHaveTextContent("Home")
        expect(navLinks[2]).toHaveTextContent("Nutrition analysis")
        expect(navLinks[3]).toHaveTextContent("Meal planner")
        expect(navLinks[4]).toHaveTextContent("Favorites")
        expect(navLinks[5]).toHaveTextContent("Contact")
    })

    it("renders a shop span button", () => {
        const shopButton = screen.getByRole('button', {
            name: "Shop",
        })
        expect(shopButton).toBeInTheDocument()
    })
})
