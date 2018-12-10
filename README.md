## Setup

### 1. Get the source code

Just clone the project(#master):

```sh
$ git clone -b master https://github.com/bloodymind/dates-diff.git my-app
$ cd my-app
```

You will probably want to remove git history and start building a new project:

```sh
$ rm -rf .git
$ git init
```

### 2. Install dependencies

We assume you have already Nodejs et NPM already installed! latest version are better, always better :)

```sh
$ npm install
```

### 3. Run the app

```sh
$ npm start
```

It will start the development server with on PORT 3000 by default

> [http://localhost:3000](http://localhost:3000) — Development server<br>

Now you can open [http://localhost:3000](http://localhost:3000) in browser and start developing.

## Table Content (highlight)

- Project structure using Atomic Design, please visit for more detail: https://patternlab.io/
- React 16.6
- Babel
- Webpack
- Styled-components
- React-dates (http://airbnb.io/react-dates/)
- Jest
- StoryBook

## Run tests

```sh
$ npm test
```
