import React, { useState } from "react";
import PriceSelector from "../priceSelector/priceSelector.js"; // si lo sigues usando

function Search() {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-8 d-flex flex-wrap justify-content-center border rounded-5 py-2 shadow-lg">

        {/* Buscador texto */}
        <div className="col-10 xl-col-6 col-md-4 d-flex align-items-center mb-3 mb-md-0 me-md-4 pe-md-3 border rounded-3 shadow-sm">
          <i className="bi bi-search px-2"></i>
          <input
            className="form-control-plaintext ms-2"
            placeholder="Buscar..."
          />
        </div>

        {/* Estado */}
        <div className="col-10 xl-col-6 col-md-3 d-flex justify-content-between align-items-center mb-3 mb-md-0 mx-md-3 px-md-3 border rounded-3 shadow-sm">
          <select className="form-control-plaintext ms-2">
            <option defaultValue>Estado</option>
            <option>Estado 1</option>
            <option>Estado 2</option>
            <option>Estado 3</option>
          </select>
        </div>

        {/* Rango de precio */}
        <div className="col-10 xl-col-6 col-md-4 d-flex flex-column justify-content-center mx-md-3 px-md-3 border rounded-3 shadow-sm">
          <label className="form-label mb-1">
            Precio: €{priceRange.min} - €{priceRange.max}
          </label>

          <PriceSelector
            min={0}
            max={1000}
            step={10}
            onChange={(values) => setPriceRange(values)}
          />
        </div>
      </div>
    </div>

  );
}

export default Search;
