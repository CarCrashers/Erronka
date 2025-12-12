import Layout from "../components/layout/layout";
import Forms from "../components/ui/forms/forms";
import "../App.css";
import FloatingInput from "../components/ui/floatingInput/floatingInput";

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
          <div className="col-12 col-md-10 col-lg-8 rounded-3 shadow-lg border-black border my-4 p-4 p-md-5 divHandia">
            <div id="title" className="mb-3">
              <h3 className="text-black text-primary">Salmenta formularioa</h3>*
              derrigorrezko eremuak
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default norGara;
