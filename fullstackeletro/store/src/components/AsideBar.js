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
          Prancha (3)
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Funboard (2){" "}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Leash (3)
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Parafina (2){" "}
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Deck (2){" "}
        </a>
      </div>
    </div>
  );
}

export default AsideBar;
