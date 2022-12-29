import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'
import { navTest } from "./nav.test";
import { heroTest } from "./hero.test";
import { footerTest } from "./footer.test";
import { featureTest } from "./feature.test";

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

heroTest();
navTest();
footerTest();
featureTest();

