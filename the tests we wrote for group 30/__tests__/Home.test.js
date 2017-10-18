import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../src/Components/Home.js';

/* Takes a snapshot of the rendered component and see if it
matches the original snapshot.
*/
describe('<Home/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Home />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
