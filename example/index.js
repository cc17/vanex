import {
    start,
    use,
} from '../lib';

import App from './App';
import React from 'react';
// load middlewares
import middlewares from './middlewares';
// relation
import relation from './relations';
import { render } from 'react-dom';

// model
import user from './models/User';

use({
    onEffect: middlewares
});

// 直接渲染
start({
    component: App,
    models: {
        user,
    },
    relation,
    container: '#root'
});
