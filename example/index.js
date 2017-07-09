import React from 'react';
import { render } from 'react-dom';
import App from './App';

// load middlewares
import middlewares from './middlewares';

import {
    start,
} from '../lib';

// model
import user from './models/User';
import todos from './models/Todos';

// relation
import relation from './relations';

// 验证start返回一个组件
const MyComponent = start({
    component: App,
    models: {
        user,
        todos
    },
    middlewares,
    relation
});

render(<MyComponent />, document.querySelector('#root'));
