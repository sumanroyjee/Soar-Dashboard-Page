export const mockData = {
  cards: [
    {
      id: '1',
      type: 'visa',
      cardHolder: 'John Doe',
      cardNumber: '3778 **** **** 1234',
      balance: 5756,
      expiryDate: '12/23',
    },
    {
      id: '2',
      type: 'mastercard',
      cardHolder: 'John Doe',
      cardNumber: '3778 **** **** 5678',
      balance: 5756,
      expiryDate: '12/24',
    },
  ],
  transactions: [
    {
      id: '1',
      type: 'credit',
      description: 'Deposit Payroll',
      amount: 2500,
      date: '25 January 2024',
    },
    {
      id: '2',
      type: 'debit',
      description: 'Netflix Subscription',
      amount: 15.99,
      date: '24 January 2024',
    },
    {
      id: '3',
      type: 'credit',
      description: 'Client Payment',
      amount: 1800,
      date: '23 January 2024',
    },
  ],
  users: [
    {
      id: '1',
      name: 'Linda Baker',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: '2',
      name: 'Randy Press',
      role: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    },
    {
      id: '3',
      name: 'Jane Smith',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
  ],
};