import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/country",
  params: { name: "italy" },
  headers: {
    "x-rapidapi-key": "1031599022msh37c84da8c4e9b0ap1047d6jsn4d6475b64dc7",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
  }
};

const covid = {
  state: () => ({
    posts: []
  }),
  mutations: {
    setPosts(state, components) {
      state.posts = posts;
    }
  },
  actions: {
    loadPosts({ commit }) {
      axios
        .request(options)
        .then((response) => {
          commit("setPosts", response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }
};

export default covid;
