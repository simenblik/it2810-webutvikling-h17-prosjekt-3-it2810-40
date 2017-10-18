import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import InputTodo from '../src/Components/InputTodo.js';

/* Takes a snapshot of the rendered component and see if it
matches the original snapshot.
*/
describe('<InputTodo/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<InputTodo />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
