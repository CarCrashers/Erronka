import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import "../App.css";
import FloatingInput from "../components/ui/floatingInput/floatingInput";
import guido from "../assets/images/guido.png";
import luigi from "../assets/images/luigi.png";
import mate from "../assets/images/Mate.png";
import logo from "../assets/images/logo.jpg";


function norGara() {


  const konprobatuFormularioa = (e) => {
    e.preventDefault();
    const formularioa = e.target;
    const formData = new FormData(formularioa);
    const gaia = formData.get("gaia");
    const deskribapena = formData.get("deskribapena");


    console.log( { gaia, deskribapena});
    //success mezua
  };



  return (
    <Layout>
      <div className="container-fluid">
        <div className="row justify-content-center bg-secondary">
          <div className="py-5 col-8">
            <h1 className="text-body-emphasis">Nor gara</h1>
            <p className="lead">
              Euskal Herrian kokatutako kotxeak desguazatzen dituen enpresa bat
              gara, CarCrashers izenekoa. Kotxeen zein kotxeko piezen
              salerosketa dugu jarduera nagusi bezala. Sedea Donostian izanda,
              beste 3 sukurtsal ditugu: Bilbo, Gasteiz eta Iruñan, Irun-eko
              hirian beste sukurtsal bat irekitzeko planarekin.{" "}
            </p>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 rounded-3 shadow-lg border-black border my-4 p-4 p-md-5 divHandia">
            <div id="title" className="mb-3">
                <h3>Fundatzaileak</h3>
            </div>

            <div className="row text-center">
              <div className="col-12 col-md-4 mb-4">
                <img src={mate} alt="Agoitz" className="img-fluid  mb-3" />
                <h2 className="fw-normal">Agoitz Ezkerra</h2>
                <p>Si quieres grano Aitor, te dejaré mi tractor</p>
                <p><a className="btn btn-secondary" href="#">Gurekin kontaktatu »</a></p>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <img src={guido} alt="Jon" className="img-fluid  mb-3" />
                <h2 className="fw-normal">Jon Nieto</h2>
                <p>
                  Gran jugador de Valorant, mejor finisher en mma.
                </p>
                <p><a className="btn btn-secondary" href="#">Gurekin kontaktatu »</a></p>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <img src={luigi} alt="Omar" className="img-fluid  mb-3" />
                <h2 className="fw-normal">Omar Akhamlich</h2>
                <p>
                  Una cosa te voy a decir, dos escopetas tengo.
                </p>
                <p><a className="btn btn-secondary" href="#">Gurekin kontaktatu »</a></p>
              </div>
            </div>

            <hr />

            <div className="row featurette align-items-center">
              <div className="col-12 col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                  First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span>
                </h2>
                <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
              </div>
              <div className="col-12 col-md-5 text-center">
                <img src={logo} alt="logoa" className="img-fluid" />
              </div>
            </div>

            <hr/>

            <Forms name="kontaktatu" onSubmit={konprobatuFormularioa}>
              <h3>Gurekin kontaktatu</h3>
              <br />
              <FloatingInput id="gaia" name="gaia" type="text">
                Gaia
              </FloatingInput>
              <br />
              <FloatingInput id="deskribapena" name="deskribapena" type="text">
                Deskribapena
              </FloatingInput>
              <br />
              <button type="submit" className="btn-orange">Bidali</button>
            </Forms>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default norGara;
