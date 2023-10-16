import productData from "./filters-data.json";
import ProductCard from "./ProductCard";
import RadialBlurEffect from "../ui/RadialBlurEffect";

const FiltersGrid = () => {
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
      <RadialBlurEffect
        blur={"blur-[27.883em]"}
        height={"h-[32.563em]"}
        horizontalOffSet={"-left-[15.625em]"}
        verticalOffSet={"top-[250em]"}
        zIndex={"z-10"}
        width={"w-[32.563em]"}
      />
    </section>
  );
};

export default FiltersGrid;
