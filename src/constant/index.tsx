import { FaListAlt } from 'react-icons/fa';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { SiFavro } from 'react-icons/si';
import React, { createContext } from 'react';

//CONTEXTS
export interface AppContextInterface {
  isDetail?: boolean;
  loading?: boolean;
  error?: unknown;
  contact?: any;
  search: string;
  setSearch: (search: string) => void;
  setContact: (search: any[]) => void;
  refetch: unknown;
  setIsDetail: (value: boolean) => void;
  children?: React.ReactNode;
  total?: number;
  totalFav: number;
  favourite: any[];
  setId: (value: number | string) => void;
  setFavourite: (value: any) => void;
  bucket: any[];
  setBucket: (value: any) => void;
  id?: number | string;
}
export const MyContext = createContext<AppContextInterface | null>(null);

//SIDE BAR ITEMS
interface ListItem {
  id: number;
  activeIcon: JSX.Element;
  inActiveIcon: JSX.Element;
  title: string;
  path: string;
  isActive: boolean;
}

export const sideItem: ListItem[] = [
  {
    id: 1,
    activeIcon: <FaListAlt size={30} color="#1e3b49" />,
    inActiveIcon: <FaListAlt size={30} color="#C7C5DD" />,
    title: 'List',
    path: '/',
    isActive: true,
  },
  {
    id: 2,
    activeIcon: <SiFavro size={30} color="#1e3b49" />,
    inActiveIcon: <SiFavro size={30} color="#C7C5DD" />,
    title: 'Favourite',
    path: '/favourite',
    isActive: false,
  },
  {
    id: 3,
    activeIcon: <HiOutlineViewGridAdd size={30} color="#1e3b49" />,
    inActiveIcon: <HiOutlineViewGridAdd size={30} color="#C7C5DD" />,
    title: 'Add',
    path: '/add',
    isActive: false,
  },
];
