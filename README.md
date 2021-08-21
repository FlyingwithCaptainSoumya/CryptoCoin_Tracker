# [CryptoCoin Tracker](https://goh3r.csb.app/)
This Website helps you to keep a eye/track on your invested Coin. It shows Current price, Market Volume and coin Market Capital. Gradient animation added to look more fancy. New features will be updated. If you have any idea or want to contribute feel free to contact. 
<br>
<br>
You can visit this site by clicking this [link](https://goh3r.csb.app/) 


<br><br><br>
Dependencies Version:
    <li>*axios*: "0.21.1"</li>
    <li>https: "1.0.0"</li>
    <li>react: "17.0.2"</li>
    <li>react-dom: "17.0.2"</li>
    <li>react-scripts: "4.0.0"</li>
    
    
    
<br><br>

[![npm](https://img.shields.io/npm/v/react-md)](https://www.npmjs.com/package/react-md)
[![downloads](https://img.shields.io/npm/dw/react-md)](https://www.npmjs.com/package/react-md)
    
Create an accessible React application with the
[material design specifications](https://material.io/design/) and Scss.

- [Installing packages](https://react-md.dev/guides/installation) - How to
  install related components and packages within react-md for building your
  application
- [Creating a new app](https://react-md.dev/guides/creating-a-new-app) - How to
  create a new app with react-md
- [Examples with Build Tools](./examples) - View and download examples of using
  ReactMD with build tools such as [create-react-app], [Next.js], and [Gatsby]
- [Working from v1](https://react-md.dev/guides/working-with-v1) - How to use
  migrate from v1 of `react-md` to v2.
- [Customizing your theme](https://react-md.dev/guides/customizing-your-theme) -
  How to implement a different theme for your React application
- [Full documentation](https://react-md.dev) - All the remaining documentation
  along with every single guide, API Reference, and examples
- [Library Size](#library-size) - The UMD bundle size for the entire `react-md`
  library and sizes for some of the pre-built css files.    
    
    
   ## Creating a new project

> Check out the [examples folder](./examples) to see completed examples with
> different build tools such as [Next.js], [Gatsby], and [create-react-app].

First use [create-react-app] to create your project:

```sh
npx create-react-app my-app
cd my-app
npm start
```

> npx comes with npm 5.2+ and higher, if you have an older version you will need
> to install `create-react-app` globally instead

Or with `yarn`:

```sh
yarn create react-app my-app
cd my-app
```

> NOTE: You can also add the `--typescript` flag to bootstrap a react-app with
> typescript support

Next, install `react-md` and `sass`:

```sh
npm install --save react-md sass
```

Next, create a `src/App.scss` file to include all the `react-md` styles and
import the `App.scss` file in the `src/App.js`:

```scss
@use "react-md" as *;

// this will include all the styles from react-md
@include react-md-utils;
```

```diff
+import './App.scss';
 import React from 'react';
 import logo from './logo.svg';
 import './App.css';
```
