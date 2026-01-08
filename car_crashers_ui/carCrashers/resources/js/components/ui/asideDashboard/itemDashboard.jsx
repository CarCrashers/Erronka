function ItemDashboard({name, icon}) {  
    return (
    
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center active gap-2" aria-current="page" href="#">
                <i className={icon}></i>
                {name}
              </a>
            </li>

          
  );
}

export default ItemDashboard;
