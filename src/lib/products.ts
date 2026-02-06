export const getProductById = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}products/${id}`,
  );

  if (!res.ok) throw new Error("Product not found");

  return res.json();
};
