import React,{useState} from 'react'
import './Measurements.css'

function Measurements() {

  const [arm, setArm] = useState('');
  const [calf, setCalf] = useState('');
  const [chest, setChest] = useState('');
  const [thigh, setThigh] = useState('');
  const [waist, setWaist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the measurements
  };

  return (
    <div className="measurement-form">
    <h1>Enter Your Measurements</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label className='label-msrnt' htmlFor="arm">Arm:</label>
        <input
          type="number"
          id="arm"
          name="arm"
          placeholder="Arm measurement"
          value={arm}
          onChange={(e) => setArm(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className='label-msrnt' htmlFor="calf">Calf:</label>
        <input
          type="number"
          id="calf"
          name="calf"
          placeholder="Calf measurement"
          value={calf}
          onChange={(e) => setCalf(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className='label-msrnt' htmlFor="chest">Chest:</label>
        <input
          type="number"
          id="chest"
          name="chest"
          placeholder="Chest measurement"
          value={chest}
          onChange={(e) => setChest(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className='label-msrnt' htmlFor="thigh">Thigh:</label>
        <input
          type="number"
          id="thigh"
          name="thigh"
          placeholder="Thigh measurement"
          value={thigh}
          onChange={(e) => setThigh(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className='label-msrnt' htmlFor="waist">Waist:</label>
        <input
          type="number"
          id="waist"
          name="waist"
          placeholder="Waist measurement"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        />
      </div>
      <button type="submit" className='btn-measurement'>Submit</button>
    </form>
  </div>
  )
}

export default Measurements
