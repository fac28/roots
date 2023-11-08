export type Veggie = {
  id: number;
  name: string;
  sow_in: number[];
  sow_dir: number[];
  companion: string;
  harvest: number;
};

export type User = {
  id: number;
  name: string;
};

export type VegIdObject = { veg_id: number };
