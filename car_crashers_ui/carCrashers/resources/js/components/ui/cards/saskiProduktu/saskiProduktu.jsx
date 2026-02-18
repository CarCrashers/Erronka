function SaskiProduktu({ item, onEzabatu }) {
  const p = item.produktua;
  
  let izena = p.deskribapena || 'Produktua';
  let mota = '';
  
  if (p.kotxea) {
    izena = `${p.kotxea.marka} ${p.kotxea.modeloa}`;
    mota = `Mat.: ${p.kotxea.matrikula}`;
  } 
  else if (p.pieza) 
    {
    izena = p.pieza.zatia;
    mota = p.pieza.zatia;
  }

  return (
    <div className="p-2 p-md-3 rounded-3 border shadow-sm d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 gap-md-3">
      <div className="d-flex flex-grow-1 w-100">
        <img 
          src={p.argazkia || '/placeholder-car.jpg'} 
          alt={izena}
          className="me-2 me-md-3 rounded shadow-sm"
          style={{width: '70px', height: '70px', minWidth: '70px', objectFit: 'cover'}}
        />
        <div className="d-flex flex-column flex-grow-1 min-w-0">
          <h6 className="mb-1 small text-truncate">{izena}</h6>
          <p className="mb-1 text-muted small text-truncate">{mota}</p>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span className="badge bg-light text-dark px-2 py-1 small">
              x{item.kopurua}
            </span>
            <p className="mb-0 text-danger small fw-bold">{item.prezioa_unit} €</p>
          </div>
        </div>
      </div>
      
      <button 
        className="btn btn-danger btn-sm align-self-start align-self-sm-center px-2" 
        onClick={onEzabatu}
      >
        <i className="bi bi-trash me-1"></i>
        <span className="d-none d-sm-inline">Ezabatu</span>
      </button>
    </div>
  );
}

export default SaskiProduktu;
