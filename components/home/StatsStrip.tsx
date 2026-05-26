import AnimatedSection from "../Animations";

const stats = [
  { value: "15K+", label: "Happy Customers" },
  { value: "4.9", label: "Average Rating" },
  { value: "99%", label: "On Time Delivery" },
];

export default function StatsStrip() {
  return (
    <section
      className="stats-section py-10"
      style={{ backgroundColor: "var(--section-bg)" }}
    >
      <AnimatedSection delay={0.1}>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <div
                className="text-4xl font-extrabold"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>

              <div
                className="mt-2 text-sm"
                style={{ color: "var(--section-text)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}