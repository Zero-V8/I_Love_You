# De Todo un Poco - Fase Inicial

Aplicacion Full-Stack con arquitectura de carpetas separadas:

- `client`: React + Vite + Tailwind CSS + Firebase (Auth y Firestore)
- `server`: Node.js + Express

## Estructura base

```txt
I_Love_You/
  client/
	 src/
		components/
		firebase.js
  server/
	 server.js
```

## 1) Configurar el frontend

1. Ir al cliente:

	```bash
	cd client
	```

2. Crear el archivo de entorno usando el ejemplo:

	```bash
	cp .env.example .env
	```

	En Windows PowerShell puedes usar:

	```powershell
	Copy-Item .env.example .env
	```

3. Completar las variables de Firebase en `client/.env`:

	- `VITE_FIREBASE_API_KEY`
	- `VITE_FIREBASE_AUTH_DOMAIN`
	- `VITE_FIREBASE_PROJECT_ID`
	- `VITE_FIREBASE_STORAGE_BUCKET`
	- `VITE_FIREBASE_MESSAGING_SENDER_ID`
	- `VITE_FIREBASE_APP_ID`

4. Levantar el frontend:

	```bash
	npm run dev
	```

## 2) Configurar el backend

1. Abrir otra terminal e ir al servidor:

	```bash
	cd server
	```

2. Crear el archivo de entorno:

	```bash
	cp .env.example .env
	```

	En Windows PowerShell:

	```powershell
	Copy-Item .env.example .env
	```

3. Configurar Firebase Admin (elige una opcion):

	Opcion A (recomendada en local)
	- Define `GOOGLE_APPLICATION_CREDENTIALS` en `server/.env` con la ruta absoluta al JSON de service account.

	Opcion B (deploy o CI)
	- Define `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL` y `FIREBASE_PRIVATE_KEY` en `server/.env`.

4. Ajustar el puerto si deseas (por defecto `4000`).

5. Ejecutar backend en modo desarrollo:

	```bash
	npm run dev
	```

## 3) Verificar estado del servidor

Con el backend arriba:

```bash
curl http://localhost:4000/api/health
```

Respuesta esperada (ejemplo):

```json
{
  "status": "ok",
  "service": "de-todo-un-poco-server",
  "timestamp": "2026-08-22T00:00:00.000Z"
}
```

Tambien puedes validar el estado de Firebase Admin:

```bash
curl http://localhost:4000/api/firebase/status
```

Si Firebase esta correctamente configurado devuelve `firebase: connected`.

## Seguridad importante

- Nunca subas archivos `firebase-adminsdk*.json` al repositorio.
- Nunca pegues llaves privadas en codigo fuente.
- Si una llave privada fue compartida, revocala y genera una nueva desde Firebase Console / Google Cloud IAM.

## Estado de esta fase

- Dashboard inicial responsive con CSS Grid y panel superior de cuenta.
- Secciones creadas: Scraping, Drive, APIs, Notes, Games y The Void.
- `firebase.js` preparado para Auth + Firestore usando variables de entorno.
- `server.js` con Express, CORS, JSON parser y endpoint `GET /api/health`.
