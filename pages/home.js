import React from 'react'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const home = (props) => {
    return ( <
        >
        <
        div className = "home-container" >
        <
        Head >
        <
        title > Home - StreamPay Landing page < /title> <
        meta property = "og:title"
        content = "Home - StreamPay Landing page" / >
        <
        meta property = "og:description"
        content = "StreamPay is set to revolutionize the online payment industry with its cryptocurrency payment infrastructure." /
        >
        <
        /Head> <
        div className = "home-container1" >
        <
        img alt = "logo"
        src = "/playground_assets/stream-pay-logo-dark-200h.png"
        className = "home-image" /
        >
        <
        header data - role = "Header"
        className = "home-header" >
        <
        div className = "home-container2" >
        <
        div className = "home-nav" >
        <
        NavigationLinks rootClassName = "rootClassName10" > < /NavigationLinks> < /
        div > <
        /div> <
        div className = "home-btn-group" >
        <
        button className = "home-login button" > Login < /button> <
        button className = "button" > Register < /button> < /
        div > <
        div data - role = "BurgerMenu"
        className = "home-burger-menu" >
        <
        svg viewBox = "0 0 1024 1024"
        className = "home-icon" >
        <
        path d = "M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z" > < /path> < /
        svg > <
        /div> <
        div data - role = "MobileMenu"
        className = "home-mobile-menu" >
        <
        div className = "home-nav1" >
        <
        div className = "home-container3" >
        <
        img alt = "image"
        src = "https://presentation-website-assets.teleporthq.io/logos/logo.png"
        className = "home-image1" /
        >
        <
        div data - role = "CloseMobileMenu"
        className = "home-menu-close" >
        <
        svg viewBox = "0 0 1024 1024"
        className = "home-icon02" >
        <
        path d = "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z" > < /path> < /
        svg > <
        /div> < /
        div > <
        NavigationLinks rootClassName = "rootClassName11" > < /NavigationLinks> < /
        div > <
        div >
        <
        svg viewBox = "0 0 950.8571428571428 1024"
        className = "home-icon04" >
        <
        path d = "M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z" > < /path> < /
        svg > <
        svg viewBox = "0 0 877.7142857142857 1024"
        className = "home-icon06" >
        <
        path d = "M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z" > < /path> < /
        svg > <
        svg viewBox = "0 0 602.2582857142856 1024"
        className = "home-icon08" >
        <
        path d = "M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z" > < /path> < /
        svg > <
        /div> < /
        div > <
        /header> < /
        div > <
        div className = "home-stream-payforbusinessdiv" >
        <
        img alt = "div1277"
        src = "/playground_assets/div1277-qsrv-200h.png"
        className = "home-div" /
        >
        <
        span className = "home-text" >
        <
        span className = "home-text01" > Stream < /span> <
        span className = "home-text02" > Pay’ < /span> <
        span >
        s business products allow both online and in -person merchants to accept cryptocurrency payments easily and with no fuss. <
        /span> < /
        span > <
        span className = "home-text04" >
        <
        span className = "home-text05" >
        <
        span >
        Tap into the growing web3 economy and start accepting cryptocurrency payments on your <
        span dangerouslySetInnerHTML = {
            {
                __html: ' ',
            }
        }
        /> < /
        span > <
        br > < /br> <
        span > e - commerce or local store with Stream < /span> < /
        span > <
        span className = "home-text09" > Pay. < /span> < /
        span > <
        span className = "home-text10" >
        <
        span className = "home-text11" >
        Discover <
        span dangerouslySetInnerHTML = {
            {
                __html: ' ',
            }
        }
        /> < /
        span > <
        span className = "home-text12" > Stream < /span> <
        span > Pay
        for business - & gt; < /span> < /
        span > <
        img alt = "Stream Icon"
        src = "/playground_assets/srtreamswap11288-4w45a-400h.png"
        className = "home-srtreamswap1" /
        >
        <
        h1 className = "home-text14" > Revolutionizing the payment industry < /h1> < /
        div > <
        button className = "home-button button" > Get Card < /button> <
        h1 className = "home-text15 Heading" >
        <
        span > Web3  < /span> <
        span > Payments Protocol < /span> <
        br > < /br> < /
        h1 > <
        span className = "home-description Content" >
        Stream Protocol is building the next generation payment infrastructure with blockchain technology, and will provide a platform
        for bringing the gap between merchant and cryptocurrency users. <
        /span> <
        button className = "home-button1 button" > Get Wallet < /button> < /
        div > <
        style jsx > { `
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 1135px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-image {
            width: 149px;
            height: 43px;
            align-self: center;
            object-fit: cover;
          }
          .home-header {
            width: 1076px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-nav {
            display: flex;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
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
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
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
          .home-stream-payforbusinessdiv {
            width: 1564px;
            height: 2158px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            margin-bottom: 78px;
            justify-content: center;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-div {
            top: 731px;
            left: 667px;
            width: 217px;
            height: 32px;
            position: absolute;
            border-color: transparent;
            border-radius: 40px;
          }
          .home-text {
            top: 877px;
            left: 316px;
            color: rgb(98, 98, 98);
            width: 931px;
            height: auto;
            margin: auto;
            position: absolute;
            font-size: 20px;
            align-self: auto;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 31px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-text01 {
            font-weight: 400;
          }
          .home-text02 {
            font-weight: 700;
          }
          .home-text04 {
            top: 1151px;
            left: 315px;
            color: rgba(216, 216, 216, 1);
            width: 505px;
            height: auto;
            opacity: 0.98;
            position: absolute;
            font-size: 23px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 31px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-text05 {
            font-weight: 400;
          }
          .home-text09 {
            font-weight: 700;
          }
          .home-text10 {
            top: 1089px;
            left: 315px;
            color: rgba(255, 255, 255, 1);
            width: 419px;
            height: auto;
            position: absolute;
            font-size: 24px;
            align-self: auto;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: 31px;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .home-text11 {
            font-weight: 700;
          }
          .home-text12 {
            font-weight: 400;
          }
          .home-srtreamswap1 {
            top: 999px;
            left: 984px;
            width: 372px;
            height: 346px;
            position: absolute;
            border-color: transparent;
          }
          .home-text14 {
            top: 800px;
            left: 486px;
            color: #141414;
            position: absolute;
            align-self: center;
          }
          .home-button {
            top: 569px;
            left: 515px;
            position: absolute;
          }
          .home-text15 {
            top: 321px;
            left: 390px;
            color: #141414;
            position: absolute;
            font-style: normal;
          }
          .home-description {
            top: 372px;
            left: 390px;
            color: rgb(98, 98, 98);
            width: 508px;
            height: auto;
            opacity: 1;
            position: absolute;
            font-size: 23px;
            align-self: auto;
            text-align: left;
            line-height: 1.5;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-transform: none;
          }
          .home-button1 {
            top: 569px;
            left: 388px;
            color: #ffffff;
            position: absolute;
            background-color: #00072c;
          }
          @media (max-width: 1600px) {
            .home-header {
              width: 693px;
            }
            .home-button {
              top: 507px;
              left: 508px;
            }
            .home-text15 {
              top: 298px;
              left: 379px;
              width: 488px;
              position: absolute;
            }
            .home-description {
              top: 358px;
              left: 378px;
              color: rgb(70, 70, 70);
              margin: 0;
              font-size: 18px;
              align-self: flex-start;
              font-family: Inter;
              font-weight: 400;
              line-height: 30px;
              text-decoration: none;
            }
            .home-button1 {
              top: 507px;
              left: 378px;
            }
          }
          @media (max-width: 1200px) {
            .home-text15 {
              top: 228px;
              left: 174px;
            }
            .home-description {
              top: 284px;
              left: 176px;
              position: absolute;
            }
          }
          @media (max-width: 991px) {
            .home-button {
              top: 429px;
              left: 204px;
            }
            .home-text15 {
              top: 227px;
              left: 71px;
            }
            .home-description {
              top: 287px;
              left: 74px;
            }
            .home-button1 {
              top: 428px;
              left: 79px;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-text {
              top: 1059px;
              left: 324px;
              position: static;
            }
            .home-text04 {
              top: 1315px;
              left: 429px;
            }
            .home-text10 {
              top: 1247px;
              left: 428px;
            }
            .home-srtreamswap1 {
              top: 1179px;
              left: 911px;
            }
            .home-button {
              top: 429px;
              left: 160px;
            }
            .home-text15 {
              top: 227px;
              left: 32px;
            }
            .home-description {
              top: 287px;
              left: 30px;
              color: rgb(132, 147, 156);
              font-size: 20px;
              font-family: Inter;
              font-weight: 400;
              line-height: 30px;
              text-decoration: none;
            }
            .home-button1 {
              top: 428px;
              left: 31px;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              width: 294px;
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-text04 {
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .home-srtreamswap1 {
              top: 1167px;
              left: 767px;
            }
            .home-text15 {
              top: 233px;
              left: 28px;
              width: 405px;
              height: 38px;
              margin: auto;
              position: absolute;
            }
            .home-description {
              color: rgb(132, 147, 156);
              width: auto;
              font-size: 20px;
              font-family: Inter;
              font-weight: 400;
              line-height: 30px;
              text-decoration: none;
            }
          }
        ` } <
        /style> < / >
    )
}

export default home