import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe("Nav Component",  () => {
    //baseline test
    it('renders', () => {
        render(<Nav/>);
    });
    //snapshot test
    it('matches snapshot DOM node structure', () => {
        //render nav
        const {asFragment} = render(<Nav />)
    
        expect(asFragment()).toMatchSnapshot();
    });

});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

describe('links are visible', () => {
    it('inserts test into the links', () => {
        //arrange the query
        const { getByTestId } = render(<Nav />);

        //assert the valid outcome
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})
