# Drupal React Bill Estimator Shared

Common code for the [undergrad](https://bitbucket.brown.edu/projects/DREACT/repos/drupal-react-bill-estimator-undergrad/) and [grad](https://bitbucket.brown.edu/projects/DREACT/repos/drupal-react-bill-estimator-grad/) bill estimators.

---

## Usage

### 1. Install packages

#### Drupal React Bill Estimator Shared

```sh
// npm
npm i git@github.com:BrownUniversity/drupal-react-bill-estimator-shared.git

// yarn
yarn add git@github.com:BrownUniversity/drupal-react-bill-estimator-shared.git
```

#### Required Peer Dependencies

These libraries are not bundled with Drupal React Bill Estimator Shared and are required at runtime:

- [**brown-university-styles**](https://github.com/BrownUniversity/brown-university-styles/)
- [**formik**](https://www.npmjs.com/package/formik)
- [**react**](https://www.npmjs.com/package/react)
- [**react-select**](https://www.npmjs.com/package/react-select)
- [**styled-components**](https://www.npmjs.com/package/styled-components)

### 2. Import styles from Brown University Styles

---

## Development

### Install dependencies

```sh
npm install
```

### Recommended workflow

Run TSDX in one terminal:

```sh
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```sh
cd example
npm install
npm start
```

### Lint

```sh
npm run lint
```

### Test

```sh
npm test
```

---

## Deployment

To publish a new version, do the following:

1. Bump version in `package.json` and `package-lock.json`
2. Bump version in `README.md` install instructions (for major and minor version bumps only)
3. Update `CHANGELOG.md`
4. `npm run build`
5. Commit changes
6. Tag new version
7. Push main and tags to all remotes

---

## Boilerplate

This project was bootstraped with [TSDX](https://github.com/jaredpalmer/tsdx).
