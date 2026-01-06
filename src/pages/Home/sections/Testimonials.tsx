import { SectionHeader } from "../../../components/SectionHeader";
import { TestimonialCard } from "../../../components/TestimonialCard";
import { TESTIMONIALS } from "../../../constants";

function Testimonials() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Kata Pelanggan Kami"
            description="Testimoni dari pelanggan setia kami"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                initial={testimonial.initial}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
