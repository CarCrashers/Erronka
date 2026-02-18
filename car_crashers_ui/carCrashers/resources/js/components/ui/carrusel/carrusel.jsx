function Carrusel({ produktua }) 
{
  const argazkiak = Array.isArray(produktua?.argazkiak) ? produktua.argazkiak : [];
  
  const urls = argazkiak
    .filter(p => p && typeof p === 'string' && p.trim() !== '')
    .map(p => {
      const cleanPath = String(p).replace(/^\/?storage\//i, '').trim();
      return `/storage/${cleanPath}`;
    });

  const finalUrls = urls.length > 0 ? urls : ['/images/placeholder.png'];

  const carouselId = 'produktuaCarousel';

  return (
    <div id={carouselId} className="carousel slide h-100" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {finalUrls.map((_, idx) => (
          <button
            key={idx}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={idx}
            className={idx === 0 ? 'active' : ''}
            aria-current={idx === 0 ? 'true' : undefined}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner rounded-4 h-100">
        {finalUrls.map((url, idx) => (
          <div
            key={idx}
            className={`carousel-item h-100 ${idx === 0 ? 'active' : ''}`}
          >
            <img
              src={url}
              className="d-block w-100 h-100 object-fit-cover"
              alt={`Argazkia ${idx + 1}`}
              onError={(e) => {
                e.target.src = '/images/placeholder.png';
              }}
            />
          </div>
        ))}
      </div>

      {finalUrls.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

export default Carrusel;
