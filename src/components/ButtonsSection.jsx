import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data";

export default function ButtonsSection() {
  const [contentType, setContentType] = useState(null);

  let tabContent = null;

  if (contentType) {
    tabContent = <p>{differences[contentType]}</p>;
  } else {
    tabContent = <p>Click button</p>;
  }

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        onClick={() => handleClick("way")}
        isActive={contentType === "way"}
      >
        Подход
      </Button>
      <Button
        onClick={() => handleClick("easy")}
        isActive={contentType === "easy"}
      >
        Доступность
      </Button>
      <Button
        onClick={() => handleClick("program")}
        isActive={contentType === "program"}
      >
        Концентрация
      </Button>
      {tabContent}
    </section>
  );
}
