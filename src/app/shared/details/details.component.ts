import { Component } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/types/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  movie!: Movie;

  constructor(private moviesService: MoviesService){}

  receiveMovie(movie: Movie) {
    this.movie = movie
  }

  backHome() {
    this.moviesService.backHome();
  }

}
