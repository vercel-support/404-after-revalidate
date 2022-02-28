module.exports = {
  trailingSlash: true,
  images: {
    domains: ["www.loyaldev3.nl", "cms.loyaldev3.nl"],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/clientenondersteuning/",
        destination: "/hoe-we-helpen/werkwijze-en-kwaliteit-van-hulp/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/hulp-aan-huis/",
        destination: "/hoe-we-helpen/hulp-bij-opvoeden-en-opgroeien/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/kwaliteit-van-hulp/",
        destination: "/hoe-we-helpen/werkwijze-en-kwaliteit-van-hulp/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/kwaliteit-van-hulp/ervaringen-delen/",
        destination: "/ervaringen-delen/",
        permanent: true,
      },
      {
        source:
          "/hoe-we-helpen/kwaliteit-van-hulp/klachten-en-vertrouwenspersoon/",
        destination: "/ervaringen-delen/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/langdurige-opvang/",
        destination: "/hoe-we-helpen/pleegzorg-en-gezinshuizen/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/privacy/",
        destination: "/hoe-we-helpen/werkwijze-en-kwaliteit-van-hulp/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/tijdelijke-opvang/",
        destination: "/hoe-we-helpen/tijdelijk-verblijf/",
        permanent: true,
      },
      {
        source: "/hoe-we-helpen/werkwijze/",
        destination: "/hoe-we-helpen/werkwijze-en-kwaliteit-van-hulp/",
        permanent: true,
      },
      {
        source: "/kalender/voorlichtingsavond-pleegzorg-8-maart/",
        destination: "/agenda/voorlichtingsavond-pleegzorg-8-maart/",
        permanent: true,
      },
      {
        source: "/news/aandacht-voor-eenzame-jongeren/ ",
        destination: "/nieuws/aandacht-voor-eenzame-jongeren/",
        permanent: true,
      },
      {
        source:
          "/news/beter-passende-jeugdhulp-in-een-betaalbaarder-zorgstelsel-1-1/",
        destination: "/over-ons/nieuws/",
        permanent: true,
      },
      {
        source: "/news/moeders/",
        destination: "/nieuws/moeders/",
        permanent: true,
      },
      {
        source: "/news/pijn-onder-mijn-voet/",
        destination: "/nieuws/pijn-onder-mijn-voet/",
        permanent: true,
      },
      {
        source: "/news/samenwerking-6gorillas-en-oosterpoort/",
        destination: "/nieuws/samenwerking-6gorillas-en-oosterpoort/",
        permanent: true,
      },
      {
        source: "/news/terugblik-op-2020-met-cijfers-en-verhalen/",
        destination: "/over-ons/nieuws/",
        permanent: true,
      },
      {
        source: "/news/wijziging-woonplaatsbeginsel-jeugdwet/",
        destination: "/nieuws/wijziging-woonplaatsbeginsel-jeugdwet/",
        permanent: true,
      },
      {
        source: "/news/week-van-de-pleegzorg-2021/",
        destination: "/over-ons/nieuws/",
        permanent: true,
      },
      {
        source: "/over-ons/nieuws-overzicht/",
        destination: "/over-ons/nieuws/",
        permanent: true,
      },
      {
        source: "/over-ons/onze-medezeggenschapsraden/",
        destination: "/over-ons/medezeggenschapsraden/",
        permanent: true,
      },
      {
        source: "/over-ons/onze-medezeggenschapsraden/cliëntenraad/",
        destination: "/over-ons/medezeggenschapsraden/cliëntenraad/",
        permanent: true,
      },
      {
        source: "/over-ons/onze-medezeggenschapsraden/ondernemingsraad/",
        destination: "/over-ons/",
        permanent: true,
      },
      {
        source: "/over-ons/onze-medezeggenschapsraden/pleegouderraad/",
        destination: "/over-ons/medezeggenschapsraden/pleegouderraad/",
        permanent: true,
      },
      {
        source: "/over-ons/verhalen/",
        destination: "/over-ons/ervaringsverhalen/",
        permanent: true,
      },
      {
        source: "/pleegzorg/",
        destination: "/pleegouders/",
        permanent: true,
      },
      {
        source: "/pleegzorg/ik-ben-pleegouder/",
        destination: "/pleegouders/ik-ben-pleegouder/",
        permanent: true,
      },
      {
        source: "/pleegzorg/pleegouder-worden/",
        destination: "/pleegouders/ik-wil-pleegouder-worden/",
        permanent: true,
      },
      {
        source: "/pleegzorg/aandacht-voor-pleegzorg/",
        destination: "/pleegouders/aandacht-voor-pleegzorg/",
        permanent: true,
      },
      {
        source: "/verhalen/laat-je-inspireren-door-corrie/",
        destination: "/ervaringsverhalen/laat-je-inspireren-door-corrie/",
        permanent: true,
      },
      {
        source: "/verhalen/laat-je-inspireren-door-micheal-en-gemma/",
        destination:
          "/ervaringsverhalen/laat-je-inspireren-door-micheal-en-gemma/",
        permanent: true,
      },
      {
        source: "/verhalen/luister-naar-bas-en-wouter/",
        destination: "/ervaringsverhalen/luister-naar-bas-en-wouter/",
        permanent: true,
      },
      {
        source: "/verhalen/luister-naar-stephan/",
        destination: "/ervaringsverhalen/luister-naar-stephan/",
        permanent: true,
      },
      {
        source: "/verhalen/stap-in-de-wereld-van-annemiek/",
        destination: "/ervaringsverhalen/stap-in-de-wereld-van-annemiek/",
        permanent: true,
      },
      {
        source: "/verhalen/stap-in-de-wereld-van-bonny/",
        destination: "/ervaringsverhalen/stap-in-de-wereld-van-bonny/",
        permanent: true,
      },
      {
        source: "/verhalen/stap-in-de-wereld-van-een-pleeggezin/",
        destination: "/ervaringsverhalen/stap-in-de-wereld-van-een-pleeggezin/",
        permanent: true,
      },
      {
        source: "/wat-we-doen/",
        destination: "/hulp-bij/",
        permanent: true,
      },
      {
        source: "/wat-we-doen/gedrag-en-ontwikkeling/",
        destination: "/hulp-bij/gedrag-en-sociale-ontwikkeling/",
        permanent: true,
      },
      {
        source: "/wat-we-doen/gezin-en-opvoeding/",
        destination: "/hulp-bij/gezin-en-opvoeding/",
        permanent: true,
      },
      {
        source: "/wat-we-doen/pleegzorg/",
        destination: "/wat-we-doen/pleegzorg-en-gezinshuizen/",
        permanent: true,
      },
      {
        source: "/wat-we-doen/scheiding/",
        destination: "/hulp-bij/complexe-scheiding/",
        permanent: true,
      },
      {
        source: "/wat-we-doen/spoedeisende-hulp/",
        destination: "/hulp-bij/crisissituaties/",
        permanent: true,
      },
      {
        source: "/werken-bij/",
        destination: "/vacatures/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/ambulant-hulpverlener-b/",
        destination: "/vacatures/ambulant-hulpverlener-b/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/gedragswetenschapper-b/",
        destination: "/vacatures/gedragswetenschapper-b/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/open-sollicitatie/",
        destination: "/vacatures/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/salarisadministrateur/",
        destination: "/vacatures/salarisadministrateur/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/mst-multi-systeem-therapeut/",
        destination: "/vacatures/mst-multi-systeem-therapeut/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/functioneel-applicatiebeheerder/",
        destination: "/vacatures/functioneel-applicatiebeheerder/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/gedragswetenschapper-a/",
        destination: "/vacatures/gedragswetenschapper-a/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/adviseur-zorgcontrol-2-fte/",
        destination: "/vacatures/adviseur-zorgcontrol-2-fte/",
        permanent: true,
      },
      {
        source: "/werken-bij-ons/trajectbegeleider-ambulant-hulpverlener-a/",
        destination: "/vacatures/trajectbegeleider-ambulant-hulpverlener-a/",
        permanent: true,
      },
      {
        source: "/privacyverklaring/",
        destination: "/wat-we-doen/werkwijze-en-kwaliteit-van-hulp/",
        permanent: true,
      },
    ];
  },
};
