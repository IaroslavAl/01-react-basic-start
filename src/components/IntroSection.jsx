import React from "react";

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement(
      "h1",
      {
        className: "centered",
        key: 0,
      },
      "Result University"
    ),
    React.createElement(
      "h3",
      {
        className: "centered",
        style: { color: "#666" },
        key: 1,
      },
      "Получите профессию frontend-разработчика и постройте карьеру в IT"
    ),
  ]);
}
