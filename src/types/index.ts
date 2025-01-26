export interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType;
}

export interface MetricCard {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  status: 'pending' | 'completed' | 'flagged';
}
