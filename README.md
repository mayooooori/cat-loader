# 🐱 UIA Cat Loader

A fun spinning cat loader for your React/Next.js projects! 🎉

![Cat Loader](https://drive.google.com/file/d/1NcGvKGy2i9346qeu7Jpvzgak8vzLkHrf/view?usp=sharing)

## 🚀 Installation

```sh
npm install cat-spin-loader
```

## Usage

import { Loader } from "cat-spin-loader";

function App() {
return <Loader duration={6000} width={200} height={200} />;
}

export default App;

## Customization

The Loader component supports customization with the following props:

Prop | Type | Default | Description
duration | number | 6000 | Time (ms) before the loader disappears
width | number | 200 | Width of the loader (in pixels)
height | number | 200 | Height of the loader (in pixels)
