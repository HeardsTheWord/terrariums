import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy
{

  public shrinkHeader: boolean = true;

  private scrollHeight: number = 0;

  constructor()
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
