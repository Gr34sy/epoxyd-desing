"use client";

// components
import { Grid } from "@/components/Grid/Grid";
import { ProductCard } from "@/components/ProductCard/ProductCard";

// hooks
import { useState, useEffect } from "react";
import { Checkbox } from "../CustomCheckbox/CustomCheckbox";
import { Select } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
export default function ProductsClient({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  const [sortOrder, setSortOrder] = useState("newest");
  const [premiumFilter, setPremiumFilter] = useState(false);

  function filterHandler() {
    console.log(`action: ${sortOrder} - ${premiumFilter}`);
  }

  return (
    <div className="products__container">
      <div className="search-params">
        <Checkbox
          action={(value) => setPremiumFilter(value)}
          name="premium-filter"
          label="Pokaż tylko produkty premium"
          initialState={premiumFilter}
        />

        <Select action={(value) => setSortOrder(value)} />
      </div>

      <div>
        <Button action={filterHandler}>Zastosuj filtr</Button>
      </div>

      <Grid>
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id.toString()}
              id={product._id.toString()}
              title={product.name}
              price={product.price}
              img={product.imageUrl}
              isPremium={product.premium ? product.premium : false}
            />
          );
        })}
      </Grid>
    </div>
  );
}
