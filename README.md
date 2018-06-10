# CodeChallenger

[![Build Status][s1]][tr] [![license][s2]][li]

[s1]: https://travis-ci.org/yowari/code-challenger.svg?branch=master
[s2]: https://img.shields.io/badge/license-MIT-green.svg

[tr]: https://travis-ci.org/yowari/code-challenger
[li]: LICENSE

**CodeChallenger** is a community driven coding challenges to help new and
intermediate developers improve their skills. It provides an online code editor
and test runner.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### Prerequisites

- [Node.js][no] >= 8
- [npm][np] or [Yarn][ya]
- [git][gi]

[no]: https://nodejs.org
[np]: https://www.npmjs.com
[ya]: https://yarnpkg.com
[gi]: https://git-scm.com

## Installing

CodeChallenger uses external REST API to run tests and gets results. You can
run `ng serve --prod` to launch a dev server using the external API. Navigate to
`http://localhost:4200/`. The app will automatically reload if you change any of
the source files.

If you want to change the API endpoint, you can set the URL in environment file
located in `src/environments/environment.prod.ts` under the name of
`testRunnerBaseUrl`.

## Deployment

Run `ng build --prod` to build the project. The build artifacts will be stored
in the `dist/` directory.

## Built With

- [Nico heart][ni]

[ni]: https://imgur.com/a/b05n4En

## License

This project is licensed under the MIT License - see the [LICENSE][li] file for
details.

[li]: LICENSE
