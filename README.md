# generator-seedrs-react

[![npm version](https://badge.fury.io/js/%40seedrs%2Fgenerator-seedrs-react.svg)](https://badge.fury.io/js/%40seedrs%2Fgenerator-seedrs-react) [![Build status](https://badge.buildkite.com/50d7a21abe9dcd5737f00a12b5ecdb085b53583759deb86272.svg)](https://buildkite.com/seedrs/generator-seedrs-react) [![Dependency Status][daviddm-image]][daviddm-url] [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

First, install [Yeoman](http://yeoman.io) and @seedrs/generator-seedrs-react using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

With npm

```bash
npm install -g yo
npm install -g @seedrs/generator-seedrs-react
```

With yarn

```bash
yarn global add yo @seedrs/generator-seedrs-react
```

Then generate your new project:

```bash
yo @seedrs/seedrs-react
```

### Prompts

Yeoman will prompt you for three things:

*name* - This is the name of your application. Choose it wisely!

*embeddable* - Answering yes will set up the repository to generate an
application which can be mounted into an existing page. No will generate
a public/index.html file which you can use to build your application.

*port* - This is important make sure you do not clash with other
applications you are running. This option affects docker-compose.yml,
webpack.development.js only. It will not affect anything in the
production build.

## Folder structure

Running the generator will scaffold your project in the following
structure. It will also create a git repository.

```
.buildkite/
  │
  ├── steps/
  │   │
  │   ├── lint.sh
  │   │
  │   └── test.sh
  └── pipeline.yml
public/
  │
  └─── index.html
config/
  │
  ├── aliases.js
  │
  ├── config.js
  │
  ├── paths.js
  │
  ├── webpack.common.js
  │
  ├── webpack.development.js
  │
  ├── webpack.production.js
  │
  └── env/
      │
      ├── env.development.js
      │
      ├── env.production.js
      │
      ├── env.staging.js
      │
      └── index.js
scripts/
  │
  ├─── build.js
  │
  └─── test.js
src/
  │
  ├──__tests__/
  │    │
  │    └─ app.test.js
  │
  └── <app_name>.js
Dockerfile
docker-compose.yml
package.json
```

### .buildkite/

Contains a pipeline.yml which defines two tasks one for linting the
project and one for running the tests. You can add more scripts to the
steps folder and modify the pipeline.yml to add more steps.

### public/

Only generated when you choose to scaffold a non embeddable application.

Contains an index.html file. This is a barebones html file that the
react application can be rendered into. Customise this as you see fit.
This file is handled by [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

### Config/

Contains the webpack configuration for development and production.

*aliases.js*

Aliases for specifying imports e.g. 'components/mycomponent' instead of
specifiying relative paths.

*config.js*

Contains the HOST and the APP_ENV. We use APP_ENV to set the stage of
the build e.g. staging in refering to the environment the applicaiton
will be deployed to. This allows us to work around NODE_ENV being used by webpack to specify whether
the build should be a production style minified build or a development
style build.

*paths.js*

Contains a mapping of the various folders to their location within the
folder allowing them to be referenced easily.

*webpack.common.js*

This file contains webpack config shared between both development and
production style builds.

*webpack.development.js*

Development will run webpack dev server so the application can be run
locally. You will need to set up your /etc/hosts file to point to
<app_name>.seedrs.local. This might need additional config on the proxy
level.

*webpack.production.js*

Will produce a minified build of your application. If you have generated
a embedded application then you will have two .js files output one which can be
statically linked to within the parent page and the other containing
your application bundle.

*env/*

Contains environment specific config required at build time. E.g.
publicPath which can be used by webpack.

### scripts/

Utility scripts to help with linting and running jest tests.

### src/

Your application code goes here! ``__tests__`` contain your jest tests.

### Dockerfile

A base Dockerfile used for development, testing and building the
application bundle.

### docker-compose.yml

A docker-compose config to help you get started.

### package.json

Contains modules that will help you get started with a new react
project.

## Getting started

To get started with development run

```
docker-compose up
```

This will create a docker container and install the packages in
package.json. If you have set up your /etc/hosts file with <app_name>
pointed to localhost you can visit http://< app_name >:< port >/index.html
and see ``It works!.`` Rendered in the browser.

## Contributing

To contribute please follow the guidelines below. We will not accept PRs
that do not conform to these simple rules.

### linting

Make sure your changes pass the linter.

### tests

Please write tests for any generators you add or templates you make
changes to.

### commitizen

Create structured git commits using ``yarn commit``. Follow the prompts
and push these changes to your branch.

Let's discuss your changes in the PR.

## License

Apache-2.0 © [tech@seedrs.com](www.seedrs.com)

[daviddm-image]: https://david-dm.org/seedrs/generator-seedrs-react.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/seedrs/generator-seedrs-react
