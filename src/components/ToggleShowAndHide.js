import React,{useState} from 'react';

function ToggleShowAndHide() {
    const [show, setShow] = useState(true)

    function showAndHide() {
        setShow(!show)
    }
    return(
        <div>
            {
                show?<h3>show and hide </h3>:null
            }
            <button onClick={showAndHide}>Toggle</button>
        </div>
    )
}

export default ToggleShowAndHide;