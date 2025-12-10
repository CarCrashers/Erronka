import "./forms.css";

function Forms({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Forms;