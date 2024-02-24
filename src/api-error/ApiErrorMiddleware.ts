import type { Request, Response, NextFunction } from 'express';

import { ApiError } from './ApiError.js';

export const apiErrorMiddleware = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    const { status, message } = err;
    return res.status(status).json({ message });
  }

  return res.status(500).json({ message: 'Unexpected error' });
};
