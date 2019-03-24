import { Circuit } from './circuit';

export interface Race {
  Circuit: Circuit;
  date: string;
  raceName: string;
  round: number;
  season: number;
  time: string;
  url: string;
}
