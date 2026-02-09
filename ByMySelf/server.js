// server.js (Con Conexión a MySQL REAL)

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise'); // Usaremos la versión de promesas de mysql2
const app = express();
const port = 3006; // PUERTO CONFIGURADO PARA ESCUCHAR

// =================================================================
// 🚨 CONFIGURACIÓN DE LA CONEXIÓN A MySQL (¡ACTUALIZA TUS DATOS!) 🚨
// =================================================================

const dbConfig = {
    host: 'localhost',
    user: 'root', // Tu usuario de MySQL
    password: 'R00tR00t*12345', // <-- ¡DEBE SER TU CONTRASEÑA CORRECTA!
    database: 'formulario_db', // El nombre de la base de datos
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

let pool; // Declaramos una variable global para el pool de conexiones

// Función para establecer la conexión al pool de BBDD al iniciar
async function initializeDbPool() {
    try {
        pool = await mysql.createPool(dbConfig);
        console.log('✅ Conexión al Pool de MySQL establecida exitosamente.');
    } catch (error) {
        console.error('❌ Error fatal al conectar con MySQL:', error.message);
        // Terminamos el proceso si la base de datos no está disponible al inicio
        process.exit(1);
    }
}

// 1. Middlewares de configuración de Express
app.use(bodyParser.json());
app.use(express.static('.'));

// Configuración de CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// --- 2. Expresiones Regulares para la Validación del Servidor ---
const nameRegex = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /^[A-Za-z0-9\s.,?!¡¿]{10,}$/;

// 3. Manejador de la Petición POST /api/contacto
app.post('/api/contacto', async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Validación de Seguridad (Backend)
    if (!nameRegex.test(nombre) || !emailRegex.test(email) || !messageRegex.test(mensaje)) {
        return res.status(400).json({
            success: false,
            message: 'Datos de formulario inválidos según las reglas de seguridad.'
        });
    }

    try {
        // --- 4. CONEXIÓN REAL A LA BASE DE DATOS (Guardado) ---
        // Usamos sentencias preparadas (?) para prevenir inyecciones SQL (MÁXIMA SEGURIDAD)
        const sql = 'INSERT INTO contactos (nombre, email, mensaje) VALUES (?, ?, ?)';
        const values = [nombre, email, mensaje];

        // Ejecutamos la consulta usando el pool
        const [result] = await pool.execute(sql, values);

        const insertId = result.insertId; // ID generado por MySQL
        console.log(`[MySQL] Contacto guardado con ID: ${insertId}`);

        // 5. Respuesta de éxito (Status 200 OK)
        res.json({
            success: true,
            message: '✅ Datos guardados en MySQL exitosamente.',
            registroId: insertId
        });

    } catch (error) {
        console.error('❌ Error al guardar en MySQL:', error.code, error.message);

        let userMessage = 'Error interno del servidor al procesar la BBDD.';

        // Manejar error de entrada duplicada (ej. si el email ya existe)
        if (error.code === 'ER_DUP_ENTRY') {
            userMessage = 'Ese correo electrónico ya ha sido registrado. Por favor, utiliza uno diferente.';
            return res.status(409).json({ success: false, message: userMessage });
        }

        // Respuesta de error interno (Status 500) para otros fallos de BBDD
        res.status(500).json({ success: false, message: userMessage });
    }
});

// 6. Iniciar el servidor SOLO después de inicializar la BBDD
initializeDbPool().then(() => {
    app.listen(port, () => {
        console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
        console.log(`Accede al formulario en: http://localhost:${port}/index.html`);
    });
});