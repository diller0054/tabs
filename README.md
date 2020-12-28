## Небольшая бибиотека Tabs

Максимально простая функция табов, в данном случаи добавлены небольшие стили которое вы можете переписать при своем желании. На данный момент присудствуют 4 вида табов, top, right, bottom, left. 

### Структура html

Небольшой пример html кода. У вас всегда должна быть одна общая обертка в которой должен быть указан любой id для вызывания самой функции. К кнопкам табов должен находиться class "tab_title", у самого блока с контентом "tab_content"

```markdown
<div class="tabs" id="tabs>
  <div class="head_tabs">
    <div class="tab_title active">Tab 1</div>
    <div class="tab_title">Tab 2</div>
    <div class="tab_title">Tab 3</div>
    <div class="tab_title">Tab 4</div>
  </div>
  <div class="body_tabs">
    <div class="tab_content active">
      <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
    </div>
    <div class="tab_content">
      <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
    </div>
    <div class="tab_content">
      <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
    </div>
    <div class="tab_content>
      <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
    </div>
  </div>
</div>
```

### Активация tabs

Сама активация простая, вам нужно прописать ключевое слово $tab(id, type)
id = id блока в котором находиться tab
type = их 4 top, right, left, bottom

```markdown
$tab('tabs', 'top')
```

*Чтобы табы работали должно присудствовать как и js, так и css, лишнее можете смело убирать 
