import Image from "next/image";

type CategoryItemProps = {
  title: string;
  imageUrl: string;
};

const CategoryItem = ({ title, imageUrl }: CategoryItemProps) => {
  return (
    <div>
      <Image src={imageUrl} alt="Category Image" width={100} height={100} />
      <h2>{title}</h2>
    </div>
  );
};

export default CategoryItem;
