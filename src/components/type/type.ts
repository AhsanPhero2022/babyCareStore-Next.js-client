import { SrvRecord } from "dns";

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  status: string;
  time_for_sorting: string;
  flash_sale: boolean;
  discount: string;
};

