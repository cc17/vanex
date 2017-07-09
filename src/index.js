import * as mobx from 'mobx';
import * as mobxReact from 'mobx-react';

import Relation from './vanex-relation';
import createModel from './create-model';
import extendModel from './extend-model';
import start from './start';

export default {
    ...mobx,
    ...mobxReact,
    createModel,
    extendModel,
    start,
    Relation,
};
