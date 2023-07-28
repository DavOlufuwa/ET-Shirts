import ShirtContext, { useShirtsContextType } from "@/contexts/ShirtProvider";
import { useContext } from "react";

const useShirts = (): useShirtsContextType => useContext(ShirtContext);

export default useShirts;