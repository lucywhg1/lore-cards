interface Document {
  id: number;
}

export interface LoreCard extends Document {
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  avatarUrl: string;
  categoryId: number;
}

export interface Category extends Document {
  name: string;
  icon: string;
  iconColor?: string;
}

export interface Campaign extends Document {
  name: string;
}
