import { Formik, Form, Field } from "formik";

import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";

interface ILoginFormValues {
  email: string;
  password: string;
}

function Login() {
  const { setEmail } = useAuthStore();
  const navigate = useNavigate();
  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginFormValues) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_USER}?where=email%3D'${
          values.email
        }'AND%20password%3D'${values.password}'`
      );
      const data = await response.json();

      if (data.length === 0) {
        throw new Error("Invalid email or password");
      }

      setEmail(values.email);
      alert("Login successful");

      navigate("/createblog");
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
      <div className="flex flex-col  items-center justify-center justify-between bg-white w-134.75 h-185.25 rounded-4xl px-11 drop-shadow-2xl">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div className="w-full min-h-[30%]  flex justify-between items-center">
                <div className="flex justify-between w-full ">
                  <div className="flex flex-col text-[20px]">
                    <p>Welcome to Lorem</p>
                    <h1 className="text-[55px] font-medium">Sign In</h1>
                  </div>
                  <div className="flex flex-col justify-start h-full">
                    <Link to="/signup" className="text-[13px] text-[#8D8D8D]">
                      No Account ?
                    </Link>
                    <Link to="/signup" className="text-[13px] text-[#B87514]">
                      Sign Up
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
                    className="border border-[#4285F4] p-4.75 rounded-[9px] w-full h-[57px]"
                    type="email"
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
                    name="password"
                    autoComplete="password"
                    type="password"
                    placeholder="Enter your password..."
                  />
                  <div className="mt-3 w-full flex justify-end items-end">
                    <Link to={"/signup"} className="text-[13px] text-[#AD3113]">
                      Forgot Password
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-[33px]">
                <button
                  type="submit"
                  className="flex mt-2 justify-center items-center cursor-pointer w-full h-[54px] hover:bg-[#f5bc66b3] bg-[#E48700] rounded-[10px]"
                >
                  Sign in
                </button>

                <div className="mb-6 text-[16px] -mt-2 mb-18  text-gray-500">
                  OR
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="w-full flex justify-between">
          <button className=" w-[298px] h-[55px] bg-[#FFF4E3] rounded-[9px] flex justify-center gap-3 items-center hover:grayscale cursor-not-allowed">
            <img src="/images/google.png" alt="Google" />
            Google
          </button>
          <button className="w-[60px] h-[55px] bg-[#F6F6F6] flex items-center justify-center hover:grayscale cursor-not-allowed">
            <img src="/images/facebook.png" alt="facebook" />
          </button>
          <button
            className="w-[60px] h-[55px] bg-[#F6F6F6] flex items-center justify-center
             hover:opacity-50 cursor-not-allowed "
          >
            <img src="/images/apple.png" alt="Apple" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
