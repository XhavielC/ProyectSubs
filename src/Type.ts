export interface SubscripcionesProps {
  id: number;
  type: string;
  price: string;
}

export interface DisplayItemsProps {
  id: number;
  type: string;
  price: string;
  eliminarItem: (id: number) => void;
  editItem: (id: number) => void;
}

export interface BalanceProps {
  count: number;
  sub: SubscripcionesProps[];
  gastado: number;
  setGastado: (value: number) => void;
}

export interface Props {
  setType: (value: string) => void;
  setPrice: (value: string) => void;
  setSub: (value: SubscripcionesProps[]) => void;
  price: string;
  type: string;
  sub: SubscripcionesProps[];
  editId: string;
  setEditId: (value: string) => void;
  gastado: number;
  count: number;
}

export interface SubProps {
  sub: SubscripcionesProps[];
  eliminarItem: (id: number) => void;
  editItem: (id: number) => void;
}

export interface EliminarButtonProps {
  id: number;
  eliminarItem: (id: number) => void;
}
