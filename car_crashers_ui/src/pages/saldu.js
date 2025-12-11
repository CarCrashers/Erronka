import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import '../App.css';
import FloatingInput from "../components/ui/floatingInput/floatingInput";
import FloatingTextarea from "../components/ui/floatingTextArea/floatingTextArea";

function saldu() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row justify-content-center bg-secondary">
          <div className="py-5 col-8">
            <h1 className="text-body-emphasis">Saldu</h1>
            <p className="lead">Ongi etorri salmenta atalera! Jarraian duzun formularioa bete, guk zure kotxea peritatzeko aukera izateko.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 rounded-3 shadow-lg border-black border my-4 p-4 p-md-5 divHandia">
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
                    <FloatingInput required id="izenAbizena" name="izenAbizena"  type="text" value="Izena sesiotik hartu" onchange="" placeholder="Ez da ikusten" readOnly="true">
                      Izen Abizenak <span className="text-danger">*</span>
                    </FloatingInput>
                  </div>

                  <div className="col-12 col-md-6">
                    <FloatingInput required id="telefonoa" name="telefonoa"  type="text" value="+34 600 000 000" onchange="" placeholder="Ez da ikusten" readOnly="true">
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
                    <FloatingInput required id="modelo" name="modelo" label="Ibilgailu modelo" type="text" placeholder="ADB: Corsa" onchange="">
                        Ibilgailu modelo <span className="text-danger">*</span>
                    </FloatingInput>
                  </div>

                  <div className="col-12 col-md-6">
                    <FloatingInput required id="urtea" name="urtea" label="Ibilgailu urtea" type="number" placeholder="ADB: Corsa" onchange="">
                        Ibilgailu urtea <span className="text-danger">*</span>
                    </FloatingInput>
                  </div>

                  <div className="col-12 col-md-6">
                    <FloatingInput required id="kilometro" name="kilometro" type="number" placeholder="ADB: Corsa" onchange="">
                        Ibilgailuaren kilometroak <span className="text-danger">*</span>
                    </FloatingInput>
                  </div>
                  <br />
                   <div className="col-12 col-md-6">
                    {/*Text area*/}
                    <FloatingTextarea required id="deskribapena" name="deskribapena" >
                      Ibilgailuaren deskribapena <span className="text-danger">*</span>
                    </FloatingTextarea>
                  </div>

                </div>

                <div className="mt-3 d-flex flex-column flex-md-row gap-2">
                  <div>
                    <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" value="true" autoComplete="off" defaultChecked />
                    <label className="btn btn-outline-success w-100" htmlFor="success-outlined">Ibilgailuak dokumentazio guztia eguneratuta dauka.</label>
                  </div>

                  <div>
                    <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" value="false" autoComplete="off" />
                    <label className="btn btn-outline-danger w-100" htmlFor="danger-outlined">Ibilgailuak ez dauka dokumentazio guztia eguneratuta.</label>
                  </div>
                </div>
              <br />
             <div class="mb-3">
                <label for="formFileMultiple" class="form-label"> <strong>Igo ibilgailuaren argazkiak:</strong></label>
                <input class="form-control" type="file" id="formFileMultiple" name="images" multiple />
            </div>
              </div>
                <div className="mt-4 d-flex justify-content-end">
                    <button type="submit" className="btn orange">Bidali</button>
                </div>
            </Forms>
          </div>
        </div>
      </div>
    </Layout>
  );
}


function konprobatuFormularioa(e){
  e.preventDefault();
  const formularioa = e.target;
  const formData = new FormData(formularioa);

  const emaila     = formData.get("emaila");
  const izenAbizena = formData.get("izenAbizena");
  const telefonoa  = formData.get("telefonoa");
  const matrikula  = formData.get("matrikula");
  const marka      = formData.get("marka");
  const modelo     = formData.get("modelo");
  const urtea      = formData.get("urtea");
  const kilometro  = formData.get("kilometro");
  const deskribapena = formData.get("deskribapena");
  const dokumentua = formData.get("options-outlined");
  const argazkiak = formData.get("images");

  //Matrikula: 1234ABC
  const matrikulaRegex = /^[0-9]{4}[A-Z]{3}$/;
  const matrikulaBalidatu = matrikulaRegex.test(matrikula.toUpperCase());

  //Deskribapena: 10 karaktere minimo
  const deskribapenaBalidatu = deskribapena && deskribapena.length >= 10;

  console.log({ emaila, izenAbizena, telefonoa, matrikula, marka, modelo, urtea, kilometro, deskribapena, dokumentua, argazkiak });

  if(emaila && izenAbizena && telefonoa && matrikulaBalidatu && marka && modelo && urtea && kilometro && deskribapenaBalidatu && dokumentua && argazkiak)
  {
    console.log("OKEY!");
    //logica enseñar componente okey
  }
  else
  {
    if(!matrikulaBalidatu) 
    {
      window.alert("Matrikula ez da baliozkoa. Formatu zuzena: 1234ABC");
    } 
    else if(!deskribapenaBalidatu) 
    {
      window.alert("Deskribapena gutxienez 10 karaktere behar ditu");
    } 
    else 
    {
      window.alert("mesedez, bete bestelako eremuak!");
    }
  } 
}



export default saldu;
