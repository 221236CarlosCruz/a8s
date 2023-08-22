import IconoPoots from "../../assets/img/IconoPoots.png";
import LogoPootsBlanco from "../../assets/img/pootsBlanco.png";
import "../../assets/styles/PortadaBienvenidos.css";

function PortadaBienvenidos() {
  return (
    /*     <div className="background-image-container">
          <div className="overlay">
            <img src={LogoPootsBlanco} />
            <button className="btn-bienvenidos">
              <img src={IconoPoots} />
              explorar
            </button>
          </div>
        </div> */

    <div className="background-image-container">
      <div className="overlay">
        <img className="logo" src={LogoPootsBlanco} alt="Logo Poots" />
        <button className="btn-bienvenidos">
          <img src={IconoPoots} alt="Icono Poots" />
          explorar
        </button>
      </div>
    </div>

  );
}
export default PortadaBienvenidos;