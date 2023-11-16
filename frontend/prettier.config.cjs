module.exports = {
  trailingComma: "es5",
  singleQuote: true,
  proseWrap: "always",
  endOfLine: "lf",
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@jupiterone/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: false,
};
