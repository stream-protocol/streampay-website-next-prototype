import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks2 = (props) => {
  return (
    <>
      <nav className={`navigation-links2-nav ${props.rootClassName} `}>
        <span className="navigation-links2-text">{props.text}</span>
        <span className="navigation-links2-text1">{props.text1}</span>
        <span className="navigation-links2-text2">{props.text2}</span>
        <span className="navigation-links2-text3">{props.text3}</span>
        <span className="navigation-links2-text4">{props.text4}</span>
        <span className="navigation-links2-text5">{props.text41}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links2-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navigation-links2-text {
            color: #ffffff;
          }
          .navigation-links2-text1 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links2-text2 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links2-text3 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links2-text4 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links2-text5 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }

          .navigation-links2-root-class-name10 {
            align-self: center;
          }
          @media (max-width: 767px) {
            .navigation-links2-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links2-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks2.defaultProps = {
  rootClassName: '',
  text1: 'Card',
  text4: 'About',
  text: 'Wallet',
  text3: 'Bussiness',
  text2: 'Pricing',
  text41: 'FAQ',
}

NavigationLinks2.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text41: PropTypes.string,
}

export default NavigationLinks2
