import './pagination.css';

function Pagination() {
  return (
    <nav className="d-flex justify-content-center mt-4 mt-md-5 px-2" aria-label="Page navigation example">
        <ul className="pagination pagination-sm">
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                    <i className="bi bi-arrow-left-circle-fill text-warning"></i>
                </a>
            </li>
            <li className="page-item"><a className="page-link text-dark small" href="#"><strong>1</strong></a></li>
            <li className="page-item"><a className="page-link text-dark small" href="#"><strong>2</strong></a></li>
            <li className="page-item"><a className="page-link text-dark small" href="#"><strong>3</strong></a></li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                    <i className="bi bi-arrow-right-circle-fill text-warning"></i>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default Pagination;
