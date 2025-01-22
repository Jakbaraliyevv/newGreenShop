export interface FieldType {
  email?: string;
  password?: string;
  remember?: string;
}

export interface RegisterType {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
}

export interface WishListItemType {
  flower_id: string;
  route_path: string;
}

export interface AuthUser {
  _id?: string;
  email?: string;
  name?: string;
  surname?: string;
  profile_photo?: string;
  create_account_limit?: number;
  phone_number?: string;
  wishlist?: WishListItemType[];
  username?: string;
  country?: string;
  town?: string;
  street_address?: string;
  additional_street_address?: string;
  state?: string;
  zip?: string;
  followers?: string[];
  permission?: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}

// hero slider type
export interface HeroSliderType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  big_img_url: string;
  small_img_url: string;
  buttonText: string;
}

// home: category type
export interface CategoryType {
  count: number;
  created_at: string;
  created_by: string;
  route_path: string;
  title: string;
  __v: number;
  _id: string;
}

// discount type
export interface DiscounType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}

export interface CartType {
  category: string;
  comments: string[];
  created_at: string;
  created_by: string;
  description: string;
  detailed_images: string[];
  discount: boolean;
  discount_price: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: string[];
  title: string;
  views: number;
  __v: number;
  _id: string;
  count: number;
  userPrice: number;
}

export interface TitleCategoryType {
  id: number;
  title: string;
  label: string;
}

export interface DataTYpe {
  isLoading?: Boolean;
  isError?: Boolean;
  data?: CartType;
}

export interface InfoMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  vektor: string;
}

export interface PostMockItemType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  img: string;
}

export interface FooterLinksType {
  id: number;
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
  link5?: string;
}

export interface AdviceMockItemType {
  id: number;
  title: string;
  description: string;
  img: string;
  border: boolean;
}
