import { Component } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private moviesService: MoviesService){}

  backHome() {
    this.moviesService.backHome();
  }

}
