class QueryParams {
  constructor() {
    this.form = document.querySelector(".app");
    this.init();
  }
  init() {
    if (!this.form) {
      return;
    }

    const buttonFilters = document.querySelectorAll(".form__button");
    const inputForm = this.form.querySelectorAll(".form__input");
    let params = [];

    buttonFilters.forEach((elm) => {
      elm.addEventListener("click", () => {
        let category = elm.getAttribute("data-category"),
          catVal = elm.innerText;

        if ("URLSearchParams" in window) {
          let searchParams = new URLSearchParams(window.location.search);
          searchParams.set(category, catVal);
          params.push(`${category}%5B%5D=${catVal}`);
          params.toString();
          let stringParams = [...params];
          stringParams.join(",");
          stringParams.reduce((a, b) => a + "&" + b);
          console.log(stringParams);
          let newRelativePathQuery =
            window.location.pathname +
            "?" +
            stringParams.reduce((a, b) => a + "&" + b);
          history.pushState(null, null, newRelativePathQuery);
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new QueryParams();
});
