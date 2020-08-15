import React from 'react'
import Head from 'next/head'
import Nav from './nav';

interface Props {
  titleKey: string
}

const Layout: React.FC<Props> = ({ titleKey, children }) => {
  return (
    <>
      <Head>
        <title>{titleKey}</title>
      </Head>
      <Nav/>
      <>{children}</>
    </>
  )
}

export default Layout