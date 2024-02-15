import { Component, Input} from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/types/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movie: Movie | null = null;

  constructor(private moviesService: MoviesService) {}

  findMovie(movieTitle: string) {
    const formattedMovieTitle = this.formatMovieTitle(movieTitle);
    this.moviesService.find(formattedMovieTitle)
      .subscribe(
        answer => {
        this.movie = answer
        this.moviesService.setMovieDetails(this.movie);
      })
  }

  formatMovieTitle(movieTitle: string): string {
    return movieTitle.replace(/\s+/g, '+');
  }
}
