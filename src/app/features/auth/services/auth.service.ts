import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authUrl = "http://localhost:8080/auth"; // Cambia esto a tu URL de autenticación
  private tokenSubject: BehaviorSubject<string | null>;
  public token: Observable<string | null>;

  constructor(private http: HttpClient, private router: Router) {
    this.tokenSubject = new BehaviorSubject<string | null>(
      localStorage.getItem("authToken")
    );
    this.token = this.tokenSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.authUrl}/login`, { username, password })
      .pipe(
        tap((response) => {
          if (response.jwtToken) {
            localStorage.setItem("authToken", response.jwtToken);
            this.tokenSubject.next(response.jwtToken);
            this.router.navigate(["/home"]);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem("authToken");
    this.tokenSubject.next(null);
    this.router.navigate(["/auth/login"]);
  }

  public get tokenValue(): string | null {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.tokenValue;
  }

  getAuthToken(): string | null {
    return this.tokenValue;
  }
}
