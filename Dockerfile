# Base image for PHP
FROM php:8.2-cli

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
	git \
	unzip \
	curl \
	libpq-dev \
	libzip-dev \
	libonig-dev \
	libxml2-dev \
	nodejs \
	npm \
	zip \
	&& docker-php-ext-install pdo_mysql zip mbstring

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Laravel application dependencies
COPY . .

RUN composer install --no-dev --optimize-autoloader && \
	npm install && \
	npm run build

# Expose the port Laravel's built-in server will use
EXPOSE 8000

# Start the Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
