import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <span className="navigation-links-text">{props.text}</span>
        <span className="navigation-links-text1">{props.text1}</span>
        <span className="navigation-links-text2">{props.text11}</span>
        <span className="navigation-links-text3">{props.text2}</span>
        <span className="navigation-links-text4">{props.text3}</span>
        <span className="navigation-links-text5">{props.text4}</span>
        <span className="navigation-links-text6">{props.text41}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text3 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text4 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text5 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links-text6 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text5 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text6 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Card',
  rootClassName: '',
  text: 'Wallet',
  text4: 'About',
  text2: 'Business',
  text3: 'Swap',
  text11: 'Features',
  text41: 'FAQ',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text11: PropTypes.string,
  text41: PropTypes.string,
}

export default NavigationLinks
