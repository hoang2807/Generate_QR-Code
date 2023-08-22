const qrServerBaseUrl = 'https://api.qrserver.com/v1/create-qr-code/'

export const generateQRCode = (qrData: string, qrSize: string): string => {
  const qrImageUrl = `${qrServerBaseUrl}?size=${qrSize}&data=${qrData}`

  return qrImageUrl
}
