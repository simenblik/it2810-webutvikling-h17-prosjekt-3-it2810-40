import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Appointment from '../src/Components/Appointment.js';

/* Takes a snapshot of the rendered component and see if it
matches the original snapshot.
*/
describe('<Appointment/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Appointment />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
