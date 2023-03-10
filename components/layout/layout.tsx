import Header from '../header/header'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
