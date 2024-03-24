import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoryData = async () => {
      const response = await fetch("./categories.json");
      const data = await response.json();
      setCategories(data);
    };
    categoryData();
  }, []);
  return (
    <>
      <SectionTitle
        sectionTitle="Job Category List"
        sectionDescription="Explore thousands of job opportunities with all the information you
        need. Its your future"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};
export default Categories;
