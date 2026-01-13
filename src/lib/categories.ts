export const getCategories = async () => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}categories`,
      {
        cache: "no-store",
      }
    );
    return data.json();
  } catch {
    throw new Error("Failed to fetch categories");
  }
};
