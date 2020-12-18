interface Document {
  id: number;
}

export interface Category extends Document {
  name: string;
  icon: string;
  iconColor?: string;
}

export interface Campaign extends Document {
  name: string;
}
