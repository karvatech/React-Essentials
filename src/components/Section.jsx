export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children} {/*to output the entire section content after the heading */}
    </section>
  );
}
