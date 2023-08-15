import { useState } from "react";
import image1 from '../../assets/img/ok1.jpg';
import image2 from '../../assets/img/ok2.jpg';
import image3 from '../../assets/img/ok3.jpg';
import image4 from '../../assets/img/ok3.jpg';
import image5 from '../../assets/img/ok1.jpg';
import image6 from '../../assets/img/ok2.jpg';
import image7 from '../../assets/img/ok3.jpg';
import image8 from '../../assets/img/ok3.jpg';

function Atom72() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const images = [image1, image2, image3, image4, image5, image6, image7, image8];

    const handleImageChange = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 position-relative">
                    <div className="d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100">
                        <ul className="list-group">
                            {images.map((image, index) => (
                                <li
                                    key={index}
                                    className={`list-group-item ${selectedImageIndex === index ? 'active' : ''} bg-transparent border-0 p-0`}
                                    onClick={() => handleImageChange(index)}
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: selectedImageIndex === index ? '#F29200' : '#3D2500',
                                        color: selectedImageIndex === index ? '#F29200' : '#3D2500',
                                        fontSize: selectedImageIndex === index ? '35px' : '35px' // Cambia los tamaños de fuente aquí
                                    }}
                                >
                                    Imagen {index + 1}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="text-center">
                        <img src={images[selectedImageIndex]} alt={`Imagen ${selectedImageIndex + 1}`} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atom72;