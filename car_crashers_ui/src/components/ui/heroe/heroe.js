import './heroe.css';

function heroe() {
  return (
    <div className="px-4 pt-4 text-center back-image text-white d-flex flex-column justify-content-center align-items-center">
        <div className="heroe-glass">
        <h1 className="display-4 fw-bold text-white">Ongi Etorri <span className="heroeText">CarCrashers</span>-era</h1> 
        <div className="col-lg-6 mx-auto"> 
            <p className="lead mb-4">CarCrashers-en, autoak aukera bihurtzen ditugu. Txatartegi moderno eta eraginkorra gara, baina gure egitekoa harago doa. Zure ibilgailua errepidean mantentzeko jatorrizko ordezko pieza bermatuen bila bazabiltza, edo eskuko bigarren auto bat bidezko prezioan erosteko interesa baduzu, leku egokian zaude!</p> 
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> 
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Erosi</button> 
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Saldu</button> 
            </div> 
        </div> 
        </div>
    </div>
  );
}

export default heroe;