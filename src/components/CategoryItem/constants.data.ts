export const additionalStyles = {
  Rosetten: "Rosetten",
  Gesimse: "Gesimse",
  Friesen: "Friesen",
} as const;
export const hasAdditionalStyle = (name: string) => {
  return name in additionalStyles
    ? additionalStyles[name as keyof typeof additionalStyles]
    : false;
};
