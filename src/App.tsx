import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "@/routes";
import KeepAliveLayout from "./KeepAlive";

const RouterCom = () => {
  const elements = useRoutes(routes);
  return elements;
};

const App = () => {
  return (
    <KeepAliveLayout keepalive={["/home", "/detail"]}>
      <BrowserRouter>
        <RouterCom />
      </BrowserRouter>
    </KeepAliveLayout>
  );
};

export default App;
