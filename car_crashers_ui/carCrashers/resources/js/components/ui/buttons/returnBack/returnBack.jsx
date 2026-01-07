import './returnBack.css';

function ReturnBack({text, href = "#"}) {
  return (
    <div className="row py-4">
      <div className="col-12 col-md-4">
        <a href={href} className='btn btn-sm d-inline-flex align-items-center gap-2 shadow-lg btn-outline-orange rounded-3'>
          <i className="bi bi-arrow-left-square-fill"></i>
          {text}
        </a>
      </div>
    </div>
  );
}

export default ReturnBack;
