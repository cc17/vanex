import * as mobx from 'mobx';
import * as mobxReact from 'mobx-react';
import createModel from './create-model';
import extendModel from './extend-model';
import Relation from './vane-relation';
import start from './start';

export default {
    ...mobx,
    ...mobxReact,
    createModel,
    extendModel,
    start,
    Relation,
};
