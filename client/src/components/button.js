import React from "react";

function MyButton ({text, onClick}) {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    );
}

export default MyButton;