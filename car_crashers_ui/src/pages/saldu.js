import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import '../App.css';

function saldu() {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h1 className="text-body-emphasis">Saldu</h1>
            <p className="lead">Ongi etorri salmenta atalera! Jarraian duzun formularioa bete, guk zure kotxea peritatzeko aukera izateko.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 bg-white rounded-3 shadow-lg border-black border my-4 p-4 p-md-5">
            <div id="title" className="mb-3">
              <h3 className="text-black text-primary">Ibilgailuaren informazioa</h3>
              * derrigorrezko
            </div>
            <hr />
            <Forms name="peritatu">
              <div id="kontaktua" className="mb-4">
                <h5>Kontaktu datuak</h5>

                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="email" className="form-control" readOnly disabled id="floatingInput" value={"Email-a saioatik hartu"} />
                      <label htmlFor="floatingInput">Email-a * </label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" readOnly disabled id="floatingIzena" value={"Izena saioatik hartu"} />
                      <label htmlFor="floatingIzena">Izen Abizenak *</label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" readOnly disabled id="floatingZenbakia" value={"600 000 000"} />
                      <label htmlFor="floatingZenbakia">Telefono zenbakia *</label>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div id="ibilgailua" className="mb-4">
                <h5>Ibilgailuaren Datuak</h5>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingMarka" placeholder={"ADB: Opel"} />
                      <label htmlFor="floatingMarka">Ibilgailu marka *</label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="floatingModelo" placeholder={"ADB: Corsa"} />
                      <label htmlFor="floatingModelo">Ibilgailu modelo *</label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input type="number" className="form-control" id="floatingUrtea" />
                      <label htmlFor="floatingUrtea">Ibilgailu urtea *</label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating">
                      <input type="number" className="form-control" id="floatingKm" />
                      <label htmlFor="floatingKm">Ibilgailu kilometroak *</label>
                    </div>
                  </div>
                </div>

                <div className="mt-3 d-flex flex-column flex-md-row gap-2">
                  <div>
                    <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autoComplete="off" defaultChecked />
                    <label className="btn btn-outline-success w-100" htmlFor="success-outlined">Ibilgailuak dokumentazio guztia eguneratuta dauka.</label>
                  </div>

                  <div>
                    <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autoComplete="off" />
                    <label className="btn btn-outline-danger w-100" htmlFor="danger-outlined">Ibilgailuak ez dauka dokumentazio guztia eguneratuta.</label>
                  </div>
                </div>

                <div className="mt-3">
                  <input type="file" multiple accept="image/*" />
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

export default saldu;
