import React, { useEffect } from 'react';

const KotxeakFotosModal = ({ show, onClose, kotxea }) => {
  const fotos = kotxea?.argazki_urls || [];
  const carouselId = 'kotxeaFotosCarousel';

  useEffect(() => {
    if (!show) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, onClose]);

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show" />

      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-modal="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                Argazkiak — {kotxea?.matrikula} ({kotxea?.marka} {kotxea?.modeloa})
              </h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              {fotos.length === 0 ? (
                <div className="text-center text-muted py-5">Ez dago argazkirik.</div>
              ) : (
                <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    {fotos.map((_, idx) => (
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

                  <div className="carousel-inner">
                    {fotos.map((url, idx) => (
                      <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                        <img
                          src={url}
                          className="d-block w-100"
                          alt={`Argazkia ${idx + 1}`}
                          style={{ maxHeight: '60vh', objectFit: 'contain', background: '#000' }}
                        />
                      </div>
                    ))}
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Itxi</button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default KotxeakFotosModal;
