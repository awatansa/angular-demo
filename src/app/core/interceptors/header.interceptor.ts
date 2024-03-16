import { HttpInterceptorFn } from "@angular/common/http";
import { Headers } from "../models/request/headers";

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = req.headers.append(Headers.PROJECT_ID, "value");
  return next(req.clone({ headers }));
};
