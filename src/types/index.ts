export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  description: string;
  amount: number;
  date: string;
}

export interface Card {
  id: string;
  type: string;
  cardHolder: string;
  cardNumber: string;
  balance: number;
  expiryDate: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}