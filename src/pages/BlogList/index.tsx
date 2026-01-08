function BlogList() {
  return (
    <section className="py-20 bg-amber-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            {/*  */}
            <div className=" border-t border-gray-200 pt-4">
              <div className="mx-10 flex items-center justify-between">
                <div className=" flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 text-sm">
                      penulis 1
                    </p>
                    <p className="text-gray-500 text-xs">12-12-2025</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="p-6 ">
              <div className="mb-4 ">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 text-center">
                  Judul
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Isinya Content A
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    tag A
                  </span>
                </div>
              </div>
            </div>
          </article>
          <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            {/*  */}
            <div className=" border-t border-gray-200 pt-4">
              <div className="mx-10 flex items-center justify-between">
                <div className=" flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    B
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900 text-sm">
                      penulis 2
                    </p>
                    <p className="text-gray-500 text-xs">12-12-2025</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="p-6 ">
              <div className="mb-4 ">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 text-center">
                  Judul
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Isinya Content B
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    tag B
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Menampilkan 2 artikel</p>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
