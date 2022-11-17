export interface UserPost {
  uid: string;
  country: string;
  created_at: Date;
  lv: number;
  items: Array<Object>;
  block_type: boolean;
  pvp_rank: number;
  reward_type: string;
  last_stage: string;
}
