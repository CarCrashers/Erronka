import React, { useState } from 'react';
import Layout from '@components/layout/layout.jsx';
import KontaktuForm from '@components/ui/forms/kontaktuForm';
import KotxeForm from '@components/ui/forms/kotxeForm';
import ArgazkiForm from '@components/ui/forms/argazkiForm';
import MezuForm from '@components/ui/forms/mezuForm';
import Goikoa from '@components/ui/goikoa/goikoa';

const initialState = {
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
};

const Desguazatu = () => {
  const [formData, setFormData] = useState(initialState);
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formKey, setFormKey] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
        const filesArray = Array.from(e.target.files);
        setFormData(prev => ({ ...prev, fotos: filesArray }));
    }
  };

  const handleReset = () => {
      setFormData(initialState);
      setFormKey(prev => prev + 1);
      setIsSubmitted(false);
      window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
        console.log('Bidaltzen...', formData);
        
        const exito = true; 

        if (exito) {
            setIsSubmitted(true);
            window.scrollTo(0, 0);
        }
    } catch (error) {
        console.error("Errorea:", error);
        alert("Arazo bat egon da. Saiatu berriro mesedez.");
    }
  };

  return (
    <React.StrictMode>
        <Layout>
          <Goikoa>
            <h1>Kotxea Desguazatu</h1>
            <p>Zure kotxea desguazatu hemen. Informazioa eta argazkiak igorri.</p>
          </Goikoa>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 rounded-3 shadow-lg  my-4 p-4 p-md-5 ">
              {/*<div className="col-lg-8">*/}
                    
                    {isSubmitted ? (
                        <MezuForm onReset={handleReset} />
                    ) : (
                        <>
                            <h1 className="mb-4">Desguazerako datuak</h1>
                            <form onSubmit={handleSubmit} className="main-form">
                                
                                <KontaktuForm formData={formData} handleChange={handleChange}/>
                                <hr className="section-divider my-4"/>
                                
                                <KotxeForm formData={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange}/>
                                <hr className="section-divider my-4"/>

                                <ArgazkiForm key={formKey} handleFileChange={handleFileChange} fotos={formData.fotos}/>
                                
                                {formData.fotos.length > 0 && (
                                    <div className="alert alert-success mt-2">
                                        {formData.fotos.length} argazki aukeratuta.
                                    </div>
                                )}

                                <div className="text-center mt-4">
                                    <p className="small text-muted mb-3">Inprimaki hau bidalita, onartzen duzu zure ibilgailua ebaluatzeko zurekin harremanetan jar gaitezkeela. Gure taldeak ebaluatuko du eta 24-48 orduko epean zurekin harremanetan jarriko gara eskaintza batekin.</p>
                                    <button type="submit" className="btn btn-orange w-100 py-2">Desguazatu</button>
                                </div>
                            </form>
                        </>
                    )}

                </div>
            </div>
          </div>
        </Layout>
    </React.StrictMode>   
  );
}

export default Desguazatu;