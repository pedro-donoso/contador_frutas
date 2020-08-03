import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        frutas: [{
                id: 1,
                nombre: 'Manzana',
                cantidad: 0
            },
            {
                id: 2,
                nombre: 'Pera',
                cantidad: 0
            },
            {
                id: 3,
                nombre: 'Naranja',
                cantidad: 0
            },
            {
                id: 4,
                nombre: 'Higo',
                cantidad: 0
            }
        ]
    },
    mutations: {
        aumentar(state, index) {
            state.frutas[index].cantidad++
        },
        reiniciar(state) {
            for (const iterator of state.frutas) {
                iterator.cantidad = 0;
            }
        }
    },
    actions: {

    }
})