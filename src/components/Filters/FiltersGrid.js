import productData from "./filters-data.json";
import ProductCard from "./ProductCard";

const FiltersGrid = () => {
  console.log(productData);
  const filterCards = productData.map((product) => {
    return (
      <ProductCard
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
    </section>
  );
};

export default FiltersGrid;
