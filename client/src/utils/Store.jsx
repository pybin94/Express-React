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

    userId: "",
    setUserId: (data) => {
        set((state) => ({ userId: state.userId = data }))
    },

    userPw: "",
    setUserPw: (data) => {
        set((state) => ({ userPw: state.userPw = data }))
    },

    userPwCheck: "",
    setUserPwCheck: (data) => {
        set((state) => ({ userPwCheck: state.userPwCheck = data }))
    },

    userName: "",
    setUserName: (data) => {
        set((state) => ({ userName: state.userName = data }))
    },

    userIndex: "",
    setUserIndex: (index) => {
        set((state) => ({ userIndex: state.userIndex = index }))
    },

    hasCookie: false,
    setHasCookie: (boolean) => {
        set((state) => ({ hasCookie: state.hasCookie = boolean }))
    },

    userAuth: false,
    setUserAuth: (boolean) => {
        set((state) => ({ userAuth: state.userAuth = boolean }))
    },

    deleteModal: false,
    setDeleteModal: (boolean) => {
        set((state) => ({ deleteModal: state.deleteModal = boolean }))
    },

}));

export default useStore;