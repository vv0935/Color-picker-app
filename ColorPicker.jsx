import { useState } from "react";
export default function ColorPicker(){

    function handleColor(e){
        setColor(e.target.value);
    }

    const [color, setColor]=useState("#FFFFFF")
    return(
        <div className="color-picker-app">
            <h1>Color Picker app</h1>
            <div className="color-picked" style={{backgroundColor:color}}>
                Selected color:{color}
            </div>
            <label className="pick">
                Pick a color   </label>
                <input type="color" value={color} onChange={handleColor} className="in"></input>
        </div>

    );
}