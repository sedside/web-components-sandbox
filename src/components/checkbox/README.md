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

const VALUES = [
    {
        label: 'Опция 1',
        value: 1
    },
    {
        label: 'Опция 3',
        value: 3,
        isDisabled: true
    },
];

<div>
    <h3>По умолчанию (внутренние сервисы)</h3>
    <Checkbox
        options={OPTIONS}
        values={VALUES}
    />
    <h3>В линию (внутренние сервисы)</h3>
    <Checkbox
        type="inline"
        options={OPTIONS}
        values={VALUES}
    />
    <h3>По умолчанию (внешние сервисы)</h3>
    <Checkbox
        options={OPTIONS}
        values={VALUES}
        size="lg"
    />
    <h3>В линию (внешние сервисы)</h3>
    <Checkbox
        options={OPTIONS}
        values={VALUES}
        type="inline"
        size="lg"
    />
    <h3>Чекбокс в виде кнопки</h3>
    <Checkbox
        options={OPTIONS}
        values={VALUES}
        type="button"
    />
    <h3>Без лейбла</h3>
    <Checkbox
        options={[{ value: 1 }]}
    />
</div>
```
