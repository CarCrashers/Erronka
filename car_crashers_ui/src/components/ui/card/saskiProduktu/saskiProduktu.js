

function Saskia() {
  return (
    <div className="p-3 rounded-4 border shadow-lg d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
        <div className="d-flex">
        <img src="" alt="imagen" className="me-3" />
        <div className="d-flex flex-column">
            <h5 className="mb-1">Nombre</h5>
            <p className="mb-1">Tipo</p>
            <p className="mb-0 text-danger">XX.XX $</p>
        </div>
        </div>
        <button className="btn btn-danger align-self-stretch align-self-sm-center">
        Eliminar
        </button>
    </div>
  );
}

export default Saskia;