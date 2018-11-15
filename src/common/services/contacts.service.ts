import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IUser } from '../interfaces/IUser';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

}
