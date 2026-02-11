export interface ContactModel {
  id: number;
  created_at: Date;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  age: number;
  user_id: string;
  is_favorite: boolean;
}

export interface ContactCreateModel {
  name: string;
  last_name: string;
  phone: string;
  email: string;
  age: number;
}

export interface ContactUpdateModel {
  name: string;
  last_name: string;
  phone: string;
  email: string;
  age: number;
  is_favorite: boolean;
}
