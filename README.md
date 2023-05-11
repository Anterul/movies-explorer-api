# Movies Explorer Api <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" alt="Node.js" style="width: 20px;"/><img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" alt="Express" style="width: 20px;"/>

## Серверная часть дипломной работы курса "веб-разработчик" от [Яндекс.Практикум](https://practicum.yandex.ru/), написанная на Node.js и Express.

## Приложение **movies-explorer-api** на GitHub <https://api.explorer.nomoredomains.monster> <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" alt="GitHub" width="20px"/>

---

## Функциональность приложения:

- Создание и авторизация в своей учётной записи
- Получение массива с соданными на сервере пользователями и карточками с фильмами
- Изменение иформации в личном профиле
- Удаление только своих карточек с фильмами

---

## Используемые технологии:

- <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" alt="Javascript" width="10px"/> JavaScript:
  - ООП
  - API
- <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" alt="React" width="10px"/> Node.js:
  - celebrate
  - jsonwebtoken
  - bcryptjs
- <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg" alt="React" width="10px"/> Express:
  - ProtectedRoutes
- <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="10px"/> MongoDB:
  - Mongoose

---

## Установка api:

Необходимые приложения для ввода команд: &nbsp; <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" alt="Git" width="10px"/> [Git](https://git-scm.com/download/win) &nbsp; <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" alt="Node.js" width="10px"/> [Node.js](https://nodejs.org/ru/) &nbsp; <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="10px"/> [MongoDB](https://mongodb.prakticum-team.ru/try/download/community)

Клонируйте репозиторий <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/bash/bash-original.svg" alt="Bash" width="10px"/> :

    git clone https://github.com/Anterul/movies-explorer-api

Перейдите в клонированный репозиторий. Вводите команды. Процесс установки может занять несколько минут.  
Установите зависимости:

    npm install

Запуск. После завершения установки введите команды:

    npm run start — запускает сервер

    npm run dev — запускает сервер с hot-reload

Откройте проект в браузере, введя адрес:

    http://localhost:3000/

Директори в бэкенд части:  
`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки  
`/models` — папка с файлами описания схем пользователя и карточки

---
