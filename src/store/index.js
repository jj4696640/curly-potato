import { createStore } from "vuex";
import axiosClient from "../axios";

const profiles = [
    {
        "id": 1,
        "caseRef": "CRB-000-000-CPS",
        "station": "Mukono Police Station",
        "offence": "Forgery",
        "briefsOnCase": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis hendrerit metus eu fermentum. Integer rutrum aliquet sem sed hendrerit. Nunc eu mollis metus. Nunc pharetra interdum erat",
        "image": [
            { "front": "https://randomuser.me/api/portraits/men/23.jpg" },
            { "left": "https://randomuser.me/api/portraits/men/24.jpg" },
            { "right": "https://randomuser.me/api/portraits/men/25.jpg" },
            { "hind": "https://randomuser.me/api/portraits/men/26.jpg" },
        ],
        "name": "Joshua Ogwang",
        "sex": "Male",
        "age": "25",
        "nationality": "Ugandan",
        "nin": "qwerty12345",
        "otherIdNo": "",
        "tribe": "Lango",
        "religion": "Anglican",
        "maritalStatus": "Married",
        "placeOfBirth": "Lira",
        "presentAddress": "Kyanja",
        "contacts": [
            { "telephone": "0704073614" },
            { "telephone": "0704073613" },
            { "telephone": "0704073653" },
        ],
        "distinguishingFeature": "bald head",
        "height": "154",
        "bodyBuild": "wide chest",
        "eyeColor": "black",
        "hairColor": "black",
        "levelOfEducation": "O Level",
        "occupation": "Driver",
        "parents": [
            { "name": "Augustino Pinchet", "residence": "Najjera", "relationship": "Father", "telephone": "0704073613" },
            { "name": "Mary Rose Pinchet", "residence": "Najjera", "relationship": "mother", "telephone": "0704073655" },
        ],
        "spouse": [
            { "name": "Ruby Anne", "relationship": "wife", "residence": "Kyanja", "telephone": "070403619" },
            { "name": "Ruby Anne", "relationship": "wife", "residence": "Kyanja", "telephone": "070403619" },
        ],
        "associates": [
            { "name": "Tom Wilkinson", "residence": "Kira", "telephone": "0772531020" },
            { "name": "James Abednego", "residence": "Nansana", "telephone": "0772531120" },
            { "name": "Joana King", "residence": "Bugolobi", "telephone": "0772545120" },
        ],
        "languagesSpoken": "English, Luganda, Freanch, Swahili",
        "travelHistory": "Juba, Nairobi, Lubumbashi",
        "previousCriminalRecord": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis hendrerit metus eu fermentum. Integer rutrum aliquet sem sed hendrerit. Nunc eu mollis metus. Nunc pharetra interdum erat"
    }
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('token')
        },
        profiles: [...profiles]
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post("/register", user).then(({ data }) => {
                commit('setUser', data)
                return data;
            })
        },
        login({ commit }, user) {
            return axiosClient.post("/login", user).then(({ data }) => {
                commit('setUser', data)
                return data;
            })
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then(response => {
                commit("logout")
                return response
            })
        }
    },
    mutations: {
        logout: state => {
            state.user.data = {}
            state.user.token = null;
            sessionStorage.removeItem('token')
        },
        setUser: (state, userData) => {
            state.user.token = userData.token
            state.user.data = userData.user
            sessionStorage.setItem('token', userData.token)
        }
    },
    modules: {}
})

export default store;