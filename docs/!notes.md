<!-- ****** -->

- Курс на ютубе: https://www.youtube.com/watch?v=_UywBskWJ7Q&list=PL0FGkDGJQjJG9eI85xM1_iLIf6BcEdaNl
- репа на проект - https://github.com/Archakov06/react-pizza-v2
- репа на верстку - https://github.com/Archakov06/react-pizza-html

<!-- ****** -->

-
-
-

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

???
......

# Lesson 7: ???

???
......

# Lesson 8: ???

???
......

# Lesson 9: ???

???
......

# Lesson 10: ???

???
......

# Lesson 11: ???

???
......

# Lesson 12: ???

???
......

# Lesson 13: ???

???
......

# Lesson 14: ???

???
......

# Lesson 15: ???

???
......

# Lesson 16: ???

???
......

# Lesson 17: ???

???
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
