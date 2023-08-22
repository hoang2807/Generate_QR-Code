import { useState } from 'react'
import { generateQRCode } from './api'
import './App.css'

function App() {
  const [qrData, setQrData] = useState('example')
  const [qrSize, setQrSize] = useState('200x200')

  return (
    <div className='app-container'>
      <h1 className='app-title'>QR Code Generate</h1>
      <div className='input-container'>
        <label className='input-label'>QR URL:</label>
        <input
          type='text'
          className='input-field'
          value={qrData}
          onChange={(e) => {
            setQrData(e.target.value)
          }}
        />
      </div>
      <div className='input-container'>
        <label className='input-label'>QR Size:</label>
        <input
          type='text'
          className='input-field'
          value={qrSize}
          onChange={(e) => {
            setQrSize(e.target.value)
          }}
        />
      </div>
      <div className='qr-code'>
        <img className='qr-image' src={generateQRCode(qrData, qrSize)} alt='QR Code' />
      </div>
    </div>
  )
}

export default App
