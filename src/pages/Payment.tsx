import type { NextPage } from 'next';

import { TipCard } from '../components/tip/TipCard';
import { TransferTokenCard } from '../features/transfer/TransferTokenCard';

const Payment: NextPage = () => {
  return (
    <div className="space-y-2">
      <TipCard />
      <TransferTokenCard />
    </div>
  );
};

export default Payment;
