import CompanyOverview from "./sections/CompanyOverview";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Testimonials from "./sections/Testimonials";

function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CompanyOverview />
      <Products />
      <Testimonials />
    </main>
  );
}

export default Home;
