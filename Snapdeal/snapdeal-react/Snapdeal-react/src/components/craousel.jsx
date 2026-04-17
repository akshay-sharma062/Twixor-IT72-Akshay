import { useState, useEffect } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200",
      title: "Big Fashion Sale",
    },
    {
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1200",
      title: "Women's Fashion Fiesta",
    },
    {
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",
      title: "Electronics Deals",
    },
    {
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200",
      title: "Home & Kitchen",
    },
  ];

  // ✅ AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  // ✅ MANUAL BUTTON FIX (loop ke sath)
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="carousel">
      <button className="carousel-btn left" onClick={prevSlide}>
        ❮
      </button>

      <div className="slides">
        <div className="slide">
          <img src={slides[index].image} alt="banner" width="50%" />
          <div className="slide-content">
            <h2>{slides[index].title}</h2>
            <a href="#" className="btn">SHOP NOW</a>
          </div>
        </div>
      </div>

      <button className="carousel-btn right" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
};

export default Carousel;