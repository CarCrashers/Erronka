import React from 'react';
import Input from '../desguazatu/input.js';
import Select from '../desguazatu/select.js';
import Textarea from '../desguazatu/textarea.js';

const vehicleStates = [
    { value: 'bikaina', label: 'Bikaina' },
    { value: 'ona', label: 'Ona' },
    { value: 'matxuratuta', label: 'Matxuratuta' },
    { value: 'erabat hondatuta', label: 'Erabat hondatuta' },
];

const KotxeForm = ({ formData, handleChange, handleCheckboxChange }) => {
  return (
    <div className="form-section">
      <h3 className="section-title">Kotxearen datuak</h3>
      
      <div className="fields-grid-3">
        <Input label="Marka" name="marca" value={formData.marca} onChange={handleChange} required placeholder="Adib: Seat"/>
        <Input label="Modeloa" name="modelo" value={formData.modelo} onChange={handleChange} required placeholder="Adib: Ibiza"/>
        <Input label="Urtea" name="ano" type="number" value={formData.ano} onChange={handleChange} required placeholder="2023"/>
      </div>

      <Select label="Ibilgailuaren egoera" name="estado" value={formData.estado} onChange={handleChange} options={vehicleStates} required/>

      <div className="form-group checkbox-group">
        <input type="checkbox" id="documentacionOk" name="documentacionOk" checked={formData.documentacionOk} onChange={handleCheckboxChange}/>
        <label htmlFor="documentacionOk">
             Ibilgailuak dokumentazio guztia egunean du
        </label>
      </div>

      <Textarea label="Deskribapen gehigarria" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Eman xehetasun gehiago ibilgailuaren egoerari, kilometroei eta gehigarriei buruz..."/>
    </div>
  );
};

export default KotxeForm;