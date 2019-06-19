import React from 'react';
import { Provider } from 'react-redux';
import dva from '@/utils/dva';
import userModel from '@/models/UserModel';

import Router from '@/Router';

const dvaApp = dva.createApp({
    initialState: {},
    models: [userModel],
});
const store = dvaApp.getStore();

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
export default App;
