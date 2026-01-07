import { useState } from "react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch(
      `https://healthyrange-us.backendless.app/api/data/user?where=email%3D'anom@gmail.com'AND%20password%3D'pasword123`
    );

    const data = await response.json();
  }

  return (
    <div className="bg-amber-50 h-175 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1>Login</h1>

        <form action="" className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="border border-black" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-black"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
