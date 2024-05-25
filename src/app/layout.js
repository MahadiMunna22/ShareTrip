import './globals.css'
import { Inter } from 'next/font/google'
import { Murecho } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const murecho = Murecho({ subsets: ['latin'] })

export const metadata = {
  title: 'Share Trip',
  description: 'Booking History Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={murecho.className}>{children}</body>
    </html>
  )
}
