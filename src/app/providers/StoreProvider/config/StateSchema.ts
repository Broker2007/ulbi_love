import { CounterSchema } from 'entities/Counter';
import { UserShema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

export interface StateSchema {
    counter:CounterSchema,
    user:UserShema,
    loginForm: LoginSchema
}
