import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import "../App.css";
import FloatingInput from "../components/ui/floatingInput/floatingInput";
import guido from "../assets/images/guido.png";
import luigi from "../assets/images/luigi.png";
import mate from "../assets/images/Mate.png";
import logo from "../assets/images/logo.jpg";

function norGara() {
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
            <div className="row">
              <div class="col-lg-4">
                <img src={mate} alt="Agoitz" className></img>
                <h2 class="fw-normal">Agoitz Ezkerra</h2>
                <p>Si quieres grano Aitor, te dejaré mi tractor</p>
                <p><a class="btn btn-secondary" href="#">Gurekin kontaktatu »</a></p>
              </div>

              <div class="col-lg-4">
                <img src={guido} alt="Jon"></img>
                <h2 class="fw-normal">Jon Nieto</h2>
                <p>
                  Gran jugador de Valorant, mejor finisher en mma.
                </p>
                <p><a class="btn btn-secondary" href="#">Gurekin kontaktatu »</a></p>
              </div>
              <div class="col-lg-4">
                <img src={luigi} alt="Omar"></img>
                <h2 class="fw-normal">Omar Akhamlich</h2>
                <p>
                  Una cosa te voy a decir, dos escopetas tengo.
                </p>
                <p><a class="btn btn-secondary" href="#">Gurekin kontaktatu »</a></p>
              </div>
            </div>
            <hr />
            <div class="row featurette"> 
              <div class="col-md-7"> 
                <h2 class="featurette-heading fw-normal lh-1">
                  First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span>
                </h2> 
                <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p> 
              </div> 
              <div class="col-md-5">
                <img src={logo} alt="logoa"/> 
              </div> 
            </div>
            <Forms>
              <h3>Gurekin kontaktatu</h3>
              <FloatingInput id="gaia" name="gaia" type="text">
                Gaia
              </FloatingInput>
              <br />
              <FloatingInput id="deskribapena" name="deskribapena" type="text">
                Deskribapena
              </FloatingInput>
              <button type="submit" className="">Bidali</button>
            </Forms>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default norGara;
