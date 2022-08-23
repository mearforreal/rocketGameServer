export interface OnUserVerifyInterface {
  device_id: string;
}

export interface OnVerifyUserInterface {
  device_id: string;
  facebook_id: string;
}

export interface OnVerifyUserInterface {
  table_id: string;
  player_id: string;
}

export interface OnEnterRocketInterface {
  player_id: string;
  coin_bet: number;
}

export interface OnJumpInterface {
  player_id: string;
  coin_bet: number;
}

export interface onRoomEnterInterface {
  table_id: string;
  player_id: string;
}
