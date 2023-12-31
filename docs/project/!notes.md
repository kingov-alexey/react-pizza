# 🛠 Технологии:

- **ReactJS 18**
- **TypeScript**
- **Redux Toolkit** (хранение данных / пицц)
- **React Router v6** (навигация)
- **Axios + Fetch** (отправка запроса на бэкенд)
- **React Hooks** (хуки)
- **Prettier** (форматирование кода)
- CSS-Modules / SCSS (стилизация)
- React Content Loader (скелетон)
- React Pagination (пагинация)
- Lodash.Debounce
- Code Splitting, React Loadable, useWhyDidYouUpdate

### Подробнее о технологиях

- **[TypeScript](https://www.typescriptlang.org/) —** необходим для написания более грамотного JavaScript-кода. Благодаря правильному написанию TS-кода, мы автоматически документируем наш код + наше приложение будет содержать меньше багов из-за строгой типизации.
- **[Redux Toolkit](https://redux-toolkit.js.org/)** — с помощью данной библиотеки, мы сможем создать глобальное хранилище данных для нашего приложения, тем самым, более удобным способом обмениваться информацией между разными компонентами нашего приложения. Данная библиотека активно внедряется во все крупные и малые react-проекты на 2021-2022 г.
- **[React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)** — позволит нам создать навигацию по нашему сайту без перезагрузок страницы. Ты, наверное, обратил внимание, что сайт VK или Instagram при переходе по разным разделам, не перезагружает всю страницу, а только определенную часть сайта. Именно эту возможность мы и будем внедрять в наше приложение с помощью React Router.
- **[Axios](https://github.com/axios/axios)** — нам поможет взаимодействовать с серверной частью. Отправлять данные на сервер или получать их при необходимости из сервера уже в наше фронтенд-приложение.
- **[React Hooks](https://ru.reactjs.org/docs/hooks-intro.html)** — это набор готовых функций внутри библиотеки React для решения разнообразных задач, например, хранение данных, определение первого отображения приложения, оптимизаций функций и т.п.
- **[Prettier](https://prettier.io/)** — наш код должен быть не только хорошо написано, но и **красиво**. С помощью Prettier наш код будет автоматически выровняться внутри нашего редактора кода, тем самым, становиться более читабельным.
- **[SCSS](https://sass-scss.ru/)** — это тот же CSS, но с более мощными возможностями, функциями, переменными, циклами (да, Карл, циклы в CSS) и кучей других крутых решений.
- **[CSS-Modules](https://github.com/css-modules/css-modules)** — мы будем использовать SCSS вместе с CSS-модулями. По факту, тебе не придётся учить ничего нового. Ты будешь писать те же самые стили, но уже в отдельных файлах (css-модулях), тем самым, инкапсулируя свои CSS-классы.
- **[Lodash](https://lodash.com/docs)** — набор готовых JS-функций для огромного количества разнообразных задач.

[] Курс на ютубе: https://www.youtube.com/watch?v=_UywBskWJ7Q&list=PL0FGkDGJQjJG9eI85xM1_iLIf6BcEdaNl
[] репа на проект - https://github.com/Archakov06/react-pizza-v2
[] репа на верстку - https://github.com/Archakov06/react-pizza-html

# Lesson 0: Для кого данный курс и как его смотреть? Что нового?

Описание курса
......

# Lesson 1: разрабатываем лучшую пиццерию на React + TypeScript + Redux Toolkit + Router v6

инициализация, запуск, изучение структуры проекта

$ npx create-react-app . - инициализация react приложения

ctrl + j - открывает терминал
ctrl + shift + ` - создает новый терминал

функциональные компоненты, jsx

......

# Lesson 2: Создаём компонент, SCSS, import/export, props (пропсы)

Prettier - Code formatter устанавливаем расширение для vscode чтобы автоматическе форматировать код

ctrl + shift + p - открывает консоль настройки, где пишем settings в открывшемся окне в поле search settings пишем Prettier

ctrl + d выделение похожего фрагмента кода

$ npm i sass - установка библиотеки для работы с sass

Подготовлен общий каркас

......

# Lesson 3: Как хранить данные в компоненте (useState), onClick, деструктуризация

Третий урок начал проходить на работе и в очередной раз столкнулся с проблемой при создании коммита, указывается глобальный автор
а мне нужно чтобы указывался автор моей личной учетной записи

---

PS D:\LEARN\1projects_learn\111react-pizza\react-pizza> git commit -am 'docs: add urls'  
[main 3a928fa] docs: add urls
Committer: aaaa sss dddd <asdf@asdf.kz>
Your name and email address were configured automatically based  
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

1 file changed, 8 insertions(+), 4 deletions(-)
PS D:\LEARN\1projects_learn\111react-pizza\react-pizza>

как я могу испавить так чтобы только для этого проекта использовались другие учетные данные git

---

Сообщение, которое вы видите, указывает на то, что Git использует глобальные настройки имени пользователя и электронной почты для коммитов. Чтобы исправить это и использовать разные учетные данные только для конкретного проекта, вам нужно настроить локальные настройки пользователя для этого репозитория. Вы можете сделать это следующим образом:

    Введите следующие команды в командной строке или терминале, находясь в директории вашего проекта:

bash

git config user.name "Ваше Имя"
git config user.email "ваша@почта.ком"

Замените "Ваше Имя" и "ваша@почта.ком" на ваше имя пользователя и адрес электронной почты.

    После того как вы установили локальные настройки пользователя для этого проекта, они будут использоваться только в этом репозитории.

Теперь, при коммите в данном проекте, Git будет использовать учетные данные, указанные в локальных настройках этого репозитория, и вы больше не увидите предупреждение о глобальных настройках.

Обратите внимание, что эти изменения будут действовать только в контексте данного репозитория. Если вы хотите использовать разные учетные данные в других проектах, вам придется настраивать их аналогичным образом в каждом репозитории.

---

onClick={}
const [state, setState] = useState(0); - хук состояния

const [pizzaCount, setPizzaCount] = useState(0);
const [pizzaCount, setPizzaCount] = React.useState(0);

......

# Lesson 4: Создаем компонент пицц и категории, рендер списка, spread-оператор

два способа отображать статичную информацию:
1 при добавлении файлов в папку public
<img width='38' src='img/pizza-logo.svg' alt='Pizza logo' />

2 при добавлении файлов в папку src
import logoSVG from './../../img/pizza-logo.svg';
<img width='38' src={logoSVG} alt='Pizza logo' />

ES7+ React/Redux/React-Native snippets (расширение)
rafc - создание нового функционального компонента
imr - импорт

данную запись можно сокранить
<PizzaBlock
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  sizes={obj.sizes}
                  types={obj.types}
                />
сокращенная версия с помощью спред оператора ()
<PizzaBlock {...obj} />

.......

# Lesson 5: Создаем popup-окно сортировки, что такое key?

<React.Fragment></React.Fragment> или <></>

&& - переменная && если переменная тру то продолжиться, если фолс то не будет работать
!переменная - обрабтный эффект для

......

# Lesson 6: получаем пиццы с бэкенда (fetch), изучаем хук useEffect

$ npm install -g json-server - устанавливаем либу для фейкого апи json-server ГЛОБАЛЬНО!
$ json-server --watch db.json --port 9999 - запуск сервера с фейковым апи НУЖНО БЫТЬ В ПАПКЕ 'server'

React.useEffect(() => {
getPizzaAll();
}, []);

function getPizzaAll() {
fetch('http://localhost:9999/table-pizzas')
.then(res => {
return res.json();
})
.then(json => {
setPizzas(json);
console.log(json);
})
.catch(err => {
console.log('Ошибка:', err);
});
}

......

# Lesson 7: Подключаем React Router v6, создаем компонент-скелетон

$ npm i react-content-loader - устанавливаем либо для прелоудера https://skeletonreact.com
$ npm install react-router-dom - устанавливаем либу для маршрутизации страниц

CSS - module NotFoundBlock.module.scss - можно использовать css можно scss но главное слово module

<Route path="/" element={<Home />}/> - главная, можно написать без слеша ""
<Route path="/\*" element={<NotFound />}/> - если из описанных роутев никакой не сработает, сработает этот

<Link to="/"> - переход на главную с помощью реакт роутер дом

......

# Lesson 8: Настраиваем адаптивную вёрстку, создаём страницу корзины

https://cssgrid-generator.netlify.app/ - позволяет генерировать гриды

window.scrollTo(0, 0); - скролит страницу наверх

......

# Lesson 9: Делаем функционал сортировки и фильтрации пицц

/_ СОРТИРОВКА _/
// \_sort & \_order - asc по умолчанию
const getSortedTodos = (field, order) =>
getTodos(`_sort=${field}&_order=${order}`)
getSortedTodos('id', 'desc')

Где ASC и DESC - направление сортировки:

ASC - сортировка по возрастанию (по умолчанию)
DESC - сортировка по убыванию

итоговый пример на пиццах
http://localhost:9999/table-pizzas?\_sort=category&\_order=ask

/_ ПОИСК _/
const getTodosBySearch = (str) => getTodos(`q=${str}`)
getTodosBySearch('eat') // Eat & Repeat - включают 'eat'

итоговый пример на пиццах
http://localhost:9999/table-pizzas?q=%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8

/_ СОРТИРОВКА И ПОИСК _/
http://localhost:9999/table-pizzas?\_sort=category&\_order=ask&q=%D0%BF%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8

......

# Lesson 10: Разрабатываем пагинацию и поиск пицц

https://www.iconfinder.com/ - иконки

контролируемый input

https://habr.com/ru/companies/ncloudtech/articles/685400/ - частые ошибки новичков при разработке на react

Ошибка 1. Вы используете prop-drilling
То есть практику передачи одного свойства на несколько уровней от родительского компонента к дочернему.

В идеале, при передаче свойства от родительского компонента к дочернему вы должны избегать проброса более чем на 2 слоя вглубь. (Родительский компонент -> дочерний компонент (слой 1) -> дочерний компонент (слой 2)). В реальности вы можете использовать столько слоев, сколько захотите, но имейте в виду, что prop-drilling обычно вызывает проблемы: во-первых, с производительностью, во-вторых — для последующей поддержки и расширения кодовых баз React.

В частности, prop-drilling может вызвать ненужный повторный рендеринг. Поскольку компонент в React всегда будет рендериться при изменении пропсов, промежуточные компоненты, которые просто передают проп по цепочке, будут также рендериться во время этого процесса. Это может вызвать проблемы с производительностью приложения в долгосрочной перспективе.

Кроме того, при prop-drilling становится не особо удобно отслеживать, как данные передаются в приложении. Наличие свойств, передаваемых на несколько уровней вглубь, усложняет понимание того, как используются данные.

Есть много способов обойти эту проблему. Вы можете попробовать использовать React Context Hook, реструктурировать свои компоненты или использовать что-то наподобие Redux. К сожалению, Redux бывает излишним, требует изрядной организации и накладных расходов для более простых приложений. Однако в сценариях, где вам нужно изменить несколько вещей на основе одного изменения состояния или сделать так, чтобы одно состояние было вычисленным результатом другого, Redux может оказаться лучшим вариантом.

<!-- assdfasdf -->

$ npm i react-paginate - либа для готовой пагинации

......

# Lesson 11: Что такое контекст в React (useContext) и Props Drilling?

1 для начала создаем и экспортируем контекст

export const SearchContext = React.createContext();

2 оборачиваем созданным контекстом, родительский компонент, в котором будет необходимость для дочерних элементов использовать ранее созданный контекст

return (
<>

<div className="wrapper">
<SearchContext.Provider value={{searchValue, setSearchValue}}>
<Header  />
<div className="content">
<Routes>
<Route path="/" element={<Home searchValue={searchValue} />} />
<Route path="/cart" element={<Cart />} />
<Route path="/\*" element={<NotFound />} />
</Routes>
</div>
</SearchContext.Provider>
</div>
</>
);

3 в дочерних элементах где необходимо использовать контекст, производим импорт

import {SearchContext} from '../../App.js';

4 используюя хук возвращаем содержимое контекста и используюем

const {searchValue, setSearchValue} = React.useContext(SearchContext);

Хук useContext() для понимания можно сравнить с слушателем addEventListener

......

# Lesson 12: Изучаем библиотеку Redux Toolkit

теория

https://redux-toolkit.js.org/ - оффСайт

https://redux-toolkit.js.org/tutorials/quick-start

$ npm install @reduxjs/toolkit react-redux

......

# Lesson 13: Изучаем хуки useSelector, useDispatch, создаем свой Slice в Redux Toolkit

создаем slice для filter

Устанавливаем расширения:
- Redux DevTools https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru
- React Developer Tools https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=ru

......

# Lesson 14: Оптимизируем поиск с помощью Debounce, пагинация через Redux Toolkit

$ npm install axios - устанавливаем либу для удобной отправки fetch запросов на api

React.useRef();

debounce(alert, 100); (похоже на сетТаймАут)

lodash https://lodash.com/ 

$ npm install lodash (можно установить полностью всю библиотеку)
$ npm install lodash.debounce (либо выбрать определенные методы)

React.useCallback();

......

# Lesson 15: React Pizza v2 — Сохраняем параметры фильтрации в URL

Целью данного урока являлось реализовать функциональность когда пользовтель может
скопировать адресную строку и например кому то отправить, и чтобы в этом случае
у другого пользователя по ссылке открылась страница с ранее применяемыми фильтрами

В итоге работает но присутсвуют баги!!! Но также автор переснимал данный урок,
поэтому материал данного урока воспринят не полностью

$ npm install qs - для парсинга адресной строки

можно использовать хук useSearchParams или window.location.search

......

# Lesson 16: Создаем Redux-логику для корзины, скрытие/показ popup-сортировки

RTK

......

# Lesson 17: React Pizza v2 — Асинхронные экшены в RTK (createAsyncThunk), отлавливаем ошибки

try catch finally

https://youtu.be/azf3uk4zOew?list=PL0FGkDGJQjJG9eI85xM1_iLIf6BcEdaNl&t=2454

......

# Lesson 18: ???

???
......

# Lesson 19: ???

???
......

# Lesson 20: ???

???
......

# Lesson 21: ???

???
......

# Lesson 22: ???

???
......

# Lesson 23: ???

???
......

# Lesson 24: ???

???
......

# Lesson 25: ???

???
......

# Lesson 26: ???

???
......

# Lesson 26: ???

???
......

# Lesson 27: ???

???
......
