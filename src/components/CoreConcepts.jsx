import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>

      {/* static way of providing the data
      <CoreConcepts
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}
      image={CORE_CONCEPTS[0].image}></CoreConcepts>

      using the spread operator to extract all the parameters from the declared function
      <CoreConcepts {...CORE_CONCEPTS[1]}/>
      <CoreConcepts {...CORE_CONCEPTS[2]}/>
      <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
    </section>
  );
}
