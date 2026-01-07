import { useState } from "react";
import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import "../css/App.css";
import FloatingInput from "../components/ui/floatingInput/floatingInput";
import FloatingTextarea from "../components/ui/floatingTextArea/floatingTextArea";
import guido from "../assets/images/guido.png";
import luigi from "../assets/images/luigi.png";
import mate from "../assets/images/Mate.png";
import logo from "../assets/images/logo.jpg";
import NorGaraButton from "../components/ui/buttons/norgaraButton";
import Goikoa from "../components/ui/goikoa/goikoa.jsx";

function NorGara() {

  const [ondoMezua, setOndoMezua] = useState("");

  const konprobatuFormularioa = (e) => {
  e.preventDefault();
  const formularioa = e.target;
  const formData = new FormData(formularioa);

  const izena        = formData.get("izena");
  const emaila       = formData.get("emaila");
  const telefonoa    = formData.get("telefonoa");
  const gaia         = formData.get("gaia");
  const mezua = formData.get("mezua");

  console.log({ izena, emaila, telefonoa, gaia, mezua });

  setOndoMezua("");

  // Regex emaila eta telefono zenbakia
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const tlfRegex   = /^[0-9]{9}$/;

  const emailOndo = emailRegex.test(emaila || "");
  const tlfOndo   = tlfRegex.test(telefonoa || "");

  const denaOndo = izena && emailOndo && tlfOndo && gaia &&mezua && mezua.length >= 5;

  if (denaOndo) {
    setOndoMezua("Kaixo, " + izena + "! Zure mezua ondo bidali da. Laster jarriko gara zurekin harremanetan.");
    formularioa.reset();
  } else {
    console.error("ERROREA");
  }
};


  return (
    <Layout>
      <Goikoa>
        <h1>Nor gara</h1>
        <p>Euskal Herrian kokatutako kotxeak desguazatzen dituen enpresa bat
            gara, CarCrashers izenekoa. Kotxeen zein kotxeko piezen
            salerosketa dugu jarduera nagusi bezala. Sedea Donostian izanda,
            beste 3 sukurtsal ditugu: Bilbo, Gasteiz eta Iruñan, Irun-eko
            hirian beste sukurtsal bat irekitzeko planarekin.{" "}</p>
      </Goikoa>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 rounded-3 shadow-lg my-4 p-4 p-md-5">
            <div id="title" className="mb-3">
              <h3>Fundatzaileak</h3>
            </div>

            <div className="row text-center">
              <div className="col-12 col-md-4 mb-4 d-flex">
                <div className="w-100 d-flex flex-column align-items-center justify-content-between">
                  <div>
                    <img src={mate} alt="Agoitz" className="img-fluid mb-3 object-fit-fill" style={{ width: "180px", height: "180px" }} />
                    <h2 className="fw-normal">Agoitz Ezkerra</h2>
                    <p>Si quieres grano Aitor, te dejaré mi tractor</p>
                  </div>
                  <NorGaraButton>Gurekin kontaktatu »</NorGaraButton>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4 d-flex">
                <div className="w-100 d-flex flex-column align-items-center justify-content-between">
                  <div>
                    <img src={guido} alt="Jon" className="img-fluid mb-3 object-fit-cover"style={{ width: "180px", height: "180px" }} />
                    <h2 className="fw-normal">Jon Nieto</h2>
                    <p> Gran jugador de Valorant, mejor finisher en mma. </p>
                  </div>
                  <NorGaraButton>Gurekin kontaktatu »</NorGaraButton>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4 d-flex">
                <div className="w-100 d-flex flex-column align-items-center justify-content-between">
                  <div>
                    <img src={luigi} alt="Omar" className="img-fluid mb-3 object-fit-fill" style={{ width: "180px", height: "180px" }} />
                    <h2 className="fw-normal">Omar Akhamlich</h2>
                    <p>1-1-2 2-3-2.</p>
                  </div>
                  <NorGaraButton href={"#kontaktatu-form"}>
                    Gurekin kontaktatu »
                  </NorGaraButton>
                </div>
              </div>
            </div>

            <hr />

            <div className="row featurette align-items-center">
              <div className="col-12 col-md-7">
                <h2 className="featurette-heading fw-normal lh-1 mt-3">
                  Zure ibilgailuari bigarren bizitza ematen diogu.
                  <span className="text-body-secondary">Desmuntatu, birziklatu, berrerabili.</span>
                </h2>
                <p className="lead mt-3" style={{ textAlign: "justify" }}>
                  CarCrashers-en, istripua izan duen edo bizitza erabilgarria amaitu duen
                  ibilgailua jasotzen dugu, modu seguruan desmuntatzen dugu eta pieza
                  erabilgarriak berrikusi ondoren salgai jartzen ditugu.
                </p>
              </div>
              <div className="col-12 col-md-5 text-center">
                <img src={logo} alt="logoa" className="img-fluid" />
              </div>
            </div>

            <hr />

            <Forms id="kontaktatu-form" name="kontaktatu" onSubmit={konprobatuFormularioa} className="mt-4" >
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="p-4 p-md-5 rounded-3 bg-light border shadow-sm">
                    <h3 className="mb-3 text-center">Gurekin kontaktatu</h3>
                    <p className="text-muted text-center mb-4"> Utzi zure datuak eta ahalik eta azkarren jarriko gara zurekin harremanetan.</p>

                    {/*Logika mezua agertzeko edo ez */}
                    {ondoMezua && (
                      <div className="alert alert-info mb-4" role="alert">
                        {ondoMezua}
                      </div>
                    )}

                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <FloatingInput id="izena" name="izena" type="text" placeholder="">
                          Izen Abizenak <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>

                      <div className="col-12 col-md-6">
                        <FloatingInput id="emaila" name="emaila" type="email" placeholder="">
                          Emaila <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>

                      <div className="col-12 col-md-6">
                        <FloatingInput id="telefonoa" name="telefonoa" type="number" placeholder="">
                          Telefonoa <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>

                      <div className="col-12 col-md-6">
                        <FloatingInput id="gaia" name="gaia" type="text" placeholder="">
                          Gaia <span className="text-danger">*</span>
                        </FloatingInput>
                      </div>

                      <div className="col-12">
                        <FloatingTextarea id="mezua" name="mezua" type="text" autocomplete="off" placeholder="">
                          Mezua <span className="text-danger">*</span>
                        </FloatingTextarea>
                      </div>

                      <div className="col-12 d-flex justify-content-end mt-2">
                        <NorGaraButton href="#kontaktatu-form" type="submit">
                          Bidali
                        </NorGaraButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Forms>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NorGara;
