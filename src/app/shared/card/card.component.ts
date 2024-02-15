import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/types/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() movie!: Movie;

  constructor(private moviesService: MoviesService) { }

  movieDetails() {
    this.moviesService.movieDetails();
  }
}


