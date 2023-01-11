import React from 'react'
import Head from 'next/head'

import FeatureCard1 from '../components/feature-card1'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>StreamPay Landing page</title>
          <meta property="og:title" content="StreamPay Landing page" />
          <meta
            property="og:description"
            content="StreamPay is set to revolutionize the online payment industry with its cryptocurrency payment infrastructure."
          />
        </Head>
        <div className="home-hero">
          <h1 className="home-heading">Revolutionizing the payment industry</h1>
          <span className="home-description">
            <span>Stream</span>
            <span className="home-text01">Pay</span>
            <span>
              {' '}
              is building the next generation payment infrastructure with Solana
              blockchain technology, and
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              will provide a platform for bringing the gap between merchant and
              cryptocurrency users.
            </span>
          </span>
          <div className="home-btn-group">
            <button className="home-get-started button">Get Started</button>
            <button className="home-whitepaper button">Whitepaper</button>
          </div>
        </div>
        <header data-role="Header" className="home-header">
          <img
            alt="logo"
            src="/playground_assets/logo%20component%20light-200h.png"
            className="home-logo"
          />
          <nav className="home-nav">
            <span className="home-wallet">Wallet</span>
            <span className="home-card">Card</span>
            <span className="home-features">Gateways</span>
            <span className="home-bussiness">Bussiness</span>
            <span className="home-swap">Swap</span>
            <span className="home-about">About</span>
            <span className="home-f-a-q">FAQ</span>
          </nav>
          <div className="home-nav1"></div>
          <div className="home-btn-group1">
            <button className="home-login button">Login</button>
            <button className="home-register button">Register</button>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav2">
              <div className="home-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image"
                />
                <div data-role="CloseMobileMenu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-container02">
          <div className="home-features1">
            <h1 className="home-web3-payments-protocol">
              <span>Web3 Payments Protocol</span>
              <br></br>
            </h1>
            <span className="home-features2">
              StreamPay’s business products allow both online and in-person
              merchants to accept cryptocurrency payments easily and with no
              fuss
            </span>
            <div className="home-container03">
              <FeatureCard1 rootClassName="rootClassName"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName5"></FeatureCard1>
              <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
            </div>
          </div>
          <div className="home-newsletter-banner">
            <div className="home-container04">
              <h1 className="home-newsletter">
                <span>Be the first to get the latest features</span>
              </h1>
              <span className="home-description1">
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis, ut tincidunt lectus. Mauris luctus
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  rutrum mi ut rhoncus. Integer in dignissim tortor, id egestas
                  ante. Proin at enim purus. Mauris ut felis nisi.
                </span>
              </span>
              <div className="home-container05">
                <input
                  type="text"
                  placeholder="Email here..."
                  className="home-your-email-address input"
                />
                <button className="home-subscribe button">Subscribe</button>
              </div>
            </div>
            <img
              alt="Logo icon"
              src="/playground_assets/playstore.png"
              className="home-icon-img-mid"
            />
          </div>
          <div className="home-mid-banner">
            <h1 className="home-heading1">The Web3 payments platform</h1>
            <span className="home-description2">
              StreamPay provides a robust Solana-native payments system that
              seamlessly integrates with web3 solutions.
            </span>
            <div className="home-btn-group2">
              <button className="home-get-started1 button">Dashboard</button>
              <button className="home-read-more button">Presentation</button>
            </div>
          </div>
          <div className="home-gradient-footer-container"></div>
          <div className="home-gradient-container"></div>
          <footer className="home-footer">
            <div className="home-container06">
              <div className="home-container07">
                <div className="home-logo1">
                  <img
                    alt="logo"
                    src="/playground_assets/stream-pay-logo-dark-200h.png"
                    className="home-logo2"
                  />
                </div>
                <span className="home-slogan">
                  <span>Payments Infrastructure for the Modern Era</span>
                  <br></br>
                </span>
              </div>
              <div className="home-links-container">
                <div className="home-container08">
                  <div className="home-product-container">
                    <span className="home-products">Product</span>
                    <span className="home-features3">Features</span>
                    <span className="home-pricing">Pricing</span>
                    <span className="home-developers">Developers</span>
                    <span>Releases</span>
                  </div>
                  <div className="home-company-container">
                    <span className="home-company">Company</span>
                    <span className="home-about1">About</span>
                    <span className="home-careers">Careers</span>
                    <span className="home-f-a-q1">FAQ</span>
                    <span>Blog</span>
                  </div>
                </div>
                <div className="home-container09">
                  <div className="home-contact">
                    <span className="home-contact-us">Contact Us</span>
                    <span className="home-email-address">
                      contact@streamprotocol.org
                    </span>
                  </div>
                  <div className="home-socials">
                    <span className="home-follow-us">Follow Us</span>
                    <div className="home-icon-group1">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-twitter"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-instagram"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-facebook"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-separator"></div>
            <span className="home-copyright">
              © 2022 Stream Protocol. All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-self: center;
            min-height: 80vh;
            align-items: center;
            padding-top: 38px;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                45deg,
                rgb(0, 7, 44) 24%,
                rgba(24, 48, 174, 0.95) 100%
              ),
              url('/playground_assets/network-1500h.jpeg');
            background-position: top left, top;
          }
          .home-heading {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
          }
          .home-description {
            color: rgb(227, 227, 227);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text01 {
            font-style: normal;
            font-weight: 500;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-get-started {
            font-size: 0.75rem;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .home-get-started:hover {
            transform: scale(1.02);
          }
          .home-whitepaper {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-white);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            background-color: transparent;
          }
          .home-whitepaper:hover {
            transform: scale(1.02);
          }
          .home-header {
            top: 6px;
            left: 0px;
            right: 0px;
            width: 1291px;
            height: 114px;
            margin: auto;
            display: flex;
            position: absolute;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 35px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-logo {
            top: 20px;
            left: 65px;
            width: 333px;
            height: 77px;
            position: absolute;
          }
          .home-nav {
            top: 49px;
            flex: 0 0 auto;
            left: 459px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
          }
          .home-wallet {
            color: #ffffff;
          }
          .home-card {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-features {
            color: rgb(255, 255, 255);
            margin-left: var(--dl-space-space-twounits);
          }
          .home-bussiness {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-swap {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-about {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-f-a-q {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .home-nav1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
          }
          .home-btn-group1 {
            flex: 0;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-color: #dedede;
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .home-register {
            border-color: #dedede;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container02 {
            width: 100%;
            height: 2458px;
            display: flex;
            position: relative;
            margin-top: 68px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-features1 {
            width: 100%;
            height: 730px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .home-web3-payments-protocol {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-features2 {
            color: #333333;
            width: 70%;
            font-size: 1.15rem;
            text-align: center;
          }
          .home-container03 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fourunits);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-newsletter-banner {
            top: 1464px;
            left: 0px;
            right: 0px;
            width: 1548px;
            height: 339px;
            margin: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: absolute;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-container04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-newsletter {
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-description1 {
            margin-right: var(--dl-space-space-threeunits);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-your-email-address {
            font-size: 0.75rem;
            border-color: var(--dl-color-gray-500);
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-subscribe {
            font-size: 0.75rem;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-500);
          }
          .home-subscribe:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-icon-img-mid {
            width: 300px;
            height: 300px;
            object-fit: cover;
            flex-shrink: 0;
          }
          .home-mid-banner {
            top: 904px;
            left: 0px;
            right: 0px;
            width: 100%;
            margin: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: #f5f5f5;
          }
          .home-heading1 {
            font-size: 3rem;
            text-align: center;
          }
          .home-description2 {
            color: #333333;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group2 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-get-started1 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(0, 7, 44);
          }
          .home-get-started1:hover {
            transform: scale(1.02);
          }
          .home-read-more {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-read-more:hover {
            transform: scale(1.02);
          }
          .home-gradient-footer-container {
            top: 1114px;
            left: -4px;
            width: 100%;
            height: 322px;
            display: none;
            position: absolute;
            align-items: flex-start;
            border-color: #232323;
            border-style: solid;
            border-width: 2px;
            background-image: linear-gradient(
              45deg,
              rgb(0, 7, 44) 9%,
              rgb(24, 48, 174) 100%
            );
          }
          .home-gradient-container {
            left: 0px;
            right: 0px;
            width: 1920px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 364px;
            height: 290px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: stretch;
            justify-content: center;
            background-image: linear-gradient(
              45deg,
              rgb(0, 7, 44) 8%,
              rgb(24, 48, 174) 100%
            );
          }
          .home-footer {
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 1px;
            margin: auto;
            display: flex;
            position: absolute;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-logo1 {
            height: 55px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-logo2 {
            width: 178px;
            height: 100%;
            align-self: flex-start;
          }
          .home-slogan {
            color: #333333;
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container08 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-products {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-pricing {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-developers {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-company {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-about1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-careers {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-f-a-q1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-contact-us {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-email-address {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-follow-us {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-twitter {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-instagram {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
          }
          .home-facebook {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .home-copyright {
            color: #333333;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-heading {
              text-align: center;
            }
            .home-description {
              text-align: center;
            }
            .home-web3-payments-protocol {
              text-align: center;
            }
            .home-features2 {
              text-align: center;
            }
            .home-container03 {
              grid-template-columns: 1fr 1fr;
            }
            .home-newsletter-banner {
              flex-direction: column;
            }
            .home-container04 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-description1 {
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-container05 {
              justify-content: center;
            }
            .home-icon-img-mid {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
            .home-footer {
              flex-direction: column;
            }
            .home-container08 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .home-wallet {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-card {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-features {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-bussiness {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-swap {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-about {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-f-a-q {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav1 {
              display: none;
            }
            .home-btn-group1 {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-web3-payments-protocol {
              text-align: center;
            }
            .home-newsletter-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-description1 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .home-mid-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-description2 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-logo1 {
              align-items: center;
            }
            .home-logo2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-slogan {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .home-container08 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-whitepaper {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container03 {
              grid-template-columns: 1fr;
            }
            .home-newsletter-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container05 {
              align-items: center;
              flex-direction: column;
            }
            .home-subscribe {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-icon-img-mid {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
            .home-mid-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-btn-group2 {
              flex-direction: column;
            }
            .home-read-more {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-container06 {
              align-items: center;
              flex-direction: column;
            }
            .home-logo2 {
              margin-bottom: 0px;
            }
            .home-slogan {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              align-items: center;
              flex-direction: column;
            }
            .home-container08 {
              margin-right: 0px;
            }
            .home-container09 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-copyright {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
