import React, { useState } from 'react';

// Define the types for our data
interface CardData {
  img: string;
  title: string;
}

interface TransactionData {
  desc: string;
  date: string;
  amount: string;
}

const CoinPage: React.FC = () => {
  // Use state for dynamic routing between tabs. 
  // Note: If using Next.js or React Router, replace this state with router hooks (e.g., `const { query } = useRouter();`)
  const [activeTab, setActiveTab] = useState<'earn' | 'redeem' | 'transactions'>('earn');

  // Asset Links Provided
  const logoUrl = "https://lucdn.letsupgrade.net/assets/LU_coin_1_6b21f3e154.png";
  
  const earnCards: CardData[] = [
    { img: "https://lucdn.letsupgrade.net/Refer_and_Earn_1_3215f2652b.jpg", title: "Refer signups & Earn 150 LU Coins" },
    { img: "https://lucdn.letsupgrade.net/Weekly_Leaderboard_Top_10_1c36a0312d.jpg", title: "Leaderboard top 10 for the week Earn LU Coins" },
    { img: "https://lucdn.letsupgrade.net/On_Program_Enrollment_de5448011a.jpg", title: "Refer a program to Earn 100 LU Coins" },
    { img: "https://lucdn.letsupgrade.net/On_New_Account_Creation_2e73413ff7.jpg", title: "Create new account and Earn 150 LU Coins" },
    { img: "https://lucdn.letsupgrade.net/Scratch_Cards_6e06781c5b.jpg", title: "Purchase LU Coins from LetsUpgrade.in" },
  ];

  const redeemCards: CardData[] = [
    { img: "https://lucdn.letsupgrade.net/Redeem_for_Paid_Programs_d14407f1a6.jpg", title: "Redeem for Paid Programs" },
    { img: "https://lucdn.letsupgrade.net/Certificates_420cedd668.jpg", title: "Unlock Verified Certificates" },
    { img: "https://lucdn.letsupgrade.net/swag_3c1a9979d1.jpg", title: "Redeem for Exclusive Swags" },
  ];

  const transactionsData: TransactionData[] = [
    { desc: "Credited for enrolling into javascript essentials programs", date: "16 Sep 23", amount: "+100 Coins" },
    { desc: "Earned for enrolling in JavaScript Zero to Hero (5 Days)", date: "07 Sep 23", amount: "+10 Coins" },
    { desc: "Earned for enrolling in JavaScript Programming Essentials Bootcamp (3 Days)", date: "08 Jul 23", amount: "+10 Coins" },
    { desc: "Earned for enrolling in Java Programming Essentials Bootcamp (3 Days)", date: "06 Jul 23", amount: "+10 Coins" },
    { desc: "Earned for signing up on LetsUpgrade", date: "06 Jul 23", amount: "+25 Coins" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-12">
      {/* Top Banner Section */}
      <div className="bg-[#FFFAF0] pt-12 pb-8 px-4 text-center w-full flex flex-col items-center">
        <img src={logoUrl} alt="LU Coin Logo" className="w-20 h-20 mb-4 object-contain" />
        <h3 className="text-gray-500 text-sm font-medium tracking-widest uppercase mb-1">Introducing</h3>
        <h1 className="text-4xl font-serif italic font-bold text-gray-900 mb-4">LU Coins</h1>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          Experience LetsUpgrade with LU COINS - your ever rewarding reward for using our platform. feel valued every time you engage with LU
        </p>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 mt-8 text-center">
        
        {/* Coin Balance */}
        <p className="text-gray-500 mb-2">You currently have</p>
        <div className="flex items-center justify-center gap-2 text-3xl font-bold text-[#F59E0B]">
          <span>155</span>
          <img src={logoUrl} alt="Coin icon" className="w-8 h-8 object-contain" />
          <span>LU Coins</span>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gray-300 mx-auto my-8"></div>

        {/* What is LU Coins */}
        <h2 className="text-xl font-serif italic font-bold mb-4">What is LetsUpgrade (LU) Coins?</h2>
        <p className="text-gray-500 text-sm mb-8 max-w-3xl mx-auto leading-relaxed">
          As a user of the LetsUpgrade platform, LU COINS are the new way to reward you for your efforts. Every time you use LetsUpgrade, we want you to feel special to us.
        </p>

        {/* Dynamic Tabs Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('earn')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'earn' ? 'bg-[#FFF3CD] text-[#F59E0B]' : 'text-[#F59E0B] hover:bg-gray-50'}`}
          >
            Earn
          </button>
          <button 
            onClick={() => setActiveTab('redeem')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'redeem' ? 'bg-[#FFF3CD] text-[#F59E0B]' : 'text-[#F59E0B] hover:bg-gray-50'}`}
          >
            Redeem
          </button>
          <button 
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${activeTab === 'transactions' ? 'bg-[#FFF3CD] text-[#F59E0B]' : 'text-[#F59E0B] hover:bg-gray-50'}`}
          >
            Transactions
          </button>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-8"></div>

        {/* Dynamic Content Rendering */}
        <div className="text-left">
          {activeTab === 'earn' && <EarnSection cards={earnCards} />}
          {activeTab === 'redeem' && <RedeemSection cards={redeemCards} />}
          {activeTab === 'transactions' && <TransactionsSection transactions={transactionsData} />}
        </div>

      </div>
    </div>
  );
};

// --- Sub Components for Dynamic Routes ---

const EarnSection = ({ cards }: { cards: CardData[] }) => (
  <div className="animate-fade-in">
    <div className="text-center mb-8">
      <h2 className="text-xl font-serif italic font-bold mb-3">Earn LU Coins</h2>
      <p className="text-gray-500 text-sm">
        Take a look at all the actions you can perform to earn LU Coins. Make sure you follow the below steps for unlocking said LU Coins
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex flex-col">
          <img src={card.img} alt={card.title} className="w-full h-48 object-cover bg-white" />
          <div className="p-4 bg-white flex-grow border-t border-gray-100">
            <h4 className="font-medium text-sm text-gray-800">{card.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RedeemSection = ({ cards }: { cards: CardData[] }) => (
  <div className="animate-fade-in">
    <div className="text-center mb-8">
      <h2 className="text-xl font-serif italic font-bold mb-3">Redeem LU Coins</h2>
      <p className="text-gray-500 text-sm">
        With LetsUpgrade, you can redeem your LU Coins for amazing gifts and paid programs of LetsUpgrade
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex flex-col">
          <img src={card.img} alt={card.title} className="w-full h-48 object-cover bg-white" />
          <div className="p-4 bg-white flex-grow border-t border-gray-100">
            <h4 className="font-medium text-sm text-gray-800">{card.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TransactionsSection = ({ transactions }: { transactions: TransactionData[] }) => (
  <div className="animate-fade-in">
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
      {transactions.map((tx, idx) => (
        <div key={idx} className={`p-5 flex justify-between items-center bg-white ${idx !== transactions.length - 1 ? 'border-b border-gray-200' : ''}`}>
          <div className="flex flex-col gap-1 pr-4">
            <span className="text-sm font-medium text-gray-800">{tx.desc}</span>
            <span className="text-xs text-gray-400">{tx.date}</span>
          </div>
          <div className="text-[#00BFA5] font-medium whitespace-nowrap">
            {tx.amount}
          </div>
        </div>
      ))}
    </div>
    
    {/* Pagination */}
    <div className="flex justify-between items-center mt-6">
      <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-600 text-sm hover:bg-gray-50 transition-colors">
        Previous
      </button>
      <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-600 text-sm hover:bg-gray-50 transition-colors">
        Next
      </button>
    </div>
  </div>
);

export default CoinPage;