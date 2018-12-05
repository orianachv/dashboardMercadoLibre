import React from 'react';

export default (props) => {
    const i = props.index;
    const addresses = props.addresses;
    return (
        (addresses.length > 0) ?
            <div id='senderCONTAINER'>
                <div className="containerShipping">
                    <div className="itemBill">
                        <p>Sender: {addresses[0].SENDER[i].SENDER_NICKNAME}</p>
                        <p>Address: {addresses[0].SENDER[i].SENDER_ADDRESS}</p>
                        <p>Zip Code: {addresses[0].SENDER[i].SENDER_ZIP_CODE}</p>
                        <p>City: {addresses[0].SENDER[i].SENDER_CITY}</p>
                        <p>State: {addresses[0].SENDER[i].SENDER_STATE}</p><br></br>
                        <p>Number<br />{`${[i + 1]}/${addresses[0].SENDER.length}`}</p>
                    </div>
                    <div className="itemBill">
                        <img src='/images/Flecha.png' style={{ position: "relative", left: "10%", top: "80%", height: 'auto', width: '4rem' }} />
                    </div>
                </div>
            </div>
            :
            null
    )
}