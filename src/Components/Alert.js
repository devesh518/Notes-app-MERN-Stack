import React from "react";

const Alert = (props) => {
    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <div style={{ height: '50px'}} className='d-block'>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                {props.alert.msg}
            </div>}
        </div>
    )
};

export default Alert;
