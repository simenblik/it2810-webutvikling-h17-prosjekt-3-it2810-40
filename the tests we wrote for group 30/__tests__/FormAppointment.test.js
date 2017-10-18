import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormAppointment from '../src/Components/FormAppointment.js';

/* This is getting a warning. Need something to fix error:
console.error node_modules/fbjs/lib/warning.js:33
      Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `MuiThemeProvider`, expected a single ReactElement.
          in MuiThemeProvider
*/

/* Takes a snapshot of the rendered component and see if it
matches the original snapshot.
*/
describe('<FormAppointment/>, functions', () => {
	it('should match to previous snapshots', () => {
		const component = shallow(<FormAppointment />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});
