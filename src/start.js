/**
 * Tips：
 * 如果start没有配置container选项，则返回一个可渲染的组件；
 * 如果传递了container，则执行渲染。
 * */

import {Provider} from 'mobx-react';

import React, { Component } from 'react';
import {render} from 'react-dom';

import VaneRelation from './vane-relation';
import VaneContext from './vane-context';
import middleware from './vane-middleware';

export default({
    component: ContainerComponent,
    models,
    container,
    middlewares = [],
    relation = new VaneRelation
}) => {
    if(!Array.isArray(middlewares)) {
        middlewares = [middlewares];
    }

    middlewares.forEach(item => {
        middleware.use(item);
    });

    const context = new VaneContext(models, {
        middleware,
        relation,
    });


    let containerEl = container;

    if(containerEl) {
        // 如果传递了容器(选择器)，则执行渲染
        if (typeof(container) === 'string') {
            containerEl = document.querySelector(container);
        }

        render(<Provider {...context.data}>
            <ContainerComponent />
        </Provider>, containerEl);
    } else {
        // 否则返回可执行组件
        class VaneComponent extends Component {
            constructor(props, context) {
                super(props, context);
            }

            render() {
                return (
                    <Provider {...context.data}>
                        <ContainerComponent {...this.props.data} />
                    </Provider>
                );
            }
        }

        return VaneComponent;
    }
};
