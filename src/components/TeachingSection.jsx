import WayToTech from "./WayToTech";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map((way) => (
          <WayToTech key={way.id} {...way} />
        ))}
      </ul>
    </section>
  );
}
