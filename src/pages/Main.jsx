import MainBanner from "../sections/MainBanner";
import NewProduct from "../sections/NewProduct";

export default function Main({ productData }) {
  return (
    <main>
      <MainBanner />
      <NewProduct />
    </main>
  );
}
