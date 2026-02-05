function Search({text, status, maxPrice, minPrice, onTextChange, onStatusChange, onMaxPriceChange, onMinPriceChange}) {

  return (
    <div className="row justify-content-center">
      <div className="col-xxl-12 col-xl-11 col-lg-10 col-md-10 col-sm-10 col-10">
        <div className="border rounded-5 py-3 px-3 px-md-4 shadow-lg bg-white">
          <div className="row g-3 align-items-center">

            {/* Buscador */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="input-group input-group-sm">
                <span className="input-group-text bg-transparent border-end-0">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Bilatu..."
                  value={text}
                  onChange={onTextChange}
                />
              </div>
            </div>

            {/* Estado */}
            <div className="col-12 col-md-6 col-lg-3">
              <select 
                className="form-select form-select-sm"
                value={status}
                onChange={onStatusChange}
              >
                <option value="">Egoera</option>
                <option value="salgai">Salgai</option>
                <option value="konpontzeko">Konpontzeko</option>
              </select>
            </div>

            {/* Rango de precio */}
            <div className="col-12 col-lg-4">
              <div className="input-group input-group-sm">
                <span className="input-group-text">€</span>
                <input
                  type="number"
                  name="min"
                  className="form-control"
                  placeholder="Min"
                  min="0"
                  value={minPrice}
                  onChange={onMinPriceChange}
                />
                <span className="input-group-text">-</span>
                <input
                  type="number"
                  name="max"
                  className="form-control"
                  placeholder="Max"
                  min="0"
                  value={maxPrice}
                  onChange={onMaxPriceChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
