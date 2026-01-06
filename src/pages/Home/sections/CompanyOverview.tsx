import { FeatureCard } from "../../../components/FeatureCard";
import { SectionHeader } from "../../../components/SectionHeader";
import { FEATURES } from "../../../constants";

function CompanyOverview() {
  return (
    <>
      <section className="relative py-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage:
              "url('/images/backgrounds/traditional-bakery.jpg')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tentang Toko Roti Sidodadi"
            description="Menjaga tradisi, menghadirkan kenangan"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyOverview;
