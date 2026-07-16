import { ZodError } from "zod";

import { TGenericErrorResponse } from "./error.types";

const handleZodError = (
  error: ZodError
): TGenericErrorResponse => {
  const statusCode = 400;

  const message = "Validation Error";

  const errorDetails = error.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));

  return {
    statusCode,
    message,
    errorDetails,
  };
};

export default handleZodError;