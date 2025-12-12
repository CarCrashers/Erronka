import './pagination.css';

function Pagination() {
  return (
    <nav className="d-flex justify-content-center mt-5" aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <i class="bi bi-arrow-left-circle-fill text-warning"></i>
                </a>
            </li>
            <li class="page-item"><a class="page-link text-dark" href="#"><strong>1</strong></a></li>
            <li class="page-item"><a class="page-link text-dark" href="#"><strong>2</strong></a></li>
            <li class="page-item"><a class="page-link text-dark" href="#"><strong>3</strong></a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <i class="bi bi-arrow-right-circle-fill text-warning"></i>
                </a>
            </li>
        </ul>
    </nav>
  );
}

export default Pagination;
