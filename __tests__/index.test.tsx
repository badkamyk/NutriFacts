import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
    beforeEach(() => {
        render(<Home/>)
    })
    it('renders a hero', () => {
        const heading = screen.getByRole('heading', {
            name: "Data to boost your health",
        })
        expect(heading).toBeInTheDocument()
    })

    it('renders nav and footer', () => {
        const nav = screen.getAllByRole('navigation')
        expect(nav).toHaveLength(2);
    })

})

// heroTest();
// navTest();
// footerTest();
// featureTest();

