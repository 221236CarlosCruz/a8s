import ImagenA4 from '../../assets/img/imga3.png'
import '../../assets/styles/atom4.css'

function Atom4() {
    return (
        <div className="text-image-container">
            <div className="image-content">
                <img src={ImagenA4}/>
            </div>
            <div className="text-content">
                <h2>Título del Texto</h2>
                <p>Descripción detallada del contenido.</p>
            </div>
        </div>
    );
}

export default Atom4;