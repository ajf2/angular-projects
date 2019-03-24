import { RaceTable } from './race-table';

export interface MotorRacingData {
  MRData: MRData;
}

export interface MRData {
  RaceTable: RaceTable;
  limit: number;
  offset: number;
  series: string;
  total: number;
  url: string;
}
