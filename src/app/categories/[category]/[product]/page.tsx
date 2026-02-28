import { getProductById } from "@/lib/products";
import styles from "./styles.module.scss";
import ProductInfo from "@/components/ProductInfo";
import Link from "next/link";
import { PAGES } from "@/config/pages.config";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const resolvedParams = await params;

  const productSlug = resolvedParams.product;
  const productId = Number(productSlug.split("-").pop());

  const product = await getProductById(productId);

  const title = `${product.name} – Stuckwerkstatt Voitenko`;
  const description =
    product.description ??
    `Hochwertiges Produkt aus der Kategorie ${product.category.name}`;

  const url = `${process.env.BASE_URL}/categories/${resolvedParams.category}/${resolvedParams.product}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Stuckwerkstatt Voitenko",
      images: product.images?.length
        ? product.images.map((img: string) => ({
            url: img,
            width: 1200,
            height: 630,
            alt: product.name,
          }))
        : [
            {
              url: `${process.env.BASE_URL}/og-logo.png`,
              width: 1200,
              height: 630,
              alt: "Stuckwerkstatt Voitenko",
            },
          ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.images?.[0]
        ? [product.images[0]]
        : [`${process.env.BASE_URL}/og-logo.png`],
    },
  };
}
export default async function Product({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const resolvedParams = await params;
  const productId = await Number(resolvedParams.product.split("-").pop());
  const product = await getProductById(productId);
  return (
    <main className={styles.container}>
      <nav
        className={styles.breadcrumbs}
        aria-label="Breadcrumb"
        role="navigation"
      >
        <Link href={PAGES.CATEGORIES}>Zurück zur Kategorie</Link> /{" "}
        <Link
          href={`${PAGES.CATEGORIES}/${product.category.name.toLowerCase()}`}
        >
          {` ${product.category.name}`}
        </Link>{" "}
        /
        <Link
          className={styles.currentBreadcrumb}
          href={`${PAGES.CATEGORIES}/${product.category.name.toLowerCase()}/${product.name.toLowerCase()}-${product.id}`}
        >
          {" "}
          {product.name}
        </Link>
      </nav>
      <ProductInfo product={product} />
    </main>
  );
}
