import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { Title } from "@/components/text";
import { getCategories } from "@/sanity/queries";
import React from "react";

const CategoriesPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-shadow-pink-400 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
      </Container>
      <CategoryProducts categories={categories} slug={slug}/>
    </div>
  );
};

export default CategoriesPage;
