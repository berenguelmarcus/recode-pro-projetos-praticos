// Styles
import css from "../styles/app.css";

function AsideBar() {
  return (
    <div className="list-categories mt-3">
      <div className="list-group">
        <p className="list-group-item list-group-item-action bg-info text-light">
          <strong>Categorias</strong>
        </p>
        <a href="#" className="list-group-item list-group-item-action">
          Todos (12){" "}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Geladeiras (3)
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Fogões (2){" "}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Micro-ondas (3)
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Lavadora de Roupas (2){" "}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Lavadora de Louças (2){" "}
        </a>
      </div>
    </div>
  );
}

export default AsideBar;
