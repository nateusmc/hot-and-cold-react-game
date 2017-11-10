import React from 'react';
import {shallow} from 'enzyme';
import '../tests-config'
import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Hides the info modal initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Should render the info modal when toggled', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal(true);
        wrapper.update();
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
});
