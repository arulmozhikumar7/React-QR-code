// src/QRCodeGenerator.js
import React, { useState } from 'react';
import QRCodeDisplay from './QRCodeDisplay';
import './QRCodeGenerator.css';
const QRCodeGenerator = () => {
    const [inputData, setInputData] = useState('');
    const [generatedQRCode, setGeneratedQRCode] = useState('');

    const generateQRCode = () => {
        setGeneratedQRCode(inputData);
    };

    return (
        <body>
            <div className="wrapper">
                <header>
                    <h1>QR Code Generator</h1>
                    <p>Paste a url or enter text to create QR code</p>
                </header>
                <div className="form">
                    <input type="text" spellcheck="false" placeholder="Enter text or url" value={inputData} onChange={(e) => setInputData(e.target.value)}
                    />
                    <button onClick={generateQRCode}>Generate QR Code</button>
                    {generatedQRCode && <div className="qr-code-container"><QRCodeDisplay data={generatedQRCode} /></div>}

                </div>






            </div></body>
    );
};

export default QRCodeGenerator;
