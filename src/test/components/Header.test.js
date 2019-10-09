import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
// import toJSON from "enzyme-to-json";

test('should render header correctly', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();

	// expect(toJSON(wrapper)).toMatchSnapshot();
	// expect(wrapper.find('h1').text()).toBe('Expensify');
});
