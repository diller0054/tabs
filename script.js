// Активация
function $tab(id, type) {
    // Добавляет нужный class чтобы подтянуть стили
    document.getElementById(id).classList.add(type)

    // Получает все элементы и заносит в масив
    const $title = document.querySelectorAll(`#${id} .tab_title`),
          $content = document.querySelectorAll(`#${id} .tab_content`)

    // Проходим циклом и присваиваем каждому элементу из массива свой уникальный title и id
    for (let i = 0; i < $title.length; i++) {
        $title[i].setAttribute('title', `${id+i}`)
        $content[i].id = `content${id+i}`
    }

    // Вызываем основную функцию работы самих tab
    init($title, $content, id)
}

// функция работы всех табов
function init($title, $content, id) {
    // Создает все нужные переменные
    let i,
        title = $title,
        content = $content

    // Отслеживаем клики по масиву
    title.forEach((i)=> i.addEventListener(`click`, function(e){
        // Удаляет классы с content, скрывает content
        for (i = 0; i < content.length; i++) {
            content[i].classList.remove('active')
        }

        // Удаляет класс из title
        for (i = 0; i < title.length; i++) {
            title[i].className = title[i].className.replace(" active", "");
        }

        // Добавляет класс к title по которому кликнули
        this.classList.add('active')

        // Добавляет класс к нужному content
        document.getElementById(`content${this.getAttribute('title')}`).classList.add('active')
    }))

}
