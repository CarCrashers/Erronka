import React, { useState } from 'react';import '../App.css';
import Layout from '../components/layout/layout.js';
import KontaktuForm from '../components/ui/forms/kontaktuForm';
import KotxeForm from '../components/ui/forms/kotxeForm';
import ArgazkiForm from '../components/ui/forms/argazkiForm.js';

const Desguazatu = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    marca: '',
    modelo: '',
    ano: '',
    estado: '',
    documentacionOk: false,
    descripcion: '',
    fotos: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, fotos: filesArray }));
    console.log("Archivos listos para subir:", filesArray.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formularioa bidalia:', formData);
    alert("Eskaria bidalia!");
    //Hemen logica backend/API-rako datuak bidaltzeko
  };

  return (

    <React.StrictMode>
        <Layout>
          <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1>Desguazerako datuak</h1>
                    <form onSubmit={handleSubmit} className="main-form">
                        <KontaktuForm formData={formData} handleChange={handleChange}/>
                        <hr className="section-divider my-4"/>
                        <KotxeForm formData={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange}/>
                        <hr className="section-divider my-4"/>
                        <ArgazkiForm handleFileChange={handleFileChange}/>
                        <div className="text-center mt-4">
                            <p className="small text-muted mb-3">Inprimaki hau bidalita, onartzen duzu zure ibilgailua ebaluatzeko zurekin harremanetan jar gaitezkeela. 24-48 laneguneko epean erantzuteko konpromisoa hartzen dugu.</p>
                            <button type="submit" className="btn btn-orange w-100 py-2">Desguazatu</button>
                        </div>
                    </form>

                </div>
            </div>
          </div>
        </Layout>
    </React.StrictMode>   
  );
}

export default Desguazatu;