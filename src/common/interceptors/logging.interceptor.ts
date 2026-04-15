import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request, Response } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const { method, originalUrl, ip } = request;
    const userAgent = request.get('user-agent') || '';
    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const { statusCode } = response;
          const delay = Date.now() - now;
          console.log(
            `[${new Date().toISOString()}] ${method} ${originalUrl} ${statusCode} ${delay}ms - ${ip} - ${userAgent}`,
          );
        },
        error: (err) => {
          const delay = Date.now() - now;
          console.log(
            `[${new Date().toISOString()}] ${method} ${originalUrl} ERROR ${delay}ms - ${ip} - ${userAgent} - ${err.message}`,
          );
        },
      }),
    );
  }
}
