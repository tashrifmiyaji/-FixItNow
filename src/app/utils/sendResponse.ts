import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
  meta?: Record<string, unknown>;
};

const sendResponse = <T>(
  res: Response,
  payload: TResponse<T>
) => {
  return res.status(payload.statusCode).json({
    success: payload.success,
    statusCode: payload.statusCode,
    message: payload.message,
    meta: payload.meta,
    data: payload.data,
  });
};

export default sendResponse;