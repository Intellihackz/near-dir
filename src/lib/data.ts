export interface Project {
  name: string;
  twitter: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  // Consumer Apps & Gaming
  { name: "SweatEconomy", twitter: "SweatEconomy", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/SweatEconomy" },
  { name: "HotDAO", twitter: "hotdao_", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/hotdao_" },
  { name: "Cosmose AI", twitter: "CosmoseAI", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/CosmoseAI" },
  { name: "Infinex App", twitter: "infinex_app", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/infinex_app" },
  { name: "DapDapMeUp", twitter: "DapDapMeUp", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/DapDapMeUp" },
  { name: "Play Ember", twitter: "play_ember", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/play_ember" },
  { name: "Learn NEAR", twitter: "LearnNear", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/LearnNear" },
  { name: "ShardDog", twitter: "sharddog", category: "Consumer Apps & Gaming", image: "https://unavatar.io/x/sharddog" },
  // AI Agents
  { name: "NEAR AI", twitter: "near_ai", category: "AI Agents", image: "https://unavatar.io/x/near_ai" },
  { name: "Bitte Protocol", twitter: "BitteProtocol", category: "AI Agents", image: "https://unavatar.io/x/BitteProtocol" },
  { name: "Sender AI", twitter: "Sender_AI", category: "AI Agents", image: "https://unavatar.io/x/Sender_AI" },
  { name: "Questflow", twitter: "questflow", category: "AI Agents", image: "https://unavatar.io/x/questflow" },
  { name: "Memetica AI", twitter: "MemeticaAI", category: "AI Agents", image: "https://unavatar.io/x/MemeticaAI" },
  { name: "AI PGF", twitter: "ai_pgf", category: "AI Agents", image: "https://unavatar.io/x/ai_pgf" },
  // Interop
  { name: "Nuffle Labs", twitter: "nufflelabs", category: "Interop", image: "https://unavatar.io/x/nufflelabs" },
  { name: "Aurora", twitter: "auroraisnear", category: "Interop", image: "https://unavatar.io/x/auroraisnear" },
  { name: "Router Protocol", twitter: "routerprotocol", category: "Interop", image: "https://unavatar.io/x/routerprotocol" },
  // Sig Network
  { name: "Keypom", twitter: "keypomxyz", category: "Sig Network", image: "https://unavatar.io/x/keypomxyz" },
  { name: "Omnilane Labs", twitter: "omnilane_labs", category: "Sig Network", image: "https://unavatar.io/x/omnilane_labs" },
  { name: "MetaMask", twitter: "MetaMask", category: "Sig Network", image: "https://unavatar.io/x/MetaMask" },
  { name: "Wormhole", twitter: "wormhole", category: "Sig Network", image: "https://unavatar.io/x/wormhole" },
  { name: "Eigenlayer", twitter: "eigenlayer", category: "Sig Network", image: "https://unavatar.io/x/eigenlayer" },
  // Add other categories similarly...
  // DeFi
  { name: "Ref Finance", twitter: "finance_ref", category: "DeFi", image: "https://unavatar.io/x/finance_ref" },
  { name: "Meta Pool", twitter: "meta_pool", category: "DeFi", image: "https://unavatar.io/x/meta_pool" },
  { name: "Burrow", twitter: "burrow_finance", category: "DeFi", image: "https://unavatar.io/x/burrow_finance" },
  { name: "Linear Protocol", twitter: "LinearProtocol", category: "DeFi", image: "https://unavatar.io/x/LinearProtocol" },
  { name: "Veax Labs", twitter: "veaxlabs", category: "DeFi", image: "https://unavatar.io/x/veaxlabs" },
  { name: "Inscription Neat", twitter: "inscriptionneat", category: "DeFi", image: "https://unavatar.io/x/inscriptionneat" },

  // Degeneracy
  { name: "Meme Cooking", twitter: "memedotcooking", category: "Degeneracy", image: "https://unavatar.io/x/memedotcooking" },
  { name: "Delta Bot", twitter: "DeltaBotTeam", category: "Degeneracy", image: "https://unavatar.io/x/DeltaBotTeam" },
  { name: "MITTE", twitter: "MITTE_gg", category: "Degeneracy", image: "https://unavatar.io/x/MITTE_gg" },
  { name: "Jump DeFi", twitter: "JumpDeFi", category: "Degeneracy", image: "https://unavatar.io/x/JumpDeFi" },
  { name: "Thunder Hood", twitter: "ThunderHoodLab", category: "Degeneracy", image: "https://unavatar.io/x/ThunderHoodLab" },
  { name: "Intel NEAR", twitter: "intelnear", category: "Degeneracy", image: "https://unavatar.io/x/intelnear" },
  { name: "DEX Screener", twitter: "dexscreener", category: "Degeneracy", image: "https://unavatar.io/x/dexscreener" },
  { name: "Shill GPT", twitter: "shill_gpt", category: "Degeneracy", image: "https://unavatar.io/x/shill_gpt" },
  { name: "Purgeon", twitter: "purgeonnear", category: "Degeneracy", image: "https://unavatar.io/x/purgeonnear" },
  { name: "Blunt DAO", twitter: "BluntDAO", category: "Degeneracy", image: "https://unavatar.io/x/BluntDAO" },

  // Bitcoin
  { name: "XLink", twitter: "XLinkbtc", category: "Bitcoin", image: "https://unavatar.io/x/XLinkbtc" },
  { name: "BitHive", twitter: "bithive_fi", category: "Bitcoin", image: "https://unavatar.io/x/bithive_fi" },
  { name: "Atlas Protocol", twitter: "_atlasprotocol", category: "Bitcoin", image: "https://unavatar.io/x/_atlasprotocol" },
  { name: "Satoshi BTC", twitter: "_SatoshiBTC_", category: "Bitcoin", image: "https://unavatar.io/x/_SatoshiBTC_" },
  { name: "Templar Protocol", twitter: "TemplarProtocol", category: "Bitcoin", image: "https://unavatar.io/x/TemplarProtocol" },
  { name: "Allstake Fi", twitter: "allstake_fi", category: "Bitcoin", image: "https://unavatar.io/x/allstake_fi" },
  { name: "ALEX Lab", twitter: "ALEXLabBTC", category: "Bitcoin", image: "https://unavatar.io/x/ALEXLabBTC" },
  { name: "Ducat", twitter: "Ducatstable", category: "Bitcoin", image: "https://unavatar.io/x/Ducatstable" },

  // Data & Oracles
  { name: "Dune", twitter: "Dune", category: "Data & Oracles", image: "https://unavatar.io/x/Dune" },
  { name: "Flipside Crypto", twitter: "flipsidecrypto", category: "Data & Oracles", image: "https://unavatar.io/x/flipsidecrypto" },
  { name: "Pyth Network", twitter: "PythNetwork", category: "Data & Oracles", image: "https://unavatar.io/x/PythNetwork" },
  { name: "Indexer", twitter: "indexer_xyz", category: "Data & Oracles", image: "https://unavatar.io/x/indexer_xyz" },
  { name: "SubQuery Network", twitter: "SubQueryNetwork", category: "Data & Oracles", image: "https://unavatar.io/x/SubQueryNetwork" },
  { name: "Artemis", twitter: "artemis__xyz", category: "Data & Oracles", image: "https://unavatar.io/x/artemis__xyz" },
  { name: "Nansen", twitter: "nansen_ai", category: "Data & Oracles", image: "https://unavatar.io/x/nansen_ai" },
  { name: "DappRadar", twitter: "DappRadar", category: "Data & Oracles", image: "https://unavatar.io/x/DappRadar" },
  { name: "DefiLlama", twitter: "DefiLlama", category: "Data & Oracles", image: "https://unavatar.io/x/DefiLlama" },

  // Data Monetization
  { name: "Ringfence AI", twitter: "RingfenceAI", category: "Data Monetization", image: "https://unavatar.io/x/RingfenceAI" },
  { name: "Public AI", twitter: "PublicAI_", category: "Data Monetization", image: "https://unavatar.io/x/PublicAI_" },
  { name: "Mizu AI", twitter: "0xmizu_ai", category: "Data Monetization", image: "https://unavatar.io/x/0xmizu_ai" },
  { name: "Masafi", twitter: "getmasafi", category: "Data Monetization", image: "https://unavatar.io/x/getmasafi" },
  { name: "Brainstems", twitter: "Brainstems_", category: "Data Monetization", image: "https://unavatar.io/x/Brainstems_" },

  // Privacy & Compute
  { name: "Nillion Network", twitter: "nillionnetwork", category: "Privacy & Compute", image: "https://unavatar.io/x/nillionnetwork" },
  { name: "Calimero Network", twitter: "CalimeroNetwork", category: "Privacy & Compute", image: "https://unavatar.io/x/CalimeroNetwork" },
  { name: "Reclaim Protocol", twitter: "reclaimprotocol", category: "Privacy & Compute", image: "https://unavatar.io/x/reclaimprotocol" },
  { name: "Compute Labs", twitter: "Compute_Labs", category: "Privacy & Compute", image: "https://unavatar.io/x/Compute_Labs" },
  { name: "Phala Network", twitter: "PhalaNetwork", category: "Privacy & Compute", image: "https://unavatar.io/x/PhalaNetwork" },
  { name: "Aethir Cloud", twitter: "AethirCloud", category: "Privacy & Compute", image: "https://unavatar.io/x/AethirCloud" },
  { name: "Exa Bits", twitter: "exa_bits", category: "Privacy & Compute", image: "https://unavatar.io/x/exa_bits" },
  { name: "Holonym", twitter: "0xHolonym", category: "Privacy & Compute", image: "https://unavatar.io/x/0xHolonym" },

  // RWAs
  { name: "Open Forest", twitter: "OpenForest_", category: "RWAs", image: "https://unavatar.io/x/OpenForest_" },
  { name: "RWA.xyz", twitter: "RWA_xyz", category: "RWAs", image: "https://unavatar.io/x/RWA_xyz" },
  { name: "Libre Cap", twitter: "librecap", category: "RWAs", image: "https://unavatar.io/x/librecap" },
  { name: "D3", twitter: "D3inc", category: "RWAs", image: "https://unavatar.io/x/D3inc" },
  { name: "El Cafe Cartel", twitter: "ElCafeCartel", category: "RWAs", image: "https://unavatar.io/x/ElCafeCartel" },

  // Infra & Tools
  { name: "Fast NEAR", twitter: "fast_near", category: "Infra & Tools", image: "https://unavatar.io/x/fast_near" },
  { name: "Lava Network", twitter: "lavanetxyz", category: "Infra & Tools", image: "https://unavatar.io/x/lavanetxyz" },
  { name: "NEAR Blocks", twitter: "nearblocks", category: "Infra & Tools", image: "https://unavatar.io/x/nearblocks" },
  { name: "QuickNode", twitter: "QuickNode", category: "Infra & Tools", image: "https://unavatar.io/x/QuickNode" },
  { name: "Dapplets", twitter: "dapplets_org", category: "Infra & Tools", image: "https://unavatar.io/x/dapplets_org" },
  { name: "DRPC", twitter: "drpcorg", category: "Infra & Tools", image: "https://unavatar.io/x/drpcorg" },
  { name: "Ankr", twitter: "ankr", category: "Infra & Tools", image: "https://unavatar.io/x/ankr" },
  { name: "BlockPI", twitter: "RealBlockPI", category: "Infra & Tools", image: "https://unavatar.io/x/RealBlockPI" },
  { name: "GetBlock", twitter: "getblockio", category: "Infra & Tools", image: "https://unavatar.io/x/getblockio" },
  { name: "Web4", twitter: "web4near", category: "Infra & Tools", image: "https://unavatar.io/x/web4near" },
  { name: "Mailchain", twitter: "Mailchain_xyz", category: "Infra & Tools", image: "https://unavatar.io/x/Mailchain_xyz" },
  { name: "Collab.Land", twitter: "Collab_Land_", category: "Infra & Tools", image: "https://unavatar.io/x/Collab_Land_" },
  { name: "Nada Bots", twitter: "nadabots", category: "Infra & Tools", image: "https://unavatar.io/x/nadabots" },
  { name: "HAPI", twitter: "i_am_hapi_one", category: "Infra & Tools", image: "https://unavatar.io/x/i_am_hapi_one" },
  {
    name: "RequestFinance",
    twitter: "RequestFinance",
    category: "Payments",
    image: "https://unavatar.io/twitter/RequestFinance"
  },
  {
    name: "Transak",
    twitter: "Transak",
    category: "Payments",
    image: "https://unavatar.io/twitter/Transak"
  },
  {
    name: "MoonPay",
    twitter: "moonpay",
    category: "Payments",
    image: "https://unavatar.io/twitter/moonpay"
  },
  {
    name: "Onramper",
    twitter: "GetOnramper",
    category: "Payments",
    image: "https://unavatar.io/twitter/GetOnramper"
  },
  {
    name: "Ramper",
    twitter: "ramper_xyz",
    category: "Payments",
    image: "https://unavatar.io/twitter/ramper_xyz"
  },
  {
    name: "AlchemyPay",
    twitter: "AlchemyPay",
    category: "Payments",
    image: "https://unavatar.io/twitter/AlchemyPay"
  },
  {
    name: "Nevermined",
    twitter: "Nevermined_io",
    category: "Payments",
    image: "https://unavatar.io/twitter/Nevermined_io"
  },
  {
    name: "HeroesBuild",
    twitter: "HeroesBuid",
    category: "Payments",
    image: "https://unavatar.io/twitter/HeroesBuid"
  },
  {
    name: "Potlock",
    twitter: "potlock_",
    category: "Payments",
    image: "https://unavatar.io/twitter/potlock_"
  },
  {
    name: "NEAR Dev Hub Portal",
    twitter: "NEARDevHub",
    category: "Payments",
    image: "https://unavatar.io/twitter/NEARDevHub"
  },
  {
    name: "Meteor Wallet",
    twitter: "MeteorWallet",
    category: "Wallets",
    image: "https://unavatar.io/twitter/MeteorWallet"
  },
  {
    name: "Here Wallet",
    twitter: "here_wallet",
    category: "Wallets",
    image: "https://unavatar.io/twitter/here_wallet"
  },
  {
    name: "Nightly",
    twitter: "Nightly_app",
    category: "Wallets",
    image: "https://unavatar.io/twitter/Nightly_app"
  },
  {
    name: "MyNearWallet",
    twitter: "MyNearWallet",
    category: "Wallets",
    image: "https://unavatar.io/twitter/MyNearWallet"
  },
  {
    name: "NEAR Mobile",
    twitter: "NEARMobile_app",
    category: "Wallets",
    image: "https://unavatar.io/twitter/NEARMobile_app"
  },
  {
    name: "Bitget Wallet",
    twitter: "BitgetWallet",
    category: "Wallets",
    image: "https://unavatar.io/twitter/BitgetWallet"
  },
  {
    name: "Wallet",
    twitter: "wallet",
    category: "Wallets",
    image: "https://unavatar.io/twitter/wallet"
  },
  {
    name: "Coin98 Wallet",
    twitter: "coin98_wallet",
    category: "Wallets",
    image: "https://unavatar.io/twitter/coin98_wallet"
  }
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));
