import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export default function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined) throw new Error("Using context outside of scope.");
  return context;
}
