import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
export default function Addball({onAdd}) {
    const [newball,setNewball]=useState({
        name:"",
        marc:"",
        image:""
    })
    const handle=()=>{

        if (newball.name.trim() === '' || newball.marc.trim() === '' || newball.image.trim() === '' ) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill in all fields!',
            });
            return;
          }
        onAdd(newball)
    setNewball({
        name:"",
        marc:"",
        image:""
    })
    Swal.fire({
        icon: 'success',
        title: 'ball Added!',
        showConfirmButton: false,
        timer: 1500, // Automatically close after 1.5 seconds
      })
    }
  return (
    <div>
      <h1 style={{color:'red'}}>Add new ball</h1>
      <form >
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newball.name}
            onChange={(e) => setNewball({ ...newball, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Color
          </label>
          <input
            type="text"
            id="inputColor"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newball.marc}
            onChange={(e) => setNewball({ ...newball, marc: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newball.image}
            onChange={(e) => setNewball({ ...newball, image: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={handle}>
          Add ball
        </button>
      </form>
    </div>
  )
}
