import { Size } from './app-enums';

export interface TerrariumInfo
{
  title: string;
  image_sources: string[];
  description: string;
  size: Size;
  price: number;

}
