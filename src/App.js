import React, { useState } from 'react';
import './App.css';
import OrderForm from './OrderForm';
import Carousel from './Carousel';
import './Carousel.css';
import photo1 from './Content/jqi.jpeg';
import photo2 from './Content/store_one.jpeg';
import photo3 from './Content/duckStore.jpeg';

function App() {
    const [showOrderForm, setShowOrderForm] = useState(false);

    const images = [
        photo1,
        photo2,
        photo3,
        photo2,
        photo1,
    ];

    const handleOrderClick = () => {
        setShowOrderForm(true);
    };

    const handleCarouselClick = () => {
        setShowOrderForm(false);
    };

    return (
        <div className="App" >
            
                <h1 className='JQIheader'>Just Quack It</h1>
                {!showOrderForm && (
                    <button className="Order-Button" onClick={handleOrderClick}>Order</button>
                )}
                {showOrderForm ? (
                    <>
                        <button className="Order-Button" onClick={handleCarouselClick}>Back to Carousel</button>
                        <OrderForm />
                    </>
                ) : (
                    <div className="carousel-container">
                        <Carousel images={images} interval={3000} /> 
                    </div>
                )}
            
        </div>
    );
}

export default App;