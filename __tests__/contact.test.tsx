import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactPage from "../app/(product-related)/contact/page"

describe('Contact', () => {
    beforeEach(() => {
        render(<ContactPage/>)
    })
    it('renders a heading', () => {
        const heading = screen.getByRole('heading', {
            name: "Contact Us",
        });
        expect(heading).toBeInTheDocument()
    })

    it('renders a heading with a class name', () => {
        const heading = screen.getByRole('heading', {
            name: "Contact Us",
        });
        expect(heading).toHaveClass("mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white")
    });

    it('renders a subtitle paragraph', () => {
        const subtitle = screen.getByRole('subtitle');
        expect(subtitle).toBeInTheDocument()
    });

    it('renders a subtitle paragraph with a class name', () => {
        const subtitle = screen.getByRole('subtitle');
        expect(subtitle).toHaveClass("mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl")
    });

});
