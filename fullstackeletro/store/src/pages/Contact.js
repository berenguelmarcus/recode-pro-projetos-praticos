import ContactForm from "../components/ContactForm";

import { lazy, Suspense } from "react";

const Feedback = lazy(() => import("../components/Feedback"));

function Contact() {
  return (
    <div>
      <ContactForm />,
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
        <Feedback />
      </Suspense>
    </div>
  );
}

export default Contact;
