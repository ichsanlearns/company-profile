import { ProductPreviewCard } from "../../../components/ProductPreviewCard";
import { SectionHeader } from "../../../components/SectionHeader";
import { PRODUCT_PREVIEWS } from "../../../constants";

function Products() {
  return (
    <>
      <section className="relative py-20 bg-amber-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage:
              "url('/images/backgrounds/bakery-bread-display.jpg')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Produk Unggulan Kami"
            description="Berbagai pilihan roti dengan cita rasa khas dan tekstur padat yang lezat"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCT_PREVIEWS.map((preview, index) => (
              <ProductPreviewCard
                key={index}
                emoji={preview.emoji}
                title={preview.title}
                items={preview.items}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
