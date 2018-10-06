import { domElements } from '../../src/constants';
import { named } from '../../src/named';

describe('named-components', () => {
	it('should have keys', () => {
		expect(Object.keys(named)).toEqual(domElements);
	});
});
