import React from 'react'
import Head from 'next/head'

const Error404 = (props) => {
  return (
    <>
      <div className="error404-container">
        <Head>
          <title>Error404 - StreamPay Landing page</title>
          <meta
            property="og:title"
            content="Error404 - StreamPay Landing page"
          />
          <meta
            property="og:description"
            content="StreamPay is set to revolutionize the online payment industry with its cryptocurrency payment infrastructure."
          />
        </Head>
        <h1 className="error404-text">
          <span>Error404</span>
          <br></br>
        </h1>
      </div>
      <style jsx>
        {`
          .error404-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .error404-text {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 991px) {
            .error404-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .error404-text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Error404
