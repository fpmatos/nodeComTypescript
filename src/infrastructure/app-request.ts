import { AppContext } from './app-context';
import { Request } from 'express';
export interface Request extends Request{
    context: AppContext;
}