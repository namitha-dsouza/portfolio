import './globals.css'

export const metadata = {
  title: 'Your Name | Technical Portfolio',
  description: 'Technical portfolio showcasing projects, experience, skills, and certifications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
