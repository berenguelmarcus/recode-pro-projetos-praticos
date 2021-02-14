import loc from "../img/loc_img/gps.png";

function AdressCard() {
  return (
    <div className="container mt-5 p-5 text-center text-light">
      <h1 className="display-4">Nossas lojas físicas</h1>
      <div class="row mt-5">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <img src={loc} style={{ width: 120 }}></img>
              <h5 class="card-title text-dark mt-3">São Paulo - SP</h5>
              <p class="card-text text-dark mt-4">
                Rua Augusta, 788, Bela Vista
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <img src={loc} style={{ width: 120 }}></img>
              <h5 class="card-title text-dark mt-3">Rio de Janeiro - RJ</h5>
              <p class="card-text text-dark mt-4">Av. Brasil, 789, Centro</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <img src={loc} style={{ width: 120 }}></img>
              <h5 class="card-title text-dark mt-3">Recife - PE</h5>
              <p class="card-text text-dark mt-4">
                Av. Boa Viagem, 780, Boa Viagem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdressCard;
