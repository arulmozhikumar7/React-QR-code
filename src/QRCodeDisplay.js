// src/QRCodeDisplay.js
import React from 'react';
import QRCode from 'qrcode.react';
import './QRCodeDisplay.css';

const QRCodeDisplay = ({ data }) => {
    return (
        <div >

            <QRCode value={data} />
        </div>
    );
};

export default QRCodeDisplay;
