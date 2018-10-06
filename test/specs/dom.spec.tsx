import { mount } from 'enzyme';
import React from 'react';
import { named } from '../../src/named';

import { basicElements, voidElements } from '../cases/dom';

describe('dom', () => {
	describe('basic elements', () => {
		it.each(basicElements)('named.%s should return element', (elem: string) => {
			const text = 'abcd';
			const Elem = named[elem];
			const mountedElem = mount(<Elem>{text}</Elem>);
			const htmlString = `<${elem}>${text}</${elem}>`

			expect(mountedElem.html()).toEqual(htmlString);
		});
	});

	describe('void elements', () => {
		it.each(voidElements)('named.%s should return element', (elem: string) => {
			const Elem = named[elem];
			const mountedElem = mount(<Elem/>);
			const htmlString = `<${elem}>`

			expect(mountedElem.html()).toEqual(htmlString);
		});
	});
});
