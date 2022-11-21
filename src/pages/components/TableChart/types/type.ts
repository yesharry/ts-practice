export interface DummyTypes {
  data: DummyDataTypes;
}

export interface DummyDataTypes {
  success: boolean;
  error: null;
  result: PostDataTypes[];
}

export interface PostDataTypes {
  uid: string;
  country: string;
  created_at: string;
  lv: number;
  items: ItemTypes[];
  block_type: boolean;
  pvp_rank: number;
  reward_type: string;
  last_stage: string;
}

export interface ItemTypes {
  itemId: number;
  name: string;
  defence: number;
}
