import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {props.alert && <div>
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                    <symbol id={props.alert.symbolID} fill="currentColor" viewBox="0 0 16 16">
                        <path d={props.alert.directory} />
                    </symbol>
                </svg>
                <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label={`${capitalize(props.alert.type)}:`}><use xlinkHref={`#${props.alert.symbolID}`} /></svg>
                    <div>
                        {props.alert.msg}
                    </div>
                </div>
            </div>}
        </div>
    )
}

// <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>