import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {environment} from '../../environments/environment';
import {AuthLoginInfo} from '../components/auth/auth-login-info';
import {Observable, Subject} from 'rxjs';
import {JwtResponse} from '../components/auth/jwt-response';
import {SignUpInfo} from '../components/auth/sign-up-info';
import {UserForm} from './user/userForm/user-form';
import {PassForm} from './user/passForm/pass-form';
import {environment} from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private svLoginUrl = environment.loginUrl;
  private svSignUpUrl = environment.signupUrl;
  private svUpdateProfileUrl = environment.updateProfileUrl;
  private svUpdatePasswordUrl = environment.updatePasswordUrl;

  svShouldRefresh = new Subject<any>();
  svShouldRefreshBody = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.svLoginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.svSignUpUrl, info, httpOptions);
  }

  updateUser(userForm: UserForm): Observable<string> {
    return this.http.put<string>(this.svUpdateProfileUrl + '/' + userForm.id, userForm);
  }

  updatePassword(passForm: PassForm): Observable<string> {
    return this.http.put<string>(this.svUpdatePasswordUrl + '/' + passForm.id, passForm);
  }
}
