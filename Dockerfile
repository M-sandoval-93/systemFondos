# Utiliza una imagen de Apache como base
FROM httpd:2.4

# Copia los archivos de tu aplicación React en el directorio de documentos de Apache
COPY ./dist/ /usr/local/apache2/htdocs/

# Exponer el puerto 80 para que Apache sea accesible desde fuera del contenedor
EXPOSE 80
