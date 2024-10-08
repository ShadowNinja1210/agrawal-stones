import { create } from "zustand";

export type modalType = "Search";

type StateStore = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  servicesTitle: string;
  setServicesTitle: (service: string) => void;
  type: modalType | null;
  isOpen: boolean;
  onOpen: (type: modalType) => void;
  onClose: () => void;
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
  type: null,
  isOpen: false,
  onOpen: (type) => {
    console.log("Opening the modal of type ", type);
    set({ type, isOpen: true });
  },
  onClose: () => {
    console.log("Closing the modal");
    set({ isOpen: false, type: null });
  },
}));

export default useStateStore;
