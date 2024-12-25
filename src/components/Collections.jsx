import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import SectionHeadline from "./SectionHeadline";
import SkeletonCard from "./SkeletonCard";
import ProductCard from "./ProductCard";

const Collections = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const items = useSelector((state) => state.items.data);
  const isLoading = useSelector((state) => state.document.isLoading);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SectionHeadline text="Explore Our Products" />
      <div className="mt-3 justify-center flex pt-20">
        <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      </div>
      <section className="mt-20 max-sm:mt-16 container mx-auto itemsGrid itemsSection">
        {isLoading ? (
          <SkeletonCard count={16} />
        ) : (
          <>
            {filteredItems.map((e) => (
              <ProductCard element={e} key={e.id} />
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default Collections;
