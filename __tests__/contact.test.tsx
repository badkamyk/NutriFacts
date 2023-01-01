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

    it('renders a form', () => {
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument()
    });

    it('renders a form with a class name', () => {
        const form = screen.getByRole('form');
        expect(form).toHaveClass("space-y-8")
    });

    it('renders all inputs', () => {
        const inputs = screen.getAllByRole('textbox');
        expect(inputs).toHaveLength(3)
    });

    it('renders input with type email', () => {
    const input = screen.getAllByRole('textbox')[0];
        expect(input).toHaveAttribute('type', 'email')
    });

    it('renders subject input with type text', () => {
    const input = screen.getAllByRole('textbox')[1];
        expect(input).toHaveAttribute('type', 'text')
    });

    it('renders textarea ', () => {
        const input = screen.getAllByRole('textbox')[2];
        expect(input).toHaveAttribute('placeholder', "Leave a comment...")
    });
});
