module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        extensions: [".ts", ".tsx"],
        root: ["."],
        alias: {
          "@src": "./src",
        },
      },
    ],
    ["module:react-native-dotenv"],
  ],
};
