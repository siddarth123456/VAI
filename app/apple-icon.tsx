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
          fontSize: '110px',
          fontWeight: '900',
        }}
      >
        ✦
      </div>
    ),
    {
      ...size,
    }
  )
}
