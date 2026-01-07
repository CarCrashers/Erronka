import './goikoa.css';

function goikoa({ children }) {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center bg-berria text-black">
          <div className="col-12 col-md-8 py-5 text-center text-md-start">
             {children}
          </div>
        </div>
    </div>
  );
}

export default goikoa;