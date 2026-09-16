// Style reminder: replicate Sobha's cinematic luxury editorial experience with a dark, image-first stage and restrained transitions.
import { useLocation } from "wouter";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import Projects from "./pages/Projects";
import Enquire from "./pages/Enquire";
import TheCity from "./pages/TheCity";

export default function App() {
  const [location] = useLocation();

  if (location === "/projects") {
    return <Projects />;
  }

  if (location === "/developer") {
    return <Developer />;
  }

  if (location === "/enquire") {
    return <Enquire />;
  }

  if (location === "/the-city") {
    return <TheCity />;
  }

  return <Home />;
}
