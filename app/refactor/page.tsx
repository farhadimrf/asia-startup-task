"use client";
import { Button, TextInput } from "@/components/ui";
import Select, { Items } from "@/components/ui/inputs/select";
import { useEffect, useState } from "react";

type Product = {
   id: number;
   title: string;
   archived: boolean;
};

const ProductPage = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [inputValue, setInputValue] = useState<string>("");
   const [filter, setFilter] = useState<string>("all");

   useEffect(() => {
      // initial data when the component mounts
      fetchProducts();
   }, []);

   // fetch products from an API endpoint
   const fetchProducts = async () => {
      try {
         const response = await fetch("https://example.com/products");
         if (!response.ok) {
            throw new Error("Failed to fetch products");
         }
         const data = await response.json();

         setProducts(data);
      } catch (error) {
         //mock data from api endpoint
         const data = [
            {
               id: 1,
               title: "fake data",
               archived: true,
            },
            {
               id: 2,
               title: "fake data 2",
               archived: false,
            },
         ];
         setProducts(data);
         console.error(error);
      }
   };

   // add a new product to the list
   const addProduct = () => {
      //NOTE: we can handle empty input with validator
      if (!inputValue) return;

      const newProduct: Product = {
         id: Date.now(),
         title: inputValue,
         archived: false,
      };
      setProducts([...products, newProduct]);
      setInputValue("");
   };

   // toggle the archived status of a product
   const toggleProductArchived = (id: number) => {
      const updatedProducts = products.map((product) =>
         product.id === id ? { ...product, archived: !product.archived } : product
      );
      setProducts(updatedProducts);
   };

   // remove a product from the list
   const removeProduct = (id: number) => {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
   };

   // filter products based on the selected filter
   const filteredProducts = () => {
      switch (filter) {
         case "archived":
            return products.filter((product) => product.archived);
         case "active":
            return products.filter((product) => !product.archived);
         default:
            return products;
      }
   };

   const filterItems: Items[] = [
      { label: "All", value: "all" },
      { label: "archived", value: "archived" },
      { label: "Active", value: "active" },
   ];

   return (
      <div className="flex flex-col p-8">
         <div className="flex">
            <TextInput
               className="text-left"
               placeholder="title"
               invalid={false}
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
            />
            <Button label="Add Product" onClick={addProduct} />
         </div>
         <br />
         <Select
            className="text-left max-w-[280px]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            invalid={false}
            items={filterItems}
         />
         <br />
         <ul>
            {filteredProducts().map((product) => (
               <li className="flex items-center gap-2" key={product.id}>
                  <p>{product.title}</p>
                  <Button
                     className="text-red-500"
                     label="Delete"
                     onClick={() => removeProduct(product.id)}
                  />
                  <Button
                     className="text-indigo-500"
                     label={product.archived ? "Unarchive" : "Archive"}
                     onClick={() => toggleProductArchived(product.id)}
                  />
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ProductPage;
