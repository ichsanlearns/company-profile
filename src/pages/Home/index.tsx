import CompanyOverview from "./sections/CompanyOverview";
import Hero from "./sections/Hero";
import Products from "./sections/Products";

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CompanyOverview />
      <Products />
    </main>
  );
}

export default Home;
