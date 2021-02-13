import React from "react";

const ShowCase = () => {
  const [showcase, setShowCase] = React.useState([]);

  React.useEffect(async () => {
    const url = "http://localhost:8080/product";
    const response = await fetch(url);
    setShowCase(await response.json());
  }, []);

  return (
    <div className="showcase my-3 text-center">
      {showcase.map((element) => {
        return (
          <div className="box-product mx-4 pt-4">
            <div className="card" key={element.product_id}>
              <img
                id="productImg"
                className="img-box rounded mx-auto d-block p-2"
                src={'./', element.product_img}
              />
              <div className="card-body">
                <p className="card-text">{element.product_name}</p>
                <p className="card-text text-success">
                  <b>R$ {element.product_promotion_price}</b>
                </p>
                <p className="card-text text-danger">
                  <del>R$ {element.product_price}</del>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCase;
