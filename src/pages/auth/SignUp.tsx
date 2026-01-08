import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface RegisterFormValues {
  email: string;
  password: string;
}

function SignUp() {
  const navigate = useNavigate();

  const initialValues: RegisterFormValues = {
    email: "",
    password: "",
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_USER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      alert("Sign Up successful");
      navigate("/login");

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));

        throw new Error(errorData.message || "Registration failed");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/hero-bakery.jpg')",
      }}
      className="bg-[#ECBC76] h-175 flex items-center justify-center min-h-lvh"
    >
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <div className="flex flex-col  items-center justify-center justify-between bg-white w-134.75 h-185.25 rounded-4xl px-[44px] drop-shadow-2xl">
              <div className="w-full min-h-[30%]  flex justify-between items-center">
                <div className="flex justify-between w-full ">
                  <div className="flex flex-col text-[20px]">
                    <p>Welcome to Lorem</p>
                    <h1 className="text-[55px] font-medium">Sign Up</h1>
                  </div>
                  <div className="flex flex-col justify-start h-full">
                    <Link to="/login" className="text-[13px] text-[#8D8D8D]">
                      Have an Account ?
                    </Link>
                    <Link to="/login" className="text-[13px] text-[#B87514]">
                      Sign In
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full min-h-[30%] flex flex-col gap-[38px]">
                <div className="">
                  <label htmlFor="email" className="text-[16px]">
                    Enter your email
                  </label>
                  <Field
                    className="border border-[#4285F4] p-[19px] rounded-[9px] w-full h-[57px]"
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email address..."
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-[16px]">
                    Enter your password
                  </label>
                  <Field
                    className="border border-[#ADADAD] p-[19px] rounded-[9px] w-full h-[57px]"
                    type="password"
                    name="password"
                    autoComplete="password"
                    placeholder="Enter your password..."
                  />
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-[33px]">
                <button
                  type="submit"
                  className="flex mt-2 justify-center items-center cursor-pointer w-full h-[54px] bg-[#E48700] rounded-[10px]"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
