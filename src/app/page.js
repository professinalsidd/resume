import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./home/home";
import NavbarComp from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <NavbarComp />
      <HomePage />
    </div>
  );
}
