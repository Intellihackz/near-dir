import { IconType } from 'react-icons';
import { FaGamepad, FaRobot, FaExchangeAlt, FaCoins, FaDice, FaBitcoin, FaChartBar, FaDatabase, FaUserSecret, FaGift, FaTools, FaCreditCard, FaWallet } from 'react-icons/fa';

export interface Project {
  name: string;
  twitter: string;
  description?: string;
}

export interface Category {
  name: string;
  icon: IconType;
  projects: Project[];
}

export const nearProjects: Category[] = [
  {
    name: "Consumer Apps & Gaming",
    icon: FaGamepad,
    projects: [
      { name: "SweatEconomy", twitter: "SweatEconomy", description: "Move-to-earn app rewarding physical activity" },
      { name: "HotDAO", twitter: "hotdao_", description: "Community-driven development platform" },
      { name: "Cosmose AI", twitter: "CosmoseAI", description: "AI-powered marketing solutions" },
      { name: "Infinex", twitter: "infinex_app", description: "Decentralized trading platform" },
      { name: "DapDap", twitter: "DapDapMeUp", description: "Web3 social platform" },
      { name: "Ember", twitter: "play_ember", description: "Blockchain-based gaming ecosystem" },
      { name: "LearnNear", twitter: "LearnNear", description: "Educational platform for NEAR" },
      { name: "ShardDog", twitter: "sharddog", description: "NFT-based virtual pet game" },
    ]
  },
  {
    name: "AI Agents",
    icon: FaRobot,
    projects: [
      { name: "NEAR AI", twitter: "near_ai", description: "AI integration for NEAR ecosystem" },
      { name: "Bitte Protocol", twitter: "BitteProtocol", description: "AI-powered DeFi protocol" },
      { name: "Sender AI", twitter: "Sender_AI", description: "AI-assisted messaging platform" },
      { name: "QuestFlow", twitter: "questflow", description: "AI-driven quest creation tool" },
      { name: "Memetica AI", twitter: "MemeticaAI", description: "AI meme generation platform" },
      { name: "AI PGF", twitter: "ai_pgf", description: "AI-based public goods funding" },
    ]
  },
  // ... Add the rest of the categories and projects here
];

