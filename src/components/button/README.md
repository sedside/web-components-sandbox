```js
const style = { marginRight: '10px' };

<div style={{ display: 'flex' }}>
    <div style={style}>
        <Button label="Кнопка" />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="secondary" />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="success" />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="warning" />
    </div>
</div>
```

```js
const style = { marginRight: '10px' };

<div style={{ display: 'flex' }}>
    <div style={style}>
        <Button label="Кнопка" type="outline-primary" />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="outline-secondary" />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="outline-success" />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="outline-warning" />
    </div>
</div>
```

```js
const style = { marginRight: '10px' };

<div style={{ display: 'flex' }}>
    <div style={style}>
        <Button label="Кнопка" size="xl" />
    </div>
    <div style={style}>
        <Button label="Кнопка" size="lg" />
    </div>
    <div style={style}>
        <Button label="Кнопка" />
    </div>
    <div style={style}>
        <Button label="Кнопка" size="sm" />
    </div>
</div>
```

```js
const style = { marginRight: '10px' };

<div style={{ display: 'flex' }}>
    <div style={style}>
        <Button label="Кнопка" isDisabled={true} />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="secondary" isDisabled={true} />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="success" isDisabled={true} />
    </div>
    <div style={style}>
        <Button label="Кнопка" type="warning" isDisabled={true} />
    </div>
</div>
```