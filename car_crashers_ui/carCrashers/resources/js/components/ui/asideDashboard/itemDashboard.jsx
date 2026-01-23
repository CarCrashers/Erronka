import { Link } from '@inertiajs/react';

function ItemDashboard({ name, icon, href = '#', method = 'get', className = '' }) {
  
  return (
    <li className="nav-item">

      <Link href={href} method={method} as="a" className={`nav-link ${className}`}>
        <i className={`${icon} me-2`}></i>
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default ItemDashboard;