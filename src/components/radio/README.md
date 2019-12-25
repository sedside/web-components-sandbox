```js
const OPTIONS = [
    {
        label: 'Опция 1',
        value: 1
    },
    {
        label: 'Опция 2',
        value: 2
    },
    {
        label: 'Опция 3',
        value: 3,
        isDisabled: true
    },
    { 
        label: 'Опция 4',
        value: 4,
        isDisabled: true
    },
    { 
        label: 'Опция 5',
        value: 5,
        isDisabled: true,
        isInvalid: true
    }
];

const VALUE = {
    label: 'Опция 2',
    value: 2
};

<div>
    <h3>По умолчанию (внутренние сервисы)</h3>
    <Radio
        options={OPTIONS}
        value={VALUE}
        name="1"
    />
    <h3>В линию (внутренние сервисы)</h3>
    <Radio
        type="inline"
        options={OPTIONS}
        value={VALUE}
        name="2"
    />
    <h3>По умолчанию (внешние сервисы)</h3>
    <Radio
        options={OPTIONS}
        value={VALUE}
        size="lg"
        name="3"
    />
    <h3>В линию (внешние сервисы)</h3>
    <Radio
        options={OPTIONS}
        value={VALUE}
        type="inline"
        size="lg"
        name="4"
    />
    <h3>Без лейбла</h3>
    <Radio
        options={[{ value: 1 }, { value: 2 }]}
    />
</div>
```
