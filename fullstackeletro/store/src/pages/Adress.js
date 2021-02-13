import { lazy, Suspense } from "react";

const AdressCard = lazy(() => import("../components/AdressCard"));

function Adress() {
  return (
    <Suspense
      fallback={
        <h1
          className="display-4"
          style={{ marginTop: "50%", textAlign: "center", color: "#fff" }}
        >
          <strong>Carregando...</strong>
        </h1>
      }
    >
      <AdressCard />
    </Suspense>
  );
}

export default Adress;
