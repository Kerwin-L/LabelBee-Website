---
sidebar_position: 1
---

## Features

- Quickly build React apps with annotation
- Render separated, the rendering module can be used separately

## Install

```bash
# npm
npm install @labelbee/lb-annotation
npm install @labelbee/lb-components

# yarn
yarn add @labelbee/lb-annotation
yarn add @labelbee/lb-components
```

## Usage

Quick Start Example

```js
import React from "react";
import ReactDOM from "react-dom";
import { AnnotationView } from "@labelbee/lb-components";

const src = "";

const DefaultComponent = () => {
  return <AnnotationView src={src} />;
};

ReactDOM.render(<App />, document.querySelector("#app"));
```

## Documents

- [JavaScript Canvas Library - LB-Annotation](./packages/lb-annotation/README_en-US.md)
- [Annotation Components - LB-components](./packages/lb-components/README_en-US.md)
- [DEMO](./packages/lb-demo/README.md)

## Links

- [LabelBee-Client](https://github.com/open-mmlab/labelbee-client)（Powered by LabelBee）

## LICENSE

This project is released under the [Apache 2.0 license](./LICENSE).
