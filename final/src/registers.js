import Vue from "vue";
const plugin = () => {
  const requireComponent = require.context(
    "./components/icons", //the refer path
    false, // refer to child folder
    /[A-Z]\w+\.(vue)$/ // name
  );

  requireComponent.keys().forEach((fileName) => {
    console.log(fileName);
    const componentConfig = requireComponent(fileName).default;

    Vue.component(componentConfig.name, componentConfig);
  });
};

export default plugin;
