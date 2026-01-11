import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Link, useParams } from "react-router";

import type { IBlogInput } from "../../types/blogtype";
import { useAuthStore } from "../../store/authStore";

const initialValues: IBlogInput = {
  title: "",
  tags: "",
  content: "",
};

function DetailPage() {
  const params = useParams();
  const { email } = useAuthStore();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
  }, [params.id]);

  function handleEdit() {
    if (blog?.creator !== email) {
      alert("Hanya pembuat post dan admin yang dapat mengedit!");
      return;
    }
    setIsEditing(true);
  }

  async function handleSubmit(values: IBlogInput) {
    setIsLoadingForm(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_DOMAIN}/${params.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) throw new Error("Update failed");

      setBlog(values);
      setIsEditing(false);
      alert("Post berhasil di update!");
    } catch (error) {
      alert("Masih Error pak🙏.");
    } finally {
      setIsLoadingForm(false);
    }
  }

  return (
    <article className="bg-amber-500 min-h-screen flex justify-center items-center">
      <div className="w-[50%] flex flex-col gap-4">
        {/* Back */}
        <div className="bg-amber-400 border border-white rounded-2xl p-2">
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

        {/* Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {isLoading ? (
            <div className="flex h-80 justify-center items-center">
              <div className="w-20 h-20 border-amber-500 border-b-4 rounded-full animate-spin mr-4" />
              <span>Mengambil data...</span>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="border-b border-gray-200 p-4 flex items-center">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                  {blog?.creator?.[0]?.toUpperCase()}
                </div>
                <div className="ml-3">
                  <p className="font-semibold">{blog?.creator}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(Number(blog?.datetime)).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* CONTENT */}
              {isEditing ? (
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  <Form className="p-6 space-y-4">
                    {/* Title */}
                    <Field
                      name="title"
                      id="title"
                      className="w-full border rounded-lg p-2 text-lg font-semibold"
                      placeholder="Title"
                    />

                    {/* Content */}
                    <Field
                      id="content"
                      as="textarea"
                      name="content"
                      className="w-full border rounded-lg p-2 h-40"
                      placeholder="Content"
                    />

                    {/* Tags */}
                    <Field
                      id="tags"
                      name="tags"
                      className="w-full border rounded-lg p-2"
                      placeholder="Tags"
                    />

                    <div className="flex justify-end gap-3">
                      <button
                        type="submit"
                        disabled={isLoadingForm}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        {isLoadingForm ? "Saving..." : "Save"}
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-300 px-4 py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                </Formik>
              ) : (
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-center">
                    {blog?.title}
                  </h2>
                  <p className="text-gray-600">{blog?.content}</p>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                    {blog?.tags}
                  </span>
                </div>
              )}

              {/* Footer */}
              {!isEditing && (
                <div className="flex justify-end gap-3 bg-amber-400 p-3">
                  <button
                    onClick={handleEdit}
                    className="
                      bg-white border border-amber-600
                      px-4 py-2 rounded-lg
                      text-amber-700 font-semibold
                      hover:bg-amber-50
                    "
                  >
                    Edit
                  </button>

                  <button
                    className="
                      bg-white border border-red-400
                      px-4 py-2 rounded-lg
                      text-red-600 font-semibold
                      cursor-not-allowed
                    "
                  >
                    Delete
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default DetailPage;
