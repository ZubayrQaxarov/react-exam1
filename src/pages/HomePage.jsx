import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import Product from "../components/Product/Product";
import Category from "../components/Category/Category";
import NewArrivalsBanner from "../components/NewArrivalsBanner/NewArrivalsBanner";
import BlogSection from "../components/BlogSection/BlogSection";
import TopSellers from "../components/TopSellers/TopSellers";

const HomePage = ({ data }) => {
  const { hero, strip, flashSale, categories, newArrivals, topSellers, blog } =
    data;

  return (
    <div className="home">
      <Hero
        mini={hero.mini}
        titleLines={hero.titleLines}
        desc={hero.desc}
        bullets={hero.bullets}
        buttons={hero.buttons}
        bg={hero.bg}
      />

      <Feature items={strip} />

      <Product title={flashSale.title} items={flashSale.items} cols={3} />
      <Category title={categories.title} cards={categories.cards} />

      <NewArrivalsBanner />

      <Product title={newArrivals.title} items={newArrivals.items} cols={4} />
      <TopSellers data={topSellers.items} />
      <BlogSection title={blog.title} posts={blog.posts} />
    </div>
  );
};

export default HomePage;
