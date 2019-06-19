/* eslint-disable no-unused-vars */
import { Reducer } from 'redux';
import { Effect } from '@/utils/dva/Model';

export interface CurrentUser {
    name?: string;
    status?: string;
}

export interface UserModelState {
    currentUser?: CurrentUser;
}

export interface UserModelType {
    namespace: string;
    state: UserModelState;
    effects: {
        login: Effect;
        logout?: Effect;
    };
    reducer: {
        save: Reducer<any>;
    };
}

const UserModel: UserModelType = {
    namespace: 'userModel',
    state: {
        currentUser: {},
    },
    effects: {
        *login({ payload }, { put }) {
            yield put({
                type: 'save',
                payload,
            });
        },
    },
    reducer: {
        save(state, { payload }) {
            return {
                ...state,
                currentUser: payload,
            };
        },
    },
};

export default UserModel;
