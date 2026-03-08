# Real Estate Platform (Laravel + React + MySQL + Bootstrap 5)

This repository contains a starter real estate web app using:

- **Laravel 11** for API/backend
- **React (JSX)** for frontend UI
- **MySQL** as the database
- **Bootstrap 5** for styling

## Features

- CRUD API for property listings
- React-powered property listing page
- Responsive Bootstrap cards
- MySQL-ready `.env.example`

## Backend API

Endpoints in `routes/api.php`:

- `GET /api/properties`
- `POST /api/properties`
- `GET /api/properties/{id}`
- `PUT /api/properties/{id}`
- `DELETE /api/properties/{id}`

## Database Schema

Migration creates a `properties` table with:

- `title`
- `description`
- `price`
- `location`
- `bedrooms`
- `bathrooms`
- `area_sqft`
- `image_url`

## Setup

1. Install PHP dependencies:
   ```bash
   composer install
   ```
2. Install JS dependencies:
   ```bash
   npm install
   ```
3. Configure environment:
   ```bash
   cp .env.example .env
   ```
   Update MySQL credentials in `.env`.
4. Run migrations:
   ```bash
   php artisan migrate
   ```
5. Start servers:
   ```bash
   php artisan serve
   npm run dev
   ```

Open `http://127.0.0.1:8000`.
