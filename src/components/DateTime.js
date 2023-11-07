import React from "react";

var datetime= () => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullyear();
    return(
        <div>
            <input type = "text" value = {displaytodaysdate} readOnly = "true" /> 
        </div>
    );
}

export default datetime; 