import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/navbar/Navbar";
import SideBar from "@/components/sidebar/SideBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Featured />
      <CategoryList />
      <div className="">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
