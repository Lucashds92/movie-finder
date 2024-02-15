import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/types/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie | null = null;

  constructor(private moviesService: MoviesService){}
  
  ngOnInit() {
    this.movie = this.moviesService.getMovieDetails();
  }

  receiveMovie(movie: Movie) {
    this.movie = movie
  }

  backHome() {
    this.moviesService.backHome();
  }

}
