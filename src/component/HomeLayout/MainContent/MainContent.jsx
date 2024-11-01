import React, {useState, useEffect} from 'react'
import Card from "../Card/Card.jsx";
import "./MainContent.css"

function MainContent() {

    const images = import.meta.glob('./images/*.png');
    const numberOfCards = Object.keys(images);
    const [imagePaths, setImagePaths] = useState([]);

    useEffect(() => {

        // Load all images dynamically
        const loadImages = async () => {
            const paths = await Promise.all(
                Object.values(images).map(retry => {
                    return retry().then(module => {
                        return module.default; // Return the default export (the image path)
                    });
                })
            );
            setImagePaths(() => paths);
        };

        loadImages();
    }, []);

    console.log( "image paths", imagePaths)

    return (
        <div className="main">
            <div className="main-title">
                <h1>My Main Content</h1>
            </div>
            <div className="main-content">
                {numberOfCards.map((card, index) => (
                    <div className="main-content-card" key={index}>
                        <Card title="Running Shoes" path={imagePaths[index]} type="New Arrival" />
                    </div>
                ))}
                {/*<Card title="Running Shoes" path={imagePaths[1]} type="New Arrival" />*/}
            </div>
        </div>
    )
}

export default MainContent