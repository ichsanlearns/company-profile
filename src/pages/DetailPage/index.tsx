import { useEffect, useState } from "react";

import { Link, useParams } from "react-router";

import type { IBlogInput } from "../../types/blogtype";

function DetailPage() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<IBlogInput | null>(null);

  useEffect(() => {
    async function getBlogDetail() {
      const response = await fetch(
        `${import.meta.env.VITE_API_BLOG}/${params.id}`
      );
      const data = await response.json();

      setBlog(data);
      setIsLoading(false);
    }

    getBlogDetail();
  }, []);

  return (
    <article className=" bg-amber-500 min-h-screen flex flex-col justify-center items-center">
      <div className="w-[50%] h-[50%] flex flex-col">
        <div
          className="box items-center bg-amber-400 justify-center
             border border-white rounded-2xl min-h-10 p-2"
        >
          <Link
            to="/bloglist"
            className="
    inline-flex items-center gap-2
    rounded-xl border border-amber-400
    bg-white px-4 py-2
    text-amber-500 font-medium
    transition
    hover:bg-amber-50 hover:-translate-x-2
    active:scale-95
  "
          >
            ← Back
          </Link>
        </div>
        <div className="w-h-full min-h-full bg-white  rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
          {isLoading ? (
            <div className="flex h-80 justify-center items-center min-w-full min-h-full ">
              <div className="w-20 h-20 border-amber-500 border-b-4 rounded-full animate-spin mr-4"></div>
              <span>Mengambil data...</span>
            </div>
          ) : (
            <div>
              <div className=" border-t border-gray-200 pt-4">
                <div className="mx-10 flex items-center justify-between">
                  <div className=" flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      a
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900 text-sm">
                        {blog?.creator}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {new Date(Number(blog?.datetime)).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 ">
                <div className="mb-4 ">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 text-center">
                    {blog?.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog?.content}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                      {blog?.tags}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*  */}
          <div className="flex justify-end gap-3 bg-amber-400 p-2">
            <button
              className="
      inline-flex items-center justify-center
      rounded-lg border bg-white border-amber-600
      px-4 py-2
      text-sm font-semibold text-amber-700
      hover:bg-amber-50 transition cursor-not-allowed
    "
            >
              Edit
            </button>

            <button
              type="button"
              className="
      inline-flex items-center justify-center
      rounded-lg border border-red-400
      px-4 py-2
      text-sm font-semibold bg-white text-red-600
      hover:bg-red-50 transition cursor-not-allowed
    "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DetailPage;
