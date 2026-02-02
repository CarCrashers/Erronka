//import { Link } from 'react-router-dom';
import { router } from '@inertiajs/react';
import './heroe.css';
import { usePage } from '@inertiajs/react';

function heroe() {

  const { auth } = usePage().props;
  const isLoggedIn = auth.user !== null;  

  const openLoginModal = (e) => {
    e.preventDefault();
    
    //call to action-ettik deitu
    router.visit('/login', {
      method: 'get',
      preserveState: true,
      preserveScroll: true,
      only: ['*'],
      onSuccess: () => {
        setTimeout(() => {
          const modal = document.getElementById('saioa');
          if (modal) {
            const bootstrap = window.bootstrap || window.bootstrap.Modal;
            const bsModal = new bootstrap.Modal(modal);
            bsModal.show();
          }
        }, 100);
      }
    });
  };



  return (
    <div className="px-4 pt-4 text-center back-image text-white d-flex flex-column justify-content-center align-items-center">
        <div className="heroe-glass">
        <h1 className="display-4 fw-bold text-white">Ongi Etorri <span className="heroeText">CarCrashers</span>-era</h1> 
        <div className="col-lg-6 mx-auto"> 
            <p className="lead mb-4">CarCrashers-en, autoak aukera bihurtzen ditugu. Txatartegi moderno eta eraginkorra gara, baina gure egitekoa harago doa. Zure ibilgailua errepidean mantentzeko jatorrizko ordezko pieza bermatuen bila bazabiltza, edo eskuko bigarren auto bat bidezko prezioan erosteko interesa baduzu, leku egokian zaude!</p> 
            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <a href="/erosi" className="btn-hero btn-hero-transparent">
                <i className="bi bi-cart"></i>Erosi</a>  
              <a href="/saldu" className="btn-hero btn-hero-transparent">
                <i className="bi bi-currency-dollar"></i>Saldu</a>
              <a href="/desguazatu" className="btn-hero btn-hero-transparent">
                <i className="bi bi-car-front"></i>Desguazatu</a>
              {!isLoggedIn && (
              <button onClick={openLoginModal} type="button" className="btn-hero btn-hero-transparent">
                <i className="bi bi-box-arrow-in-right"></i>Saioa hasi
              </button>
            )}
            </div>
        </div> 
        <div className="row mt-5">
            <div className="col-md-4 mb-3 mb-md-0">
                <div className="stat-number">500+</div>
                <div className="stat-label">Ibilgailu</div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Pieza (Recambios)</div>
            </div>
            <div className="col-md-4">
                <div className="stat-number">98%</div>
                <div className="stat-label">Bermea</div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default heroe;