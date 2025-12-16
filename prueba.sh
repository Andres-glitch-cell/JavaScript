#!/bin/bash

PROJECT_PATH="/home/ubuntu/scripts/scriptsTareaDieci-Nueve"
IMG_FOLDER="${PROJECT_PATH}/imagenes"

CURRENT_DATE=$(date +"%Y-%m-%d %H:%M:%S")

echo "Tarea de limpieza INICIADA el $CURRENT_DATE en $IMG_FOLDER" 

# 3. Listar archivos que cumplen el criterio (más de 30 días) antes de borrar
echo "--- Archivos encontrados con más de $ANTIGUEDAD días ---" >> "$LOG_FILE"
# El comando find imprime la lista de archivos encontrados en el log
find "$IMG_FOLDER" -type f -mtime $ANTIGUEDAD -print >> "$LOG_FILE"

# 4. EJECUTAR LA LIMPIEZA
# find: busca en $IMG_FOLDER, solo archivos (-type f), modificados hace más de 30 días (-mtime +30)
# -delete: ELIMINA PERMANENTEMENTE los archivos encontrados
find "$IMG_FOLDER" -type f -mtime $ANTIGUEDAD -delete

# 5. Registrar el fin de la tarea
echo "Tarea de limpieza FINALIZADA: $(date +"%Y-%m-%d %H:%M:%S")" >> "$LOG_FILE"
echo "========================================================" >> "$LOG_FILE"

# Nota: El comando 'ls -l' ya no es necesario aquí, ya que find realiza el listado de archivos borrados en el log.