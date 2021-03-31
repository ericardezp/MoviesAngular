import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.moviesTheaters = [
      {
        title: 'Spider-Man Far From Home',
        releaseDate: new Date(),
        price: 1350.99,
        image:
          'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
      {
        title: 'Iron Man',
        releaseDate: new Date('2008-05-02'),
        price: 1850.99,
        image:
          'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
      {
        title: 'The Avengers',
        releaseDate: new Date('2012-05-04'),
        price: 2550.99,
        image:
          'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg',
      },
    ];
  }

  title = 'Hola mundo de Angular';

  moviesTheaters;
  comingSoon = [
    // {
    //   title: 'Hulk',
    //   releaseDate: new Date(),
    //   price: 1350.99,
    // },
    // {
    //   title: 'Doctor Strange',
    //   releaseDate: new Date('2008-05-02'),
    //   price: 1850.99,
    // },
    // {
    //   title: 'Mission: Imposible',
    //   releaseDate: new Date('2012-05-04'),
    //   price: 2550.99,
    // },
    // {
    //   title: 'Wonder Woman 1984',
    //   releaseDate: new Date('2020-12-25'),
    //   price: 2550.99,
    // }
  ];
}
