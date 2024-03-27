import Jeproady from "./components/Jeproady/Jeproady.svelte";
import Questions from "./components/Jeproady/questions/questions.svelte";
import Home from "./components/home.svelte";
import Profile from "./components/profile.svelte";
export const routes = {
  "/home": Home,
  "/profile": Profile,
  "/Jeproady": Jeproady,
  "/questions":Questions,
  "/questions/*":Questions

};
