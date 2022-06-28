import create from "zustand";
import produce from "immer";

const useStore = create(set => ({
    users: [],
    setUsers: (array) => {
        set(produce((state) => { state.users.push(array) }))
    },
    resetUsers: (array) => {
        set((state) => { state.users = array })
    },

    userIndex: "",
    setUserIndex: (index) => {
        set((state) => ({ hasCookie: state.userIndex = index }))
    },

    hasCookie: false,
    setHasCookie: (boolean) => {
        set((state) => ({ hasCookie: state.hasCookie = boolean }))
    },

    deleteModal: false,
    setDeleteModal: (boolean) => {
        set((state) => ({ hasCookie: state.deleteModal = boolean }))
    },

   
}));

export default useStore;