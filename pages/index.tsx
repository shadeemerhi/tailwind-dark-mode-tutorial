import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import useColorMode from "../hooks/useColorMode";

export default function Home() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="h-screen w-screen p-6 bg-white dark:bg-black">
      <button
        className="dark:text-white text-black bg-sky-500 dark:bg-green-500"
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      >
        TOGGLE THEME
      </button>
    </div>
  );
}
