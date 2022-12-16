import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { UserProvider } from '../context/GlobalState';

function Addtranscation() {
    let [description, setDescription] = useState('')
    let [transcation, setTrancation] = useState();
    let data = useForm();
    
    let { addTranscations } = useContext(UserProvider)
    
    const addTranscation = (e) => {
        e.preventDefault();

        const newTranscation = {
            id: new Date().getTime(),
            description,
            transcationAmount: +transcation
        }
        addTranscations(newTranscation)
        setDescription('');
        setTrancation('')
    }
    return (
        <div>
            <h3>Add New Transcation</h3>
            <form onSubmit={addTranscation}>
                <div className='form-control'>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text" id="description" placeholder='Detail of Transcation'
                        value={description}
                        onChange={(d) => setDescription(d.target.value)}
                    />

                </div>
                <div className='form-control'>
                    <label htmlFor='transcationamount'>
                        Transcation Amount
                    </label>
                    <input type="number" id="transcationAmount" placeholder='Detail of Amount'
                        value={transcation}
                        onChange={(d) => setTrancation(d.target.value)}
                    />

                </div>
                <button className='btn'>Add Transcation</button>
            </form>
        </div>
    )
}

export default Addtranscation