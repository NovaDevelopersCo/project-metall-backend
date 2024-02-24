import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';

import { apiErrorMiddleware } from './api-error/ApiErrorMiddleware.js';

import { v2 as cloudinary } from 'cloudinary';

import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';

import * as url from 'url';

import { appRouter } from './router.js';
import path from 'path';

const { PORT, CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET_KEY } = process.env as {
  PORT: string;
  CLOUD_NAME: string;
  CLOUD_API_KEY: string;
  CLOUD_API_SECRET_KEY: string;
};

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET_KEY,
  secure: true,
});

const start = async () => {
  const app = express();

  await initializeDb();

  const admin = new AdminJS(options);

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    }
  );

  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

  app.use('/static', express.static(path.join(__dirname, '../public')));
  app.use(admin.options.rootPath, router);
  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ limit: '25mb', extended: true }));
  app.use('/api', appRouter);
  app.use(apiErrorMiddleware);
  app.listen(PORT ?? 4000, () => {
    console.log(`AdminJS available at http://localhost:${PORT ?? 4000}${admin.options.rootPath}`);
  });
};

start();
