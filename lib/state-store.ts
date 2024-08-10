import { create } from "zustand";

type StateStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const useStateStore = create<StateStore>((set) => ({
  isLoading: true,
  setIsLoading: (loading) => {
    console.log("Setting the loading state to ", loading);
    set({ isLoading: loading });
  },
}));

export default useStateStore;
