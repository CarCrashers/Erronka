import { Link } from '@inertiajs/react';

function ItemDashboard({ name, icon, href = '#', onclick = null, className = '' }) {
  const handleClick = (e) => {
    if (onclick) {
      onclick(e);
    }
  };

  return (
    <li className="nav-item">
      <Link
        href={href || '#'}
        className={`nav-link ${className}`}
        onClick={handleClick}
      >
        <i className={`${icon} me-2`}></i>
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default ItemDashboard;
