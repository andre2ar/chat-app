# ChatApp
The bot can respond to the following keywords:

- Hi
- What can you do
- What is your name?
- Login
- Sign up
- {email} {password}
- Deposit {amount}
- Deposit {amount} {Currency code}
- Withdraw
- Balance
- Set default currency as {Currency code}
- Convert {amount} {Currency code} to {Currency code}

## Before start
The following software must be installed:
- Composer
- Laravel
- Node.js
- NPM
- MySQL
- PHP MySQL extension

## How to install

Follow these step to get this ChatApp up and running:
- Install all Laravel dependencies: composer install
- Install all JavaScript/React dependencies: npm install
- Compile React: npm run prod
- Create a .env file: cp .env.example .env
- Create a Laravel key: php artisan key:generate

Now is necessary create a database in MySQL and set this information in .env file, change the following variables in .env:

- Configure you database properly in .env file
- DB_DATABASE=[database name you just created]
- DB_USERNAME=[user to this database]
- DB_PASSWORD=[password to connect to database]
- Create application tables: php artisan migrate:fresh
