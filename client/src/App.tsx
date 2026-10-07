// Royal Swiss City 75 cinematic luxury editorial experience with a dark, image-first stage and restrained transitions.
import { useLocation } from "wouter";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import Enquire from "./pages/Enquire";
import TheCity from "./pages/TheCity";
import FAQ from "./pages/FAQ";
import FloatingContacts from "./components/FloatingContacts";

export default function App() {
  const [location] = useLocation();

  let page;

  if (location === "/developer") {
    page = <Developer />;
  } else if (location === "/enquire") {
    page = <Enquire />;
  } else if (location === "/the-city") {
    page = <TheCity />;
  } else if (location === "/faq") {
    page = <FAQ />;
  } else {
    page = <Home />;
  }

  return (
    <>
      {page}
      <FloatingContacts />
    </>
  );
}
