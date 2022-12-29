import Footer from '../components/Footer';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

export const footerTest = () => describe('Footer', () => {
    beforeEach(() => {
        render(<Footer/>)
    })
    it('renders a footer', () => {
        const footer = screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
    })
    it('renders a footer links', () => {
        const footerLinks = screen.getAllByRole('link')
        expect(footerLinks).toHaveLength(4)
    })

    it("renders proper link text", () => {
        const footerLinks = screen.getAllByRole('link')
        expect(footerLinks[0]).toHaveTextContent("About")
        expect(footerLinks[1]).toHaveTextContent("Diets")
        expect(footerLinks[2]).toHaveTextContent("Privacy policy")
        expect(footerLinks[3]).toHaveTextContent("Terms of use")
    })

})

footerTest();
