import React from 'react';
import Input from '../desguazatu/input.js';

const KontaktuForm = ({ formData, handleChange }) => {
  return (
    <div className="form-section">
      <h3 className="section-title">Kontaktu Datuak</h3>
      <div className="fields-grid-2"> {/* Asumimos una clase CSS para grid de 2 columnas */}
        <Input label="Izena osoa" name="izenOsoa" value={formData.izenOsoa} onChange={handleChange} required/>
        <Input label="Emaila" name="emaila" type="emaila" value={formData.email} onChange={handleChange} required placeholder="juan@adibidea.com"/>
      </div>
        <Input label="Telefonoa" name="telefonoa" type="tel" value={formData.telefono} onChange={handleChange} required placeholder="+34 600 000 000"/>
    </div>
  );
};

export default KontaktuForm;