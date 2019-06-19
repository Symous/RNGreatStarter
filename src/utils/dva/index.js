import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let store;
let dispatch;

function createApp(opt) {
    app = create(opt);
    app.use(createLoading({}));

    if (!global.registered) opt.models.forEach(model => app.model(model));
    global.registered = true;
    app.start();

    // eslint-disable-next-line no-underscore-dangle
    store = app._store;
    app.getStore = () => store;

    // eslint-disable-next-line prefer-destructuring
    dispatch = store.dispatch;

    app.dispatch = dispatch;
    return app;
}

export default {
    createApp,
    getDispatch() {
        return app.dispatch;
    },
};
