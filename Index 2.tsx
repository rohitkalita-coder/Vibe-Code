import { useState } from "react";
import GoldBalance from "@/components/GoldBalance";
import StreaksWidget from "@/components/StreaksWidget";
import TransactionHistory from "@/components/TransactionHistory";

const Index = () => {
  const [coinBalance] = useState(1379);
  const currentStreak = 2;

  const milestones = [
    { installment: 3, reward: 50, isCompleted: false, isCurrent: true },
    { installment: 6, reward: 100, isCompleted: false, isCurrent: false },
    { installment: 12, reward: 200, isCompleted: false, isCurrent: false },
  ];

  const transactions = [
    {
      id: "1",
      date: "2025-11-28T15:31:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 2
    },
    {
      id: "2",
      date: "2025-11-26T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 2
    },
    {
      id: "3",
      date: "2025-11-26T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 2
    },
    {
      id: "4",
      date: "2025-11-26T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 2
    },
    {
      id: "5",
      date: "2025-11-26T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 2
    },
    {
      id: "6",
      date: "2025-11-26T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 2
    },
    {
      id: "7",
      date: "2025-11-25T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 1
    },
    {
      id: "8",
      date: "2025-11-25T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 1
    },
    {
      id: "9",
      date: "2025-11-25T19:08:00",
      description: "SIP Payment - Nov 2025",
      coinsEarned: 1,
      installmentNumber: 1
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">Paytm</h1>
              <p className="text-sm text-gold font-semibold">GOLD COINS</p>
            </div>
            <button className="text-sm text-primary font-medium hover:underline">
              Help
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Info Banner */}
        <div className="text-center py-4">
          <p className="text-lg text-foreground font-medium">
            Earn Gold Coins by completing your SIP installments
          </p>
        </div>

        {/* Gold Balance */}
        <GoldBalance coinBalance={coinBalance} />

        {/* Streaks Widget */}
        <StreaksWidget 
          currentStreak={currentStreak}
          milestones={milestones}
        />

        {/* Transaction History */}
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default Index;
