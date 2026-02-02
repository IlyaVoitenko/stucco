import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CategoriesStore {
  selectedCategoryId: number | null;
  selectedCategory: string | null;
  setSelectedCategory: (category: { id: number; name: string } | null) => void;
}

export const useCategoriesStore = create<CategoriesStore>()(
  persist(
    (set) => ({
      selectedCategoryId: null,
      selectedCategory: null,
      setSelectedCategory: (category) =>
        set({
          selectedCategoryId: category?.id || null,
          selectedCategory: category?.name || null,
        }),
    }),
    {
      name: "categories-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
