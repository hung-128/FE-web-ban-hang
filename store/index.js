export const state = () => ({
    counter: 0
})

export const getters = {
    getCounter(state) {
        return state.counter
    }
}

export const mutations = {
    increment(state) {
        state.counter++
    }
}

export const actions = {
    // login(context, data, { $axios }) {
    //     this.$axios.post('api/register', data);
    //     // console.log(csrf);
    //     // console.log(response)
    //     // make request

    //     //   state.counter = res.data;
    //     //   return res.data;
    // },
    register(context, dataHeader) {

        this.$axios.$get('sanctum/csrf-cookie')
        console.log(csrfToken);

        this.$axios.post('api/register', {
            headers: {
                'Custom-Header': 'Custom Value',
            },
            data: dataHeader
        })
    }
}