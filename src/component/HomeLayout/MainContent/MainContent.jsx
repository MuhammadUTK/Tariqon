import React, {useState, useEffect, useCallback} from 'react'
import Card from "../Card/Card.jsx";
import envImport from "../../../configurations/envImport.js"
import "./MainContent.css"

function MainContent() {

    const images = import.meta.glob('./images/*.png');
    const numberOfCards = Object.keys(images);
    const [imagePaths, setImagePaths] = useState([]);

    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem("currentPage");
        return savedPage ? parseInt(savedPage, 10) : 1;
    });
    const cardsPerPage = 24;
    const totalPages = Math.ceil((numberOfCards.length) / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = numberOfCards.slice(startIndex, endIndex);

    console.log(envImport.appwriteUrl, envImport.appwriteBucketId, envImport.appwriteProjectId);

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

    useEffect(() => {
        // Save the current page to localStorage whenever it changes
        localStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

    // console.log( "image paths", imagePaths)

    return (
        <div className="main">
            <div className="main-title">
                <h1>My Main Content</h1>
            </div>
            <div className="main-content">
                {currentCards.map((_, index) => (
                    <div className="main-content-card" key={startIndex + index}>
                        <Card title="Running Shoes" path={imagePaths[startIndex + index]} type="New Arrival"/>
                    </div>
                ))}
            </div>

            <div className="main-content-pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MainContent