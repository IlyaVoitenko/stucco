export const getCategories = async () => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}categories`,
    );
    if (!data.ok) {
      throw new Error(`Upstream error: ${data.status} ${data.statusText}`);
    }
    return data.json();
  } catch (err) {
    throw new Error("Failed to fetch categories: " + (err as Error).message);
  }
};
export const getCategoryById = async (id: number) => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}products/all/${id}`,
    );
    if (!data.ok) {
      throw new Error(`Upstream error: ${data.status} ${data.statusText}`);
    }
    return data.json();
  } catch (err) {
    throw new Error(
      "Failed to fetch category by ID: " + (err as Error).message,
    );
  }
};
