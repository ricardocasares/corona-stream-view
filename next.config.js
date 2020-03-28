const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    env: {
      DAYS: 15,
      COUNTRY: "Poland",
      ENDPOINT: "https://covid19-graphql.now.sh/",
      PROTOCOL: phase === PHASE_DEVELOPMENT_SERVER ? "http" : "https"
    }
  };
};
