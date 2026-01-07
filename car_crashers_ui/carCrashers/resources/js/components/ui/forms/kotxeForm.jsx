import Input from '../desguazatu/input.jsx';
import Select from '../desguazatu/select.jsx';
import Textarea from '../desguazatu/textarea.jsx';

const vehicleStates = [
    { value: 'bikaina', label: 'Bikaina' },
    { value: 'ona', label: 'Ona' },
    { value: 'matxuratuta', label: 'Matxuratuta' },
    { value: 'erabat hondatuta', label: 'Erabat hondatuta' },
];

const KotxeForm = ({ formData, handleChange, handleCheckboxChange }) => {
  return (
    <div className="border-0 mt-3 card-body p-0">
        <h3 className="mb-3">Kotxearen datuak</h3>
        
        <div className="row">
            <div className="col-md-4">
                <Input label="Marka" name="marca" value={formData.marca} onChange={handleChange} required placeholder="Adb: Seat"/>
            </div>
            <div className="col-md-4">
                <Input label="Modeloa" name="modelo" value={formData.modelo} onChange={handleChange} required placeholder="Adb: Ibiza"/>
            </div>
            <div className="col-md-4">
                <Input label="Urtea" name="ano" type="number" value={formData.ano} onChange={handleChange} required placeholder="2023"/>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <Select label="Ibilgailuaren egoera" name="estado" value={formData.estado} onChange={handleChange} options={vehicleStates} required/>
            </div>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="documentacionOk" name="documentacionOk" checked={formData.documentacionOk} onChange={handleCheckboxChange}/>
            <label className="form-check-label" htmlFor="documentacionOk">Ibilgailuak dokumentazio guztia egunean du</label>
        </div>

        <div className="mb-3">
            <Textarea label="Deskribapen gehigarria" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Eman xehetasun gehiago..."/>
        </div>
    </div>
  );
};

export default KotxeForm;