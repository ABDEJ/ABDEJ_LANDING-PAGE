import Image from "next/image";
import SectionHeader from "../SectionHeader";
import AnimatedSection from "../Animations";

const testimonials = [
  {
    name: "Oluwaya Michael",
    role: "Industrial Tank Owner",
    text: "Amazing service! Got all my materials delivered on time. The quality is top-notch and prices are very competitive.",
    avatar: "/MichaelTestimonial.svg",
    images: [],
  },
  {
    name: "Adunni Ewatomi",
    role: "Generator Owner",
    text: "Great selection and easy ordering process. The expert advice from their team helped me choose the right materials.",
    avatar: "/EwatomiTestimonial.svg",
    images: [
      "/galleryTestimonial1.svg",
      "/galleryTestimonial2.svg",
      "/galleryTestimonial3.svg",
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center text-center">
            <SectionHeader
              title="Testimonials"
              subtitle="See what our customers have to say about their experience."
            />
          </div>
        </AnimatedSection>

        <div className="mt-12 space-y-10">
          {testimonials.map((item, index) => (
            <AnimatedSection key={index} delay={0.15 + index * 0.12} direction="up">
              <div className="max-w-3xl">
                <div className="mb-3 flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={42}
                    height={42}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {item.name}
                    </h4>

                    <div className="mt-1 flex items-center gap-3">
                      <span className="text-secondary">★★★★★</span>
                      <p className="text-sm text-white/60">{item.role}</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/75 md:text-base">
                  “{item.text}”
                </p>

                {item.images.length > 0 && (
                  <div className="mt-5 flex gap-3">
                    {item.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative h-16 w-24 overflow-hidden rounded-lg"
                      >
                        <Image
                          src={img}
                          alt={`gallery-${i}`}
                          width={120}
                          height={120}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.45}>
          <div className="mt-10 flex justify-end gap-4">
            <button className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-secondary text-3xl text-dark">
              ‹
            </button>
            <button className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-secondary text-3xl text-dark">
              ›
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}