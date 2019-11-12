module.exports = {
  rollup(config, options) {
    return Object.assign(config, {
      external: [
        "brown-university-styles",
        "formik",
        "react",
        "react-select",
        "styled-components"
      ]
    });
  }
};
