import { Link } from '@inertiajs/react';
import './pagination.css';

function Pagination({ links }) {
  if (!links) return null;

  return (
    <nav className="d-flex justify-content-center mt-5" aria-label="Page navigation">
      <ul className="pagination">
        {links.map((link, index) => (
          <li
            key={index}
            className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
          >
            {link.url ? (
              <Link
                href={link.url}
                className="page-link text-dark"
                preserveScroll
                preserveState
              >
                <span dangerouslySetInnerHTML={{ __html: link.label }} />
              </Link>
            ) : (
              <span className="page-link text-dark">
                <span dangerouslySetInnerHTML={{ __html: link.label }} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
