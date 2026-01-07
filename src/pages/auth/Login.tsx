import { useState } from "react";
import { Link, useNavigate } from "react-router";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // setIsLoading(true);
    // const response = await fetch(
    //   `https://healthyrange-us.backendless.app/api/data/user?where=email%3D'anom@gmail.com'AND%20password%3D'pasword123`
    // );
    // const data = await response.json();
    navigate("/");
  }

  return (
    <div
      style={{
        backgroundImage: "url('/images/hero-bakery.jpg')",
      }}
      className="bg-[#ECBC76] h-175 flex items-center justify-center min-h-lvh"
    >
      <div
        id="login"
        className="flex flex-col  items-center justify-center justify-between bg-white w-134.75 h-185.25 rounded-4xl px-[44px] drop-shadow-2xl"
      >
        <form action="" onSubmit={handleSubmit}>
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
              <input
                className="border border-[#4285F4] p-[19px] rounded-[9px] w-full h-[57px]"
                type="text"
                id="email"
                placeholder="Enter your email address..."
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[16px]">
                Enter your password
              </label>
              <input
                className="border border-[#ADADAD] p-[19px] rounded-[9px] w-full h-[57px]"
                type="password"
                id="email"
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

            <div className="mb-6 text-[16px] -mt-2  text-gray-500">OR</div>
          </div>
        </form>
        <div className="w-full flex justify-between">
          <button className="cursor-pointer w-[298px] h-[55px] bg-[#FFF4E3] rounded-[9px] flex justify-center gap-3 items-center">
            <img src="/images/google.png" alt="Google" />
            Google
          </button>
          <button className="cursor-pointer w-[60px] h-[55px] bg-[#F6F6F6] flex items-center justify-center">
            <img src="/images/facebook.png" alt="facebook" />
          </button>
          <button className="cursor-pointer w-[60px] h-[55px] bg-[#F6F6F6] flex items-center justify-center">
            <img src="/images/apple.png" alt="Apple" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
