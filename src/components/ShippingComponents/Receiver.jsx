import React from 'react';

export default (props) => {
    const A = props.addresses[0];
    return (
        (A) ?
            <div id='receiverCONTAINER'>
                <p>Receiver: {A.RECEIVER_NICKNAME}</p>
                <p>Zip Code: {A.RECEIVER_ZIP_CODE}</p>
                <p>City: {A.RECEIVER_CITY}</p>
                <p>State: {A.RECEIVER_STATE}</p>
            </div>
            :
            null
    )
}