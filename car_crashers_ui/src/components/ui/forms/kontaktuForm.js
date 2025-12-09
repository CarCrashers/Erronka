import React from 'react';
import Input from '../desguazatu/input.js';

const KontaktuForm = ({ formData, handleChange }) => {
  return (
    <div className="card border-0">
        <div className="card-body p-0">
            <h3 className="section-title">Kontaktu Datuak</h3>
            
            <div className="row">
                <div className="col-md-6">
                    <Input label="Izena osoa" name="izenOsoa" value={formData.izenOsoa} onChange={handleChange} required/>
                </div>
                <div className="col-md-6">
                    <Input label="Emaila" name="emaila" type="email" value={formData.email} onChange={handleChange} required placeholder="juan@adibidea.com"/>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Input label="Telefonoa" name="telefonoa" type="tel" value={formData.telefono} onChange={handleChange} required placeholder="+34 600 000 000"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default KontaktuForm;