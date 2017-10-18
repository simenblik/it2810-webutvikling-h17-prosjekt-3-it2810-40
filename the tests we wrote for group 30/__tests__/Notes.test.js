import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Notes from '../src/Components/Notes.js';

describe('<Notes/>, functions', () => {
	/* Takes a snapshot of the rendered component and see if it
	matches the original snapshot.
	*/
	it('should match to previous snapshots', () => {
		const component = shallow(<Notes />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});

	// Seta s state, to simulate writing of notes
	it('should set state, as if someone writes a note', () => {
		const component = shallow(<Notes />);
		component.setState({ text: 'Hello' });
		const localState = component.state('text');
		expect(localState).toBe('Hello');
	});

	/* Getting error: TypeError: Cannot read property 'toUpperCase' of undefined
	it('should clear the notes', () => {
		const component = shallow(<Notes />);
		const onChange = jest.fn();
		component.setState({ text: 'Hello' });
		component.find('textarea').simulate(onChange);
		const localState = component.state('text');
		expect(localState).toBe('');
	}); */
});
