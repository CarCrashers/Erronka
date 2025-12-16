import { useState } from "react";
import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import "../App.css";
import FloatingInput from "../components/ui/floatingInput/floatingInput";
import FloatingTextarea from "../components/ui/floatingTextArea/floatingTextArea";
import ErrorMessage from "../components/ui/errorMessage/errorMessage";
import SuccessMessage from "../components/ui/successMessage/successMessage";
import Goikoa from '../components/ui/goikoa/goikoa.js';

function Saldu() {
  const [errorea, setErrorea] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);


  const konprobatuFormularioa = (e) => {
    e.preventDefault();
    const formularioa = e.target;
    const formData = new FormData(formularioa);
    const currentYear = new Date().getFullYear();


    //Baloreak lortu formulariotik FormData erabiliz
    const emaila       = formData.get("emaila");
    const izenAbizena  = formData.get("izenAbizena");
    const telefonoa    = formData.get("telefonoa");
    const matrikula    = formData.get("matrikula");
    const marka        = formData.get("marka");
    const modelo       = formData.get("modelo");
    const urtea        = formData.get("urtea");
    const kilometro    = formData.get("kilometro");
    const deskribapena = formData.get("deskribapena");
    const dokumentua   = formData.get("options-outlined");
    const argazkiak    = formData.get("images");
    const egoera       = formData.get("egoera");


    // RegEx
    const matrikulaRegex = /^[0-9]{4}[A-Z]{3}$/;
    const matrikulaBalidatu = matrikulaRegex.test(matrikula.toUpperCase());

    const kilometroRegEx = /^[0-9]+$/;
    const kilometroBalidatu = kilometroRegEx.test(kilometro);

    const urteaRegEx = /^[0-9]{4}$/;
    const urteaBalidatu = urteaRegEx.test(urtea);


    //Urtea integer bihurtu
    const urteaInt = parseInt(urtea,10);


    console.log({ emaila, izenAbizena, telefonoa, matrikula, marka, modelo, urtea, kilometro, deskribapena, dokumentua, argazkiak, egoera });


    setErrorea("");
    setIsSuccess(false);


    const eremuakFalta = [];


    if(!emaila)
    {
      eremuakFalta.push("Emaila");
    }

    if(!izenAbizena)
    {
      eremuakFalta.push("Izen Abizena");
    }

    if(!telefonoa)
    {
      eremuakFalta.push("Telefonoa");
    }

    if (!matrikulaBalidatu) 
    {
      eremuakFalta.push("Matrikula ( 0000 ABC )");
    }

    if(!marka)
    {
      eremuakFalta.push("Marka");
    }

    if(!modelo)
    {
      eremuakFalta.push("Modelo");
    }

    if(!kilometroBalidatu)
    {
      eremuakFalta.push("Kilometroak");
    }
        
    if (!egoera || egoera === "null")
    {
      eremuakFalta.push("Egoera");
    }

    if(!urteaBalidatu || urteaInt > currentYear)
    {
      eremuakFalta.push("Urtea");
    }

    if(!dokumentua)
    {
      eremuakFalta.push("Dokumentazioa");
    }

    if(!argazkiak)
    {
      eremuakFalta.push("Argazkiak");
    }


    if (eremuakFalta.length === 0) 
    {
      console.log("OKEY!");
      setIsSuccess(true);
      formularioa.reset();
    } 
    else 
    {
      setErrorea(`${eremuakFalta.join(", ")} eremua(k) zuzendu!`);
    }
  };


  const berrabiarazi = () => {
    setIsSuccess(false);
    setErrorea("");
  };


  return (
    <Layout>
      <Goikoa>
        <h1>Saldu</h1>
        <p>Ongi etorri salmenta atalera! Jarraian duzun formularioa bete, guk zure
            kotxea peritatzeko aukera izateko.</p>
      </Goikoa>


      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 rounded-3 shadow-lg  my-4 p-4 p-md-5 ">
            {isSuccess ? ( <SuccessMessage onReset={berrabiarazi} /> ) : 
            (
              <>
                <div id="title" className="mb-3">
                  <h3 className="text-black text-primary">Salmenta formularioa</h3>
                  * derrigorrezko eremuak
                </div>
                <hr />
                <Forms name="peritatu" onSubmit={konprobatuFormularioa}>
                  <div id="kontaktua" className="mb-4">
                    <h5>Kontaktu datuak</h5>


                    <div className="row g-3">
                      <div className="col-12">
                        <FloatingInput required id="emaila" name="emaila" type="email" value="Emaila sesiotik hartu" onchange="" placeholder="Ez da ikusten" readOnly="false">
                          Email-a <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>


                      <div className="col-12 col-md-6">
                        <FloatingInput required id="izenAbizena" name="izenAbizena" type="text" value="Izena sesiotik hartu" onchange="" placeholder="Ez da ikusten" readOnly="true">
                            Izen Abizenak <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>


                      <div className="col-12 col-md-6">
                        <FloatingInput required id="telefonoa" name="telefonoa" type="text" value="+34 600 000 000" onchange="" placeholder="Ez da ikusten" readOnly="true">
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
                        <FloatingInput required id="matrikula" name="matrikula" type="text" placeholder="ADB: 5555DBC" onchange="">
                            Ibilgailu matrikula <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>


                      <div className="col-12 col-md-6">
                        <FloatingInput required id="marka" name="marka" type="text" placeholder="ADB: Opel" onchange="">
                            Ibilgailu marka <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>


                      <div className="col-12 col-md-6">
                        <FloatingInput required id="modelo" name="modelo" type="text" placeholder="ADB: Corsa" onchange="">
                            Ibilgailu modelo <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>


                      <div className="col-12 col-md-6">
                        <FloatingInput required id="urtea" name="urtea" type="number" placeholder="ADB: 2015"onchange="">
                            Ibilgailu urtea <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>


                      <div className="col-12 col-md-6">
                        <FloatingInput required id="kilometro" name="kilometro" type="number" placeholder="ADB: 120000" onchange="">
                          Ibilgailuaren kilometroak <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>


                      <div className="col-12 col-md-6">
                        <div className="form-floating">
                          <select className="form-select border-1 border-secondary" id="egoera" name="egoera" required >
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


                      <br />
                      <div className="col-12">
                        <FloatingTextarea id="deskribapena" name="deskribapena" className="">
                          Ibilgailuaren deskribapena
                        </FloatingTextarea>
                      </div>
                    </div>


                    <div className="mt-3 d-flex flex-column flex-md-row gap-2">
                      <div>
                        <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" value="true" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-success w-100" htmlFor="success-outlined" >
                          Ibilgailuak dokumentazio guztia eguneratuta dauka.
                        </label>
                      </div>


                      <div>
                        <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" value="false" autoComplete="off" />
                        <label className="btn btn-outline-danger w-100" htmlFor="danger-outlined">
                            Ibilgailuak ez dauka dokumentazio guztia eguneratuta.
                        </label>
                      </div>
                    </div>


                    <br />
                    <div className="mb-3">
                      <label htmlFor="formFileMultiple" className="form-label">
                        <strong>Igo ibilgailuaren argazkiak:</strong>
                      </label>
                      <input className="form-control" type="file" id="formFileMultiple" name="images" multiple/>
                    </div>
                  </div>

                  {!!errorea && (
                    <ErrorMessage message={errorea}/>
                  )}

                  <div className="mt-4 d-flex justify-content-end">
                    <button type="submit" className="btn-orange rounded-1">
                      Bidali
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
