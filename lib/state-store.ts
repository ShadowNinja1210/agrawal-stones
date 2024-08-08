import { create } from "zustand";

type StateStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const useStateStore = create<StateStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export default useStateStore;
