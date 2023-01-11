import React from 'react'

import PropTypes from 'prop-types'

const NavigationMenu = (props) => {
  return (
    <>
      <nav className={`navigation-menu-nav ${props.rootClassName} `}>
        <span className="navigation-menu-wallet">{props.text}</span>
        <span className="navigation-menu-card">{props.text1}</span>
        <span className="navigation-menu-gateway">{props.text11}</span>
        <span className="navigation-menu-bussiness">{props.text2}</span>
        <span className="navigation-menu-swap">{props.text3}</span>
        <span className="navigation-menu-about">{props.text4}</span>
        <span className="navigation-menu-f-a-q">{props.text41}</span>
      </nav>
      <style jsx>
        {`
          .navigation-menu-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-menu-wallet {
            color: #ffffff;
          }
          .navigation-menu-card {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-menu-gateway {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-menu-bussiness {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-menu-swap {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-menu-about {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-menu-f-a-q {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-menu-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-menu-wallet {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-menu-card {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-menu-gateway {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-menu-bussiness {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-menu-swap {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-menu-about {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-menu-f-a-q {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationMenu.defaultProps = {
  text1: 'Card',
  rootClassName: '',
  text: 'Wallet',
  text4: 'About',
  text2: 'Bussiness',
  text3: 'Swap',
  text11: 'Features',
  text41: 'FAQ',
}

NavigationMenu.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text11: PropTypes.string,
  text41: PropTypes.string,
}

export default NavigationMenu
