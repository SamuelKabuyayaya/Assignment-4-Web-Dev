export default {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  moduleFileExtensions: ["js", "jsx"],

  moduleDirectories: ["node_modules", "src"],

  // ⬅️ IMPORTANT: Jest must transform react-router-dom (ESM)
  transformIgnorePatterns: [
    "/node_modules/(?!react-router|react-router-dom)/"
  ],
};
