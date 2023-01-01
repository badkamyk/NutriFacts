import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContactPage from "../app/(product-related)/contact/page"

describe('Contact', () => {
    beforeEach(() => {
        render(<ContactPage/>)
    });
    it('renders a heading', () => {
        const heading = screen.getByRole('heading', {
            name: "Contact Us",
        });
        expect(heading).toBeInTheDocument()
    });

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

    it('renders input with class name', () => {
        const input = screen.getAllByRole('textbox')[0];
        expect(input).toHaveClass("shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light")

    });

    it('renders subject input with type text', () => {
        const input = screen.getAllByRole('textbox')[1];
        expect(input).toHaveAttribute('type', 'text')
    });

    it('renders subject input with class name', () => {
        const input = screen.getAllByRole('textbox')[1];
        expect(input).toHaveClass("block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light")
    });

    it('renders textarea ', () => {
        const input = screen.getAllByRole('textbox')[2];
        expect(input).toHaveAttribute('placeholder', "Leave a comment...")
    });

    it('renders textarea with class name', () => {
        const input = screen.getAllByRole('textbox')[2];
        expect(input).toHaveClass("block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500")
    });

    it('renders a submit button', () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument()
    });

    it('renders a submit button with a class name', () => {
        const button = screen.getByRole('button');
        expect(button).toHaveClass("py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800")
    });

    it('renders a submit button with a text', () => {
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent("Send message")
    });
});
