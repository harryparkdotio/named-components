import React, { createElement } from 'react';
import { domElements } from './constants';

type NamedDomElements = { [Tag in keyof JSX.IntrinsicElements]: NamedDomElement<JSX.IntrinsicElements[Tag]> };

type NamedDomElement<Props> = React.ComponentType<Props>;

export const named: NamedDomElements = domElements.reduce<any>((elements, tag) => {
	elements[tag] = (props: any) => createElement(tag, props);
	return elements;
}, {});

export default named;
