import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../types/types';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl: string = environment.apiUrl

  movie!: Movie;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  find (movieTitle: string) : Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}?t=${movieTitle}&apikey=954ab431`)
  }

  movieDetails() {
    this.router.navigate(['/movie']);
  }

  backHome() {
    this.router.navigate(['/']);
  }
}
