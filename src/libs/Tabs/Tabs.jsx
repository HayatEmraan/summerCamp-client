import React from "react";
import { categories } from "../../../public/categories";
import TabsData from "./TabsData";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

const Tabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleCategory = (category) => {
    let queryParams = {};
    if (searchParams) {
      queryParams = queryString.parse(searchParams.toString());
    }
    const createQuery = {
      ...queryParams,
      category: category,
    };
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: createQuery,
      },
      { skipNull: true }
    );
    navigate(url);
  };
  const category = categories;
  return (
    <div className="container mx-auto my-12">
      <div className="mx-3">
        <div>
          <h2 className="font-bold text-3xl">A broad selection of courses</h2>
          <p>
            Choose from over 210,000 online video courses with new additions
            published every month
          </p>
        </div>
      </div>
      <div className="flex gap-4 mx-3 mt-6">
        {category.map((category, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => handleCategory(category.label)}
            >
              <h2 className="font-semibold text-xl mb-4 font-cinzel">
                {category.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <TabsData></TabsData>
      </div>
    </div>
  );
};

export default Tabs;
