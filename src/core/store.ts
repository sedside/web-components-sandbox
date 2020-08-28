// @ts-nocheck

import { createStore, thunk } from 'easy-peasy';

export default createStore({
    asd: 'asd',
    fetch: thunk(async () => {
        await fetch('http://nonexistent-site.com/nonexistent-url');
    })
});