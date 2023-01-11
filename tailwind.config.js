module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "FourUnits": "64px",
        "Unit": "16px",
        "HalfUnit": "8px",
        "FiveUnits": "80px",
        "TwoUnits": "32px",
        "ThreeUnits": "48px",
        "SixUnits": "96px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Round": "50%",
        "Radius8": "8px",
        "Radius4": "4px"
      },
      "scale": {
        "XXLarge": "288px",
        "XLarge": "192px",
        "XSmall": "16px",
        "Medium": "96px",
        "Large": "144px",
        "MaxWidth": "1400px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}