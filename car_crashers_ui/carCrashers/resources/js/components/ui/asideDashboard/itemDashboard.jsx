function ItemDashboard({name, icon, onclick}) {  
    return (
    
            <li className="nav-item">
              <button type="button" className="nav-link d-flex align-items-center active gap-2" aria-current="page" onClick={onclick}>
                <i className={icon}></i>
                {name}
              </button>
            </li>

          
  );
}

export default ItemDashboard;
