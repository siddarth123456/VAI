import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #E7C85A, #D4A017)',
          borderRadius: '20%',
          color: 'white',
        }}
      >
        <svg 
          width="110" 
          height="110" 
          viewBox="0 0 24 24" 
        >
          <path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 12 14 4 12C12 10 12 2 12 2Z" fill="white" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
