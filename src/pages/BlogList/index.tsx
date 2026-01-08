import { useEffect, useState } from "react";
import type { IBlogInput } from "../../types/blogtype";
import { Link } from "react-router";

function BlogList() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<IBlogInput[] | null>(null);

  useEffect(() => {
    async function getBlogList() {
      const response = await fetch(import.meta.env.VITE_API_BLOG);
      const data = await response.json();

      setBlogs(data);
      setIsLoading(false);
    }

    getBlogList();
  }, [isLoading]);

  return (
    <section className="py-20 bg-amber-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4">
          {blogs?.map((blog) => (
            <Link
              to={`/detailblog/${blog.objectId}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className=" border-t border-gray-200 pt-4">
                <div className="mx-10 flex items-center justify-between">
                  <div className=" flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      a
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900 text-sm">
                        {blog.creator}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {new Date(Number(blog.datetime)).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 ">
                <div className="mb-4 ">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 text-center">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                      {blog.tags}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {isLoading ? (
          <div className="flex flex-col justify-center items-center">
            <div className="w-17 h-17 border-b-3 border-amber-400 mb-4 rounded-full animate-spin"></div>
            <span>Memuat data blog...</span>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="mt-12 text-center w-50 border-amber-500 border-2 rounded-2xl">
              <p className="text-gray-600">
                Menampilkan {blogs?.length} artikel
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogList;
