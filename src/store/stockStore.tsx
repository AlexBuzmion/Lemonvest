import { create } from 'zustand';

const useStore = create((set) => ({
    stocks: {},
    updateStock: (symbol: string, price: string) =>
        set((state: { stocks: { [x: string]: any; }; }) => ({
            stocks: { ...state.stocks, [symbol]: { ...state.stocks[symbol], price }},
        }) 
    ),
}));
  
