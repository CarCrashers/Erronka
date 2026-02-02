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
    <div className="p-3 rounded-4 border shadow-lg d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
      <div className="d-flex flex-grow-1">
        <img 
          src={p.argazkia || '/placeholder-car.jpg'} 
          alt={izena}
          className="me-3 rounded shadow-sm"
          style={{width: '90px', height: '90px', objectFit: 'cover'}}
        />
        <div className="d-flex flex-column flex-grow-1">
          <h5 className="mb-1">{izena}</h5>
          <p className="mb-1 text-muted">{mota}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-light text-dark px-2 py-1">
              x{item.kopurua}
            </span>
            <p className="mb-0 text-danger fs-5">{item.prezioa_unit} €</p>
          </div>
        </div>
      </div>
      
      <button 
        className="btn btn-danger align-self-stretch align-self-sm-center px-3" 
        onClick={onEzabatu}
      >
        <i className="fas fa-trash me-1"></i>
        Ezabatu
      </button>
    </div>
  );
}

export default SaskiProduktu;
