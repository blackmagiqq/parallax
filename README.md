# parallax effect

## Подключить

```
<script src="https://raw.githubusercontent.com/blackmagiqq/parallax/master/dist/parallax-min.js"></script>
```

## Использовать

```
const parallax = new Parallax(container, layers);
parallax.parallax();
```

container - DOM элемент, в котором располагаются слои.  
layers - объект со следующей структурой

```
const layers = {
    layer_one: {
        el: [[DOM элемент слоя]],
        factor: [[процент смещения слоя от контейнера]]
    }
}
```

Добавить css-свойство `will-change: transform;` элементам слоев.