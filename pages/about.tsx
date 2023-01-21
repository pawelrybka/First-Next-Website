import Head from 'next/head'
import Navbar from '../src/components/navbar/navbar'

const index = () => {
  return (
    <>
      <Head>
        <title>About me section</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
    </>
  )
}

export default index
