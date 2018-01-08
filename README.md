# react-select-order-list
### [Demo](https://opuscapita.github.io/react-select-order-list)

**SelectOrderList** component renders two lists. First contains data and we can check and uncheck them. After that selected row appears on second list where we can sort data by drag and drop function. We also have delete option avaiable from second list by remove icon.

### Installation

```
npm install @opuscapita/react-select-order-list
```

### Development

* Run `npm install` to get the project's dependencies
* Run `npm run build` to produce minified version of the library
* Run `npm run dev` to produce development version of the library.
* Run `npm run test` to run tests
* Run `npm run docs` to run generate examples

#### Development workflow
* Run `npm run docs`
* Open `docs/index.html`

  Or

* Run `npm run hot`
* Open `http://localhost:5556/`

#### Contributing
* Make a new branch for the changes
* Update `CHANGELOG.md` file
* Commit changes (not `lib`)
* Make a pull request
* Merge the pull request and delete the development branch

#### Creating a new release
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)
* Run `npm publish`