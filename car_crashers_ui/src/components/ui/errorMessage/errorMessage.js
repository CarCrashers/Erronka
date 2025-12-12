function ErrorMessage({ message }) 
{
  if (!message) return null;

  return (
    <div className="col-12">
      <div className="alert alert-danger text-center mb-3" role="alert">
        <i className="bi bi-exclamation-square"></i> {message}
      </div>
    </div>
  );
}

export default ErrorMessage;
