import React from 'react'
import { useState } from 'react'

import "./Modal.css"

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

  return (
    <div>
        
        <button 
        onClick={toggleModal}
        className='btn-modal'>
            OPEN
        </button>

        {modal &&

        <div className="overlay">

            <div className="modal">

                    <div className="modal-content">

                            <h2>Hello Modale</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos eveniet obcaecati maxime, eos ipsam. Eveniet, dolorum amet, saepe delectus ad eaque numquam soluta dolore voluptatum vel vero minus dolor dolores dignissimos veritatis dicta illum cum qui officiis, doloremque maiores. Reiciendis facilis minus suscipit soluta quidem voluptates ducimus officiis distinctio?
                            </p>

                            <button 
                            onClick={toggleModal}
                            className="close-modal">
                                CLOSE
                            </button>

                    </div>

            </div>

        </div>

        }

    </div>
  )
}
