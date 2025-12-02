import './layout/layout.css';



function navBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-5 h-25 w-50">
        <div class="container d-flex flex-row justify-content-evenly align-items-center w-100 h-100">
            <a class="navbar-brand" href="#">CarCrashers</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="#">
                    <i class="bi bi-house-door-fill text-black">Home</i>      
                </a>
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="bi bi-currency-euro text-black"></i>
                        Salerosketa
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Erosi</a></li>
                        <li><a class="dropdown-item" href="#">Saldu</a></li>
                    </ul>
                </li>

                <a class="nav-link" href="#">
                <i class="bi bi-buildings-fill">Nor gara?</i>
                </a>
            </div>
            </div>
            <button class="btn btn-outline-dark bg-orange" type="submit">Hasi Saioa </button>
        </div>
    </nav>
  );
}

export default navBar;
