// Code EyesOnMe Component Here
import react from "react";

function EyesOnMe() {
    function focus(){
        return console.log("Good!")
    }
    function blur(){
        return console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={focus} onBlur={blur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe