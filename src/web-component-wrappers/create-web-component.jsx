import React from 'react';
import ReactDOM from 'react-dom';

const createWebComponent = (Component, elementName, attributes) => {
    class CustomElement extends HTMLElement {
        connectedCallback() {
            const customElement = this;
            const props = [...this.attributes].reduce((props, attribute) => ({
                    ...props,
                    [attribute.name]: attribute.value
                }),
                { customElement, shadowRoot: this.root });
            this.instance = <Component {...props} />;
            this.props = props;
            this.root = this.attachShadow({ mode: 'open' });
            ReactDOM.render(this.instance, this.root);
        }

        attributeChangedCallback(name, oldValue, newValue) {
            const { shadowRoot, instance, props } = this;

            if (!instance)  {
                return;
            }

            const newProps = { ...props, [name]: newValue };
            const newInstance = <Component {...newProps} />;

            ReactDOM.render(newInstance, shadowRoot);

            this.instance = newInstance;
            this.props = newProps;
        }
    }

    CustomElement.observedAttributes = attributes;

    window.customElements.define(elementName, CustomElement);
};

export default createWebComponent;
