import './goikoa.css';

function goikoa({ children }) {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center bg-berria text-black">
          <div className="col-12 col-lg-10 py-4 py-md-5 px-3 px-md-4 text-center text-md-start">
             {children}
          </div>
        </div>
    </div>
  );
}

export default goikoa;