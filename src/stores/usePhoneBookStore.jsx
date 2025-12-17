import { create, } from "zustand";

const usePhoneBookStore = create((set) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) => 
    set((state) => ({phoneBook: [...state.phoneBook, {id: Date.now(), name, phoneNumber}],
  })),

  removeContact: (id) =>  set((state) => ({phoneBook: state.phoneBook.filter(item => item.id !== id)})),
  removeAllContact: () => set(() => ({phoneBook: []}))
}));

export default usePhoneBookStore;