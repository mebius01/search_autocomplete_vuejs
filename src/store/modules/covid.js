import axios from "axios"
export default {
  namespaced: true,
  state: {
    rootUrl: "https://api.covid19api.com/summary",
    search: '',
    results: [],
    btnShowListCountries: false,
    arrDataCountries: null,
    objOneCountry: null,
    arrowCounter: -1,
  },
  getters: {},
  mutations: {},
  actions: {
    getResponse() {
      axios
        .get(this.rootUrl)
        .then(response => (this.arrDataCountries = response.data.Countries))
    }
  },
}
