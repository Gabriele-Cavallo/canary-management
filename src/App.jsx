import { Outlet } from "react-router-dom";

import Header from "./component/Header";
import CanaryContextProvider from "./store/canary";

function App() {
  return (
    <CanaryContextProvider>
      <>
        <Header />
        <main
          className="h-screen w-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url(/img/sfondo.avif)",
          }}
        >
          <Outlet />
        </main>
      </>
    </CanaryContextProvider>
  );
}

export default App;
