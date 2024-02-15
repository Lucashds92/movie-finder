import { Component, Input} from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/types/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movie!: Movie;

  constructor(private moviesService: MoviesService) {}

  findMovie(movieTitle: string) {
    this.moviesService.find(movieTitle)
      .subscribe(
        answer => {
        this.movie = answer
      })
  }
}
