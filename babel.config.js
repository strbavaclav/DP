module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        { alias: { constants: "./src/constants", screens: "./src/screens" } },
      ],
    ],
  };
};
