import { useState } from "react";
import { Link, useNavigate } from "react-router";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // setIsLoading(true);
    // const response = await fetch(
    //   `https://healthyrange-us.backendless.app/api/data/user?where=email%3D'anom@gmail.com'AND%20password%3D'pasword123`
    // );
    // const data = await response.json();
    const navigate = useNavigate();
    navigate("/");
  }

  return (
    <div
      style={{
        backgroundImage: "url('/images/hero-bakery.jpg')",
      }}
      className="bg-[#ECBC76] h-175 flex items-center justify-center min-h-lvh"
    >
      <div className="flex flex-col  items-center justify-center justify-between bg-white w-134.75 h-185.25 rounded-4xl px-[44px] drop-shadow-2xl">
        <div className="w-full min-h-[30%]  flex justify-between items-center">
          <div className="flex justify-between w-full ">
            <div className="flex flex-col text-[20px]">
              <p>Welcome to Lorem</p>
              <h1 className="text-[55px] font-medium">Sign Up</h1>
            </div>
            <div className="flex flex-col justify-start h-full">
              <Link to="/signup" className="text-[13px] text-[#8D8D8D]">
                Have an Account ?
              </Link>
              <Link to="/signup" className="text-[13px] text-[#B87514]">
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
              <Link
                to={"/signup"}
                className="text-[13px] text-[#AD3113]"
              ></Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-[33px]">
          <Link
            to={"/login"}
            className="flex mt-2 justify-center items-center cursor-pointer w-full h-[54px] bg-[#E48700] rounded-[10px]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
