type AppState = {
  darkMode: boolean;
  language: 'id' | 'en';
  orderBook: string[][];
};

type AppAction =
  | {type: 'CHANGE_THEME'}
  | {type: 'CHANGE_LANGUAGE'}
  | {type: 'SET_ORDER_BOOK'; orderBook: string[]};

type AppDispatch = (action: AppAction) => void;
