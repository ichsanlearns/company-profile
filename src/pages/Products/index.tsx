import { ProductCard } from "../../components/ProductCard";
import { PRODUCT_CATEGORIES } from "../../constants";

function Services() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🚫</div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Tanpa Pengawet
                </h3>
                <p className="text-sm text-gray-600">
                  100% bahan alami, tanpa bahan pengawet, pelembut, atau pewarna
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔥</div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Panggang Arang
                </h3>
                <p className="text-sm text-gray-600">
                  Dibuat dengan metode tradisional panggang arang untuk cita
                  rasa yang khas
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">👋</div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Diuleni Tangan
                </h3>
                <p className="text-sm text-gray-600">
                  Setiap roti diuleni dengan tangan untuk tekstur yang padat
                  namun lembut
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                <strong>Catatan:</strong> Karena tanpa pengawet, roti memiliki
                umur simpan terbatas (beberapa hari pada suhu ruangan). Simpan
                di tempat sejuk dan kering.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                  <div
                    key={itemIndex}
                    className="bg-white border-2 border-amber-100 rounded-xl p-6 hover:shadow-xl transition-all hover:border-amber-300"
                  >
                    <div className="text-center mb-4">
                      <div className="text-6xl mb-4">{item.image}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-amber-600 font-semibold text-lg mb-4">
                        {item.price}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
