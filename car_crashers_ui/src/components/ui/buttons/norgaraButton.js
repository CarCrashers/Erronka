import './norgaraButton.css';

function NorGaraButton({ children, href, type }) {
  return (
    <button  className="btn orange-btn" type={type}> 
        {children}
    </button>
  );
}

export default NorGaraButton;