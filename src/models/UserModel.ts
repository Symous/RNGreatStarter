// eslint-disable-next-line no-unused-vars
import Model from '@/utils/dva/Model';

export default {
    namespace: 'userModel',

    state: {
        status: 'logout',
        currentUser: '',
    },

    effects: {
        *login({ payload, callback }, { put }) {
            const { username, password } = payload;
            const status = username === 'rngs' && password === '999' ? 'login' : 'logout';
            yield put({
                type: 'changeLoginStatus',
                payload: {
                    status,
                    currentUser: username,
                },
            });
            callback(status === 'login');
        },
    },
    reducers: {
        changeLoginStatus(state, { payload }) {
            return {
                ...state,
                status: payload.status,
                currentUser: payload.currentUser,
            };
        },
    },
} as Model;
