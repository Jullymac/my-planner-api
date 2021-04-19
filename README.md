<h1 align="center">
  My planner API
</h1>

<p align="center">
  <img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/Jullymac/my-planner-api">
    <img src="https://img.shields.io/badge/framework-adonisjs-green">
  <a href="https://semver.org/" target="_blank">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6-semantic--versioning-e10079.svg">
  </a>
</p>

## Table of content

- [Table of content](#table-of-content)
- [Project board](#project-board)
- [Installation](#installation)
- [Configuration](#configuration)
- [Start](#start)
- [Libraries and frameworks](#libraries-and-frameworks)
- [Changelog](#changelog)

## Project board

You can check the progress of the project on the board in [Trello](https://trello.com/b/TX2UdinO/my-planner).

## Installation

To install the application, you'll need **Git**, **Node.js**, and **AdonisJs CLI**. From your command line:

```bash
# Install AdonisJs CLI
$ npm i -g @adonisjs/cli

# Clone this repository
$ git clone https://github.com/Jullymac/my-planner-api.git

# Go into the repository
$ cd my-planner-api

# Install dependencies
$ npm ci
```

## Configuration

Copy `.env.example` file to `.env` and fill up all environment variables, preferably with a postgres database.

## Start

You can start the application locally with the following command:

```bash
$ adonis server --dev
```

It will run at http://localhost:3000

## Libraries and frameworks

The main libraries and frameworks used in this project are:

- [AdonisJs](https://adonisjs.com) - v4.1.0
- [Prettier](https://prettier.io) - v2.2.1
- [EsLint](https://eslint.org) - v7.24.0
- [Husky](https://typicode.github.io/husky) - v6.0.0

## Changelog

For a full list of changes, see [Changelog](CHANGELOG.md)
