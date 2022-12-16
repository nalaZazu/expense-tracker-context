import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserProvider } from '../context/GlobalState';


function Transcation() {
    const { transcation } = useContext(UserProvider)
    let { deleteTranscation } = useContext(UserProvider)
    // let { editTranscation } = useContext(UserProvider)
    console.log(transcation);

    return (
        <div>
            <h3>
                Transcation History
            </h3>

            <ul className='list'>
                {
                    transcation.map((transcation) => {
                        return (
                            <li className={transcation.transcationAmount > 0 ? 'plus' : 'minus'}>
                                {transcation.description}
                                <span>${transcation.transcationAmount}</span>
                                {/* <button className='edit-btn' onClick={() => editTranscation(transcation.id)}>Edit</button> */}
                                <button className='delete-btn' onClick={() => deleteTranscation(transcation.id)}>X</button>
                            </li>

                        )
                    })
                }
            </ul>


        </div>



    )
}

export default Transcation