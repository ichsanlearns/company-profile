import { ProductCard } from "../../components/ProductCard";
import { PRODUCT_CATEGORIES } from "../../constants";

function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {PRODUCT_CATEGORIES.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {category.category}
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <ProductCard
                  key={itemIndex}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
