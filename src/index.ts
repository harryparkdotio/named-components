import React, { createElement } from 'react';
import { elements } from './elements';

type NamedProps<
  T extends keyof JSX.IntrinsicElements
> = JSX.IntrinsicElements[T];

type NamedDomElements = {
  [Tag in keyof JSX.IntrinsicElements]: React.ComponentType<NamedProps<Tag>>;
};

export const named: NamedDomElements = elements.reduce<any>((elements, tag) => {
  elements[tag] = (props: any) => createElement(tag, props);
  return elements;
}, {});

export default named;
