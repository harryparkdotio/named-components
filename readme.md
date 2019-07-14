# named-components

styled-components without style

### install

```bash
$ npm i -S named-components
# or
$ yarn add named-components
```

### usage

```tsx
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
