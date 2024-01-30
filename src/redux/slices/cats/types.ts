export interface CatsState {
  id: string;
  url: string;
  width: number;
  height: number;
  favorite: boolean
  breeds: Array<any>
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error'
}

export interface CatsInitialState {
  cats: CatsState[]
  status: Status
}

export const LIMIT_PER_PAGE = 15;
