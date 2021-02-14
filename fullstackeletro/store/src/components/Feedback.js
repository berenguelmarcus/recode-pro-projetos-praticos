import React from "react";

function Feedback() {
  const [feedback, setFeedback] = React.useState([]);

  React.useEffect(async () => {
    const url = "http://localhost:8080/feedback";
    const response = await fetch(url);
    setFeedback(await response.json());
  }, []);

  return (
    <div className="jumbotron bg-light">
      <h1 className="text-primary display-4">Comentários</h1>
      {feedback.map((element) => {
        return (
          <div className="bg-info border rounded mt-2">
            <div className="text-light p-3">
              <p className="mt-3 p-2">{element.email}</p>
              <p className="lead">{element.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feedback;
