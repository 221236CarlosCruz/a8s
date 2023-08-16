import { useState } from 'react';
import '../../assets/styles/Atom6.css'

import Corousel1 from '../../assets/img/ok1.jpg';
import Corousel2 from '../../assets/img/ok2.jpg';
import Corousel3 from '../../assets/img/ok3.jpg';
import Corousel4 from '../../assets/img/fondo.jpg';
import Corousel5 from '../../assets/img/imga3.png';

function Atom6() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [Corousel1, Corousel2, Corousel3, Corousel4, Corousel5];
    const visibleImages = images.slice(currentIndex, currentIndex + 3);

    const goToPreviousSlide = () => {
        setCurrentIndex(Math.max(currentIndex - 1, 0));
    };

    const goToNextSlide = () => {
        setCurrentIndex(Math.min(currentIndex + 1, images.length - 3));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="image-carousel">
                        <div className="carousel-images">
                            {visibleImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="carousel-slide"
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                            ))}
                        </div>
                        <button className="carousel-prev" onClick={goToPreviousSlide}>
                            {'<'}
                        </button>
                        <button className="carousel-next" onClick={goToNextSlide}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atom6;