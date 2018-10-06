# named-components

styled-components without style

[![Travis](https://img.shields.io/travis/com/harryparkdotio/named-components/master.svg?style=for-the-badge)](https://travis-ci.com/harryparkdotio/named-components)
[![Codecov](https://img.shields.io/codecov/c/github/harryparkdotio/named-components/master.svg?style=for-the-badge)](https://codecov.io/gh/harryparkdotio/named-components)
[![license](https://img.shields.io/github/license/harryparkdotio/named-components.svg?style=for-the-badge)](https://github.com/harryparkdotio/named-components/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/named-components.svg?style=for-the-badge)](https://www.npmjs.com/package/named-components)

## install

```bash
$ npm i -S named-components
# or
$ yarn add named-components
```

## usage

```jsx
import React from 'react';
import named from 'named-components';

export const FancyComponent = props => (
    <FancyContainer>
        <FancyContent>
            <FancyTitle>Ultra Fancy! 👑</FancyTitle>
            <FancyText>lorem ipsum dolor sit really fancy amet.</FancyText>
        </FancyContent>
    </FancyContainer>
);

const FancyContainer = named.div;
const FancyContent = named.div;
const FancyTitle = named.h1;
const FancyText = named.p;
```

which gets translated to

```jsx
export const FancyComponent = props => (
    <div>
        <div>
            <h1>Ultra Fancy! 👑</h1>
            <p>lorem ipsum dolor sit really fancy amet.</p>
        </div>
    </div>
);
```
