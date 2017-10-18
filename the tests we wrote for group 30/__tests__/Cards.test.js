import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cards from '../src/Components/Cards.js';

/* Takes a snapshot of the rendered component and see if it
matches the original snapshot.
*/
describe('<Cards/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<Cards />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
