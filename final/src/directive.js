import Vue from "vue";

const dir = () => {
  Vue.directive("scrolling", {
    inserted: function(el, binding) {
      let func = function(evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener("scroll", func);
        }
      };
      window.addEventListener("scroll", func);
    },
  });
};

export default dir;
