import { Competencie } from './Competencie';

export interface Researcher {
    id: number;
    firstname: string;
    lastaname: string;
    username: string;
    email: string; 
    password: string;
    age: number
    avatar?: string;
    role?: string;
    competencies: Competencie[]
}    