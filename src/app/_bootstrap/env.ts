const defaultConfig = {
  HOST: "localhost",
  PORT: 3000,
  API_URL: "https://jsonplaceholder.typicode.com",
  APP: {
    htmlAttributes: {
      lang: "en",
    },
    title: "REACT COOL STARTER",
    titleTemplate: "REACT COOL STARTER - %s",
    meta: [
      {
        name: "description",
        content: "The best react universal starter boilerplate in the world.",
      },
    ],
  },
};

const prodConfig = {
  PORT: 8080,
};

let env = null;
if (__DEV__) {
  env = defaultConfig;
} else {
  env = { ...defaultConfig, ...prodConfig };
}

export const ENV = env;
