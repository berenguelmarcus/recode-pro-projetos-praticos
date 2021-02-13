// Componentes

import { lazy, Suspense } from "react";

const Main = lazy(() => import("../components/Main"));

function App() {
  return (
    <Suspense
      fallback={
        <h1
          className="display-4 m-auto"
          style={{ textAlign: "center", color: "#fff" }}
        >
          Carregando...
        </h1>
      }
    >
      <Main />
    </Suspense>
  );
}

export default App;
