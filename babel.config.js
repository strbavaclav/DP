module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            constants: "./src/constants",
            screens: "./src/screens",
            assets: "./src/assets",
            locales: "./src/locales",
            services: "./src/services",
            context: "./src/context",
            gql: "./src/gql",
          },
        },
      ],
    ],
  };
};
