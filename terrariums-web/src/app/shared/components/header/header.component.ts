import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy
{

  public shrinkHeader: boolean = true;

  private scrollHeight: number = 0;

  constructor (private router: Router)
  {
    this.aniamtedHeader();
  }

  ngOnInit(): void
  {
  }

  ngOnDestroy(): void { }

  aniamtedHeader(): void
  {
    window.onscroll = () =>
    {
      if (window.pageYOffset > 60)
      {
        this.shrinkHeader = false;
      }
      else
      {
        this.shrinkHeader = true;
      }
    }
  }
}
