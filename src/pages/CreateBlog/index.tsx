import { Formik, Form, Field } from "formik";
import { useAuthStore } from "../../store/authStore";
import type { IBlogInput } from "../../types/blogtype";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function CreateBlog() {
  const navigate = useNavigate();

  const { email } = useAuthStore();
  const initialValues: IBlogInput = {
    title: "",
    tags: "",
    creator: "",
    content: "",
    datetime: "",
  };

  const handleSubmit = async (values: IBlogInput) => {
    const payloads = {
      ...values,
      creator: email,
      datetime: new Date().toISOString(),
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_BLOG, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloads),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(errorData.message || "Registration failed");
      }

      alert("Berhasil membuat blog");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (!email) {
      navigate("/login", { replace: true });
    }
  }, [email, navigate]);

  if (!email) return null; // render nothing while redirecting

  return (
    <section className="py-12 mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-6xl font-bold mt-25 text-amber-500 text-shadow-[2px_2px_6px_rgba(0,0,0,0.4)]">
          Tulis Artikel
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {() => (
              <Form className="flex flex-col gap-10">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Judul Artikel <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="title"
                    name="title"
                    autoComplete="title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan judul artikel..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Konten Artikel <span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="textarea"
                    maxLength={250}
                    rows={6}
                    name="content"
                    autoComplete="content"
                    id="content"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-y"
                    placeholder="Tulis konten artikel Anda di sini... Anda bisa menulis tentang roti tradisional, tips membuat roti, sejarah Toko Roti Sidodadi, atau topik lainnya yang relevan."
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Tips: Anda bisa menggunakan format teks biasa atau Markdown
                    untuk pemformatan (contoh: **tebal**, *miring*, # judul)
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="tags"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Tag (opsional)
                  </label>
                  <Field
                    type="text"
                    id="tags"
                    name="tags"
                    autoComplete="tags"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Masukkan tag dipisahkan dengan koma (contoh: roti tradisional, resep, tips)"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Pisahkan beberapa tag dengan koma
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Penulis: {email}
                    <span className="font-semibold"></span>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="cursor-pointer px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="cursor-pointer px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                    >
                      Publikasikan Artikel
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default CreateBlog;
