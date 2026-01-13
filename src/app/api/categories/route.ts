export const getCategories = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}categories`, {
    method: "GET",
  });
  if (!data.ok) throw new Error("Failed to fetch categories");
  return data.json();
};
