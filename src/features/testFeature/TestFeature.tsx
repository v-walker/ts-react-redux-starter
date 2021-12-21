import React, {useState, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addName, removeName, selectNames } from './testFeatureSlice';

function TestFeature() {
    const names = useAppSelector(selectNames);
    const dispatch = useAppDispatch();
    const [nameToAdd, setNameToAdd] = useState("")

    const handleSubmitName = (event: FormEvent) => {
        event.preventDefault();

        dispatch(addName(nameToAdd));
        setNameToAdd("");
    }
    
    return (
        <div>
            <h1>Add a Name!</h1>
            <br />
            <form onSubmit={handleSubmitName}>
                <label htmlFor="name-input">Name</label>
                <input id="name-input" value={nameToAdd} placeholder="Name" type="text" onChange={(e) => setNameToAdd(e.target.value)} />
                <input type="submit" />
            </form>

            <br />
            <br />
            <h2>Names You Have Added:</h2>
            <ul>
                {names.map(name => {
                    return <li><button onClick={() => dispatch(removeName(name))}><b>X</b></button>{name}</li>
                })}
            </ul>
        </div>
    )
}

export default TestFeature
