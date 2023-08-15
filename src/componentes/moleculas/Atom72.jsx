import { useState } from "react";
import image1 from '../../assets/img/ok1.jpeg';
import image2 from '../../assets/img/ok2.jpeg';
import image3 from '../../assets/img/ok3.jpeg';

function Atom72() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [image1, image2, image3];

    const handleImageChange = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        {images.map((image, index) => (
                            <li
                                key={index}
                                className={`list-group-item ${selectedImageIndex === index ? 'active' : ''}`}
                                onClick={() => handleImageChange(index)}
                            >
                                Imagen {index + 1}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-9">
                    <div className="text-center">
                        <img src={images[selectedImageIndex]} alt={`Imagen ${selectedImageIndex + 1}`} className="img-fluid" />
                    </div>
                    <p className="mt-3">Descripción o contenido relacionado a la imagen seleccionada.</p>
                </div>
            </div>
        </div>
    );
}

export default Atom72;