import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from '../src/Components/NavBar.js';

/* Does not work: console.error node_modules/fbjs/lib/warning.js:33
      Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in.

  ● <InputTodo/>, functions › should match to previous snapshots

    TypeError: Cannot read property 'prototype' of undefined */

/* Should take a snapshot of the rendered component and see if it
		matches the original snapshot.
		*/
describe('<NavBar/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<NavBar />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
