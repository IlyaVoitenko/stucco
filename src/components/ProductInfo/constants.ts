export const translateToGerman = (key: string): string => {
  const translations: { [key: string]: string } = {
    piece: "Stück",
    meter: "Meter",
  };
  return translations[key] || key;
};
export function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export const exceptionsForCategory = [
  "Kapitell des Pilasters",
  "Basis des Pilasters",
];
