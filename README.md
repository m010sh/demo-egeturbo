## Версия php 7.3
Необходимо включить в системе php версии >= 7.3.
У меня система ubuntu 18.04.
Установлены версии php от 7.1 до 7.4, и я их переключаю командой:

`sudo update-alternatives --set php /usr/bin/php7.3`

Если все сделано верно, то команда

`php -v`

должна вывести в консоль версию 7.3 (или 7.4).

## git clone
Клонируем репозиторий и переходим в папку с проектом 

`git clone https://github.com/m010sh/demo-egeturbo.git`

`cd demo-egeturbo`

## Настройка БД
Создать схему БД. Создать пользователя с привелегиями для этой схемы

## Настройка .env файла
Создаем .env файл на основе дефолтного.

`cp .env.example .env`

Указываем в нем креды от БД, например:

```
DB_DATABASE=demo_task
DB_USERNAME=demo_task_user
DB_PASSWORD=demo_task_pass
```

## Установим пакеты и модули

`composer install`

`npm install`

## APP_KEY
Сгенерируем ключ приложения.

`php artisan key:generate`

## Миграции и сиды
Запустим миграции с сидами.

`php artisan migrate:refresh --seed`

## Соберем статику

`npm run dev`

## Запустим приложение на встроенном веб-сервере

`php artisan serve`
