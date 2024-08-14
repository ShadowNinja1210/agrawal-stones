import { create } from "zustand";

type StateStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  servicesTitle: string;
  setServicesTitle: (service: string) => void;
};

const useStateStore = create<StateStore>((set) => ({
  isLoading: true,
  setIsLoading: (loading) => {
    console.log("Setting the loading state to ", loading);
    set({ isLoading: loading });
  },
  servicesTitle: "Our Services",
  setServicesTitle: (service) => {
    console.log("Getting the service:", service);
    set({ servicesTitle: service });
  },
}));

export default useStateStore;
