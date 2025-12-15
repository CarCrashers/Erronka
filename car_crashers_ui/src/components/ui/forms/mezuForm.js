const MezuForm = ({ onReset }) => {
  return (
    <div className="border-0 shadow-sm p-5 text-center">
        <div className="mb-4">
            <div className="success-icon-container">✓</div>
        </div>
        <h2 className="mb-3 fw-bold">Eskaera Bidalia!</h2>
        <p className="text-muted mb-4">Zure eskaera jaso dugu. Gure taldeak ebaluatuko du eta 24-48 orduko epean zurekin harremanetan jarriko gara eskaintza batekin.</p>
        <button onClick={onReset} className="btn btn-orange px-4 py-2">Bidali beste eskaera bat</button>
    </div>
    );
};

export default MezuForm;