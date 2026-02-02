import { useState, useEffect } from "react";
import { router } from '@inertiajs/react';
import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import FloatingInput from "../components/ui/floatingInput/floatingInput";
import FloatingTextarea from "../components/ui/floatingTextArea/floatingTextArea";
import ErrorMessage from "../components/ui/errorMessage/errorMessage";
import SuccessMessage from "../components/ui/successMessage/successMessage";
import Goikoa from '../components/ui/goikoa/goikoa.jsx';
import ArgazkiForm from '../components/ui/forms/argazkiForm';
import { usePage } from "@inertiajs/react";

function Saldu() {
  const [errorea, setErrorea] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [fotos, setFotos] = useState([]);
  const [formKey, setFormKey] = useState(0);

  const { erabiltzailea } = usePage().props;

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFotos(filesArray);
    }
  };

  const konprobatuFormularioa = (e) => {
    e.preventDefault();
    const formularioa = e.target;
    const formData = new FormData(formularioa);
    const currentYear = new Date().getFullYear();

    // Baloreak lortu formulariotik
    const emaila = formData.get("emaila")?.trim();
    const izenAbizena = formData.get("izenAbizena")?.trim();
    const telefonoa = formData.get("telefonoa")?.trim();
    const matrikula = formData.get("matrikula")?.trim();
    const marka = formData.get("marka")?.trim();
    const modelo = formData.get("modelo")?.trim();
    const urtea = formData.get("urtea")?.trim();
    const kilometro = formData.get("kilometro")?.trim();
    const dokumentuaRaw = formData.get("options-outlined");
    const dokumentua = dokumentuaRaw === '1';
    const egoera = formData.get("egoera");

    // RegEx balidazioak
    const matrikulaRegex = /^[0-9]{4}[A-Z]{3}$/;
    const matrikulaBalidatu = matrikula ? matrikulaRegex.test(matrikula.toUpperCase()) : false;

    const kilometroRegEx = /^[0-9]+$/;
    const kilometroBalidatu = kilometro ? kilometroRegEx.test(kilometro) : false;

    const urteaRegEx = /^[0-9]{4}$/;
    const urteaBalidatu = urtea ? urteaRegEx.test(urtea) : false;
    const urteaInt = urtea ? parseInt(urtea, 10) : 0;

    setErrorea("");
    setIsSuccess(false);

    const eremuakFalta = [];

    if (!emaila) eremuakFalta.push("Emaila");
    if (!izenAbizena) eremuakFalta.push("Izen Abizena");
    if (!telefonoa) eremuakFalta.push("Telefonoa");
    if (!matrikulaBalidatu) eremuakFalta.push("Matrikula (0000 ABC)");
    if (!marka) eremuakFalta.push("Marka");
    if (!modelo) eremuakFalta.push("Modelo");
    if (!kilometroBalidatu) eremuakFalta.push("Kilometroak");
    if (!egoera || egoera === "null") eremuakFalta.push("Egoera");
    if (!urteaBalidatu || urteaInt > currentYear || urteaInt < 1900) eremuakFalta.push("Urtea");
    if (!dokumentua && dokumentua !== false) eremuakFalta.push("Dokumentazioa");

    if (fotos.length === 0) {
      eremuakFalta.push("Argazkiak");
    }

    if (eremuakFalta.length === 0) {
      console.log("Datuak zuzenak. Bidaltzen...");
      console.log("Aukeratutako argazkiak:", fotos);
      
      setSending(true);
      
      // Fotos FormData gehitu
      fotos.forEach((foto, index) => {
        formData.append(`argazkiak[${index}]`, foto);
      });

      router.post('/saldu', formData, {
        onSuccess: () => {
          setIsSuccess(true);
          formularioa.reset();
          setFotos([]);
          setFormKey(prev => prev + 1);
          setSending(false);
        },
        onError: (errors) => {
          setErrorea('Errore bat gertatu da. Berriz saiatu.');
          setSending(false);
         
          console.error('Laravel errors:', errors); 
          const errorMsg = Object.values(errors).flat().join(', ');
          setErrorea(errorMsg || 'Errore bat gertatu da.');
          setSending(false);
          
        },
        onFinish: () => {
          setSending(false);
        }
      });
    } else {
      setErrorea(`${eremuakFalta.join(", ")} eremua(k) zuzendu!`);
    }
  };

  const berrabiarazi = () => {
    setIsSuccess(false);
    setErrorea("");
    setFotos([]);
  };

  useEffect(() => {
    // Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <Layout>
      <Goikoa>
        <h1>Saldu</h1>
        <p>Ongi etorri salmenta atalera! Jarraian duzun formularioa bete, guk zure
            kotxea peritatzeko aukera izateko.</p>
      </Goikoa>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 rounded-3 shadow-lg my-4 p-4 p-md-5">
            {isSuccess ? (
              <SuccessMessage onReset={berrabiarazi} />
            ) : (
              <>
                <div id="title" className="mb-3">
                  <h1 className="text-black text-primary">Salmenta formularioa</h1>
                  * derrigorrezko eremuak
                </div>
                <hr />
                <Forms name="peritatu" onSubmit={konprobatuFormularioa}>
                  <div id="kontaktua" className="mb-4">
                    <h5>Kontaktu datuak</h5>
                    {/* TOOLTIP */}
                      <div className="d-flex align-items-center gap-1 mb-3 small text-muted">
                        <span>Erabiltzaile profiletik hartutako datuak</span>
                        <span 
                          className="position-relative"
                          style={{ cursor: 'help' }}
                          data-bs-toggle="tooltip" 
                          data-bs-placement="top"
                          title="Datu hauek aldatzeko, Erabiltzaile panelean modifikatu."
                        >
                          <i className="bi bi-question-circle-fill text-info fs-6"></i>
                        </span>
                      </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <FloatingInput 
                          required 
                          id="emaila" 
                          name="emaila" 
                          type="email" 
                          value={erabiltzailea?.emaila ?? ""} 
                          placeholder="Emaila sesiotik hartu" 
                          readOnly={true}
                          className="bg-black border-gray-300 text-gray-500"
                        >
                          Email-a <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                      <div className="col-12 col-md-6">
                        <FloatingInput 
                          required 
                          id="izenAbizena" 
                          name="izenAbizena" 
                          type="text" 
                          value={erabiltzailea?.izenAbizena ?? ""} 
                          placeholder="Izena sesiotik hartu" 
                          readOnly={true}
                          className="bg-gray-100 border-gray-300 text-gray-500"

                        >
                          Izen Abizenak <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                      <div className="col-12 col-md-6">
                        <FloatingInput 
                          required 
                          id="telefonoa" 
                          name="telefonoa" 
                          type="text" 
                          value={erabiltzailea?.telefonoa ?? ""} 
                          placeholder="Telefonoa sesiotik hartu" 
                          readOnly={true}
                          className="bg-gray-100 border-gray-300 text-gray-500"
                        >
                          Telefono zenbakia <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div id="ibilgailua" className="mb-4">
                    <h5>Ibilgailuaren Datuak</h5>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <FloatingInput 
                          required 
                          id="matrikula" 
                          name="matrikula" 
                          type="text" 
                          placeholder="0000 ABC"
                        >
                          Ibilgailu matrikula <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                      <div className="col-12 col-md-6">
                        <FloatingInput 
                          required 
                          id="marka" 
                          name="marka" 
                          type="text" 
                          placeholder="Opel"
                        >
                          Ibilgailu marka <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                      <div className="col-12 col-md-6">
                        <FloatingInput 
                          required 
                          id="modelo" 
                          name="modelo" 
                          type="text" 
                          placeholder="Corsa"
                        >
                          Ibilgailu modelo <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                      <div className="col-12 col-md-6">
                        <FloatingInput 
                          required 
                          id="urtea" 
                          name="urtea" 
                          type="number" 
                          placeholder="2015"
                        >
                          Ibilgailu urtea <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                      <div className="col-12 col-md-6">
                        <FloatingInput 
                          required 
                          id="kilometro" 
                          name="kilometro" 
                          type="number" 
                          placeholder="120000"
                        >
                          Ibilgailuaren kilometroak <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-floating">
                          <select 
                            className="form-select border-1 border-secondary" 
                            id="egoera" 
                            name="egoera" 
                            required 
                            defaultValue="null"
                          >
                            <option value="null" disabled>Aukeratu egoera...</option>
                            <option value="bikaina">Bikaina</option>
                            <option value="ongi">Ongi</option>
                            <option value="nahikoa">Nahikoa</option>
                          </select>
                          <label htmlFor="egoera">
                            Ibilgailuaren egoera <span className="text-danger">*</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <FloatingTextarea id="deskribapena" name="deskribapena">
                          Ibilgailuaren deskribapena
                        </FloatingTextarea>
                      </div>
                    </div>

                    <div className="mt-3 d-flex flex-column flex-md-row gap-2">
                      <div>
                        <input 
                          type="radio" 
                          className="btn-check" 
                          name="options-outlined" 
                          id="success-outlined" 
                          value="1"
                          autoComplete="off"  
                        />
                        <label 
                          className="btn btn-outline-success w-100" 
                          htmlFor="success-outlined"
                        >
                          Ibilgailuak dokumentazio guztia eguneratuta dauka.
                        </label>
                      </div>
                      <div>
                        <input 
                          type="radio" 
                          className="btn-check" 
                          name="options-outlined" 
                          id="danger-outlined" 
                          value="0"
                          autoComplete="off" 
                        />
                        <label 
                          className="btn btn-outline-danger w-100" 
                          htmlFor="danger-outlined"
                        >
                          Ibilgailuak ez dauka dokumentazio guztia eguneratuta.
                        </label>
                      </div>
                    </div>
                  </div>

                  <ArgazkiForm key={formKey} handleFileChange={handleFileChange} fotos={fotos}/>

                  {errorea && <ErrorMessage message={errorea} />}

                  <div className="text-center mt-4">
                    <p className="small text-muted mb-3">
                      Inprimaki hau bidalita, onartzen duzu zure ibilgailua ebaluatzeko zurekin harremanetan jar gaitezkeela. 
                      Gure taldeak ebaluatuko du eta 24-48 orduko epean zurekin harremanetan jarriko gara eskaintza batekin.
                    </p>
                    <button 
                      type="submit" 
                      className="btn btn-orange w-100 py-2" 
                      disabled={sending}
                    >
                      {sending ? 'Bidaltzen...' : 'Bidali'}
                    </button>                  
                  </div>
                </Forms>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Saldu;
