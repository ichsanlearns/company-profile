import { useEffect, useState } from "react";

import { Link, useParams, useNavigate } from "react-router";

import type { IBlogInput } from "../../types/blogtype";

function DetailPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState<IBlogInput | null>(null);

  useEffect(() => {
    async function getBlogDetail() {
      const response = await fetch(
        `${import.meta.env.VITE_API_BLOG}/${params.id}`
      );
      const data = await response.json();

      setBlog(data);
      console.log(blog);
    }

    getBlogDetail();
  }, []);

  return (
    <article className="">
      <div className="w-screen min-h-screen bg-white  rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
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
            <p className="text-gray-600 mb-4 line-clamp-3">{blog?.content}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                {blog?.tags}
              </span>
            </div>
          </div>
        </div>
        <Link
          to={"/bloglist"}
          className="bg-amber-300 flex items-center justify-center"
        >
          <div className="p-10 border border-amber-300 w-100 rounded-full">
            <p className="text-center text-8xl text-amber-800">Mas.....</p>
            <p className="text-center text-8xl underline ">🙏</p>
            <p className="text-center text-xl font-bold mt-5 text-amber-950 underline">
              Ini tombol kembali
            </p>
          </div>
        </Link>
      </div>
    </article>
  );
}

export default DetailPage;
