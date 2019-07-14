import React from 'react';
import renderer from 'react-test-renderer';

import { named } from '../src';
import { elements } from '../src/elements';

describe('named-components', () => {
  it('should have keys', () => {
    expect(Object.keys(named)).toEqual(elements);
  });

  it.each(elements)('named.%s should return correct element', elem => {
    const Element = named[elem];

    const component = renderer.create(<Element />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
