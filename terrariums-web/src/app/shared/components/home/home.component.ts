import { Component, OnInit } from '@angular/core';
import { TerrariumInfo } from '../../models/terrarium-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pictureSourceList: string[] = ['../../../assets/img/cube_bench.jpg', '../../../assets/img/cube_bench_front.jpg', '../../../assets/img/honey_jar_front.jpg',
    '../../../assets/img/mini_jar_front.jpg', '../../../assets/img/wine_glass.jpg']

  public terrariumInfo: TerrariumInfo[] = [
    {
      title: 'Bench',
      image_sources: ['../../../assets/img/cube_bench.jpg', '../../../assets/img/cube_bench_front.jpg'],
      info: 'The bench terrarium is cute',
      size: '6/"x6/"'
    },
    {
      title: 'Honey Jar',
      image_sources: ['../../../assets/img/honey_jar_front.jpg', '../../../assets/img/honey_jar_side.jpg'],
      info: 'The bees are happy',
      size: '2/"x6/"'
    },
    {
      title: 'Jar',
      image_sources: ['../../../assets/img/jar_front.jpg'],
      info: 'Jar',
      size: '6/"x6/"'
    },
    {
      title: 'Wine Glass',
      image_sources: ['../../../assets/img/wine_glass.jpg', '../../../assets/img/wine_glass_alt.jpg'],
      info: 'I love cooking with wine; sometimes I even add it to the food',
      size: '1/"x4/"'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectTerrarium()   //terrarium: TerrariumInfo): void
  {
    console.log('test');
    //console.log(terrarium);
  }
}
