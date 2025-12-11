import React, { useCallback, useEffect, useState } from "react";
import './priceSelector.css'

function MultiRangeSlider({ min, max, step = 10, onChange }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  // porcentaje para pintar la barra activa
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // notificar cambios al padre
  useEffect(() => {
    if (onChange) {
      onChange({ min: minVal, max: maxVal });
    }
  }, [minVal, maxVal, onChange]);

  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxVal);

  return (
    <div className="position-relative w-100">
      {/* Barra de fondo */}
      <div className="multi-range-track bg-light"></div>

      {/* Barra activa entre min y max */}
      <div
        className="multi-range-range bg-primary"
        style={{
          left: `${minPercent}%`,
          right: `${100 - maxPercent}%`,
        }}
      ></div>

      {/* Thumb mínimo */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={(e) =>
          setMinVal(Math.min(Number(e.target.value), maxVal - step))
        }
        className="form-range multi-range-input multi-range-input-min"
      />

      {/* Thumb máximo */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={(e) =>
          setMaxVal(Math.max(Number(e.target.value), minVal + step))
        }
        className="form-range multi-range-input multi-range-input-max"
      />
    </div>
  );
}

export default MultiRangeSlider;