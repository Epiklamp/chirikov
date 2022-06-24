# Chirikov's site

Установим node-зависимости с помощью `npm` или `yarn`:
```
npm i
# or
yarn install
```

После чего запускаем сайт:
```
npm run dev
# or
yarn dev
```
Так сайт запустится на http://localhost:3000


Файловая иерархия проекта:
```
.
├── assets                    <- Папка с изображениями
│   ├── avatar1.jpg
│   ├── avatar2.jpg
│   ├── avatar3.jpg
│   ├── avatar4.jpg
│   ├── bg-texture.png
│   ├── chirikov.jpg
│   ├── cv.pdf
│   ├── me1.png
│   ├── me-about1.jpg
│   ├── me-about.png
│   ├── me.jpeg
│   ├── portfolio1.jpg
│   ├── portfolio2.jpg
│   ├── portfolio3.jpg
│   ├── portfolio4.jpg
│   ├── portfolio5.png
│   └── portfolio6.jpg
├── components                 <- Основные компоненты страницы 
│   ├── About
│   │   ├── About.jsx
│   │   └── About.scss
│   ├── Contact
│   │   ├── Contact.jsx
│   │   └── Contact.scss
│   ├── Experience
│   │   ├── Experience.jsx
│   │   └── Experience.scss
│   ├── Footer
│   │   ├── Footer.jsx
│   │   └── Footer.scss
│   ├── Header
│   │   ├── CTA.jsx
│   │   ├── Header.jsx
│   │   └── Header.scss
│   ├── Nav
│   │   ├── Nav.jsx
│   │   └── Nav.scss
│   ├── Portfolio
│   │   ├── Portfolio.jsx
│   │   └── Portfolio.scss
│   ├── portfolio.js
│   ├── Services
│   │   ├── Services.jsx
│   │   └── Services.scss
│   ├── SocialIcons            <- Иконки в секциях About и Footer 
│   │   └── SocialIcons.jsx
│   └── Testimonials
│       ├── Testimonials.css
│       └── Testimonials.jsx
├── next.config.js
├── package.json
├── package-lock.json
├── pages                      <- Главная папка проекта
│   ├── _app.js                <- Файл, необходимый для рендеринга всей страницы
│   ├── index.css
│   ├── index.js               <- Файл, где все компоненты (Папка components) соеденяются воедино
│   └── index.scss             <- Основной файл стилей (Менять цветовую схему сайта здесь)
├── public
│   ├── favicon.ico            <- Фавиконка (которая находится на вкладке)
│   └── vercel.svg
├── README.md
├── styles
│   ├── globals.css
│   └── Home.module.css
└── yarn.lock
```


