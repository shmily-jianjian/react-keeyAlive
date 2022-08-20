import { useKeepOutlets } from "@/KeepAlive";

export default function index() {
  const element = useKeepOutlets();
  return element;
}
