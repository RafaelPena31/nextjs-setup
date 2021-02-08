import Head from 'next/head'
import React from 'react'
import RafaelLogo from '../assets/logo_rafael_branco_small.png'
import { Container } from '../styles/pages/Home'

const style = {
  width: '700px'
}

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dev Rafael Pena</title>
      </Head>

      <img src={RafaelLogo} style={style} />
      <h1>ReactJS + NextJS Structure</h1>
      <p>Start Boilerplate</p>
    </Container>
  )
}

export default Home
