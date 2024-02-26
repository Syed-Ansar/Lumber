module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/"],
      startServerCommand: "rails server -e production",
      assert: {
        preset: "lighthouse:recommended",
        assertions: {
          "uses-rel-preload": "off",
          "uses-rel-preconnect": "off",
        },
      },
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lumber-syed-ansar.vercel.app/",
      token: process.env.REACT_APP_LHCI_GITHUB_TOKEN,
    },
  },
};
