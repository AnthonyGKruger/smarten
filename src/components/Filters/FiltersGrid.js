import productData from "./filters-data.json";
import ProductCard from "./ProductCard";

const FiltersGrid = () => {
  console.log(productData);
  const filterCards = productData.map((product, idx) => {
    return (
      <ProductCard
        key={idx}
        name={product.name}
        author={product.author}
        avatar={product.avatar}
        image={product.image}
        publisher={product.publisher}
      />
    );
  });

  return (
    <section className={"py-10"}>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 gap-y-8 md:grid-cols-8 lg:grid-cols-12">
          {filterCards}
        </div>
      </div>
      <div
        className={
          "absolute rounded-full bg-[#DD00B8] w-[521px] h-[521px] blur-[446.1348876953125px] sm:visible invisible -left-[250px] top-[4000px] z-10"
        }
      ></div>
    </section>
  );
};

export default FiltersGrid;
