const { COLOR } = require("./color")

module.exports = {
  name: "monokai-theme",
  displayName: "monokai-theme",
  theme: {
    foreground: {
      default: COLOR.WHITE,
    },
    background: {
      default: COLOR.BLACK_DARK,
      success: COLOR.GREEN,
      notice: COLOR.CYAN,
      warning: COLOR.YELLOW,
      danger: COLOR.RED,
      surprise: COLOR.RED,
      info: COLOR.WHITE,
    },
    styles: {
      dialogHeader: {
        background: {
          default: COLOR.BLACK_DARK,
        },
        foreground: {
          default: COLOR.WHITE,
        },
        highlight: {
          md: COLOR.GRAY,
        },
      },
      sidebar: {
        background: {
          default: COLOR.BLACK_DARK,
        }
      },
      dialogFooter: {
        background: {
          default: COLOR.BLACK_DARK,
        }
      },
      transparentOverlay: {
        background: {
          default: `${COLOR.BLACK_DARK}90`,
        },
        foreground: {
          default: COLOR.WHITE,
        },
      },
      paneHeader: {
        background: {
          default: COLOR.BLACK,
          success: COLOR.PURPLE
        },
      },
      pane: {
        background: {
          default: COLOR.BLACK,
        },
      },
      dialog: {
        background: {
          default: COLOR.BLACK,
        },
      },
    },
  },
};
