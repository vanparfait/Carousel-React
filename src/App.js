//Unsplash pour les images

import Carousel from "./carousel/Carousel";

function App() {
  const slides = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
  ];

  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-inner">
          <Carousel slides={slides} />
        </div>
      </div>
    </div>
  );
}

export default App;
