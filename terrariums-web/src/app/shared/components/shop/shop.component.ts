import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { TerrariumInfo } from '../../models/terrarium-info';
import { Size } from '../../models/app-enums';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public terrariumInfo: TerrariumInfo[] = [];
  public filterOptions: Map<string, string[]> = new Map<string, string[]>();

  public showSideNav: boolean = false;

  filteredCards = new MatTableDataSource(this.terrariumInfo);

  constructor ()
  {
    this.filteredCards.filterPredicate = (data: TerrariumInfo, filter: string) =>
    {
      console.log('filter predicate');
      console.log(filter);
      console.log(data.price.toString().indexOf(filter) > -1);
      return data.price.toString().indexOf(filter) > -1;
    }
  }

  ngOnInit(): void
  {
    this.buildFilterOptions();
    this.getTerrariums();
  }

  buildFilterOptions(): void
  {
    // Size Filter options
    this.filterOptions.set("size", ['Mini', 'Small', 'Medium', 'Large']);

    // Price filter options
    //this.filterOptions.set("price", ['$0 - $10', '$10 - $20', '$20 +']);
    this.filterOptions.set("price", ['10', '20', '25']);
  }

  getTerrariums(): void
  {
    this.terrariumInfo = [
      {
        title: 'Bench',
        image_sources: ['../../../assets/img/cube_bench.jpg', '../../../assets/img/cube_bench_front.jpg'],
        description: 'The bench terrarium is cute',
        size: Size.medium,
        price: 25
      },
      {
        title: 'Honey Jar',
        image_sources: ['../../../assets/img/honey_jar_front.jpg', '../../../assets/img/honey_jar_side.jpg'],
        description: 'The bees are happy',
        size: Size.small,
        price: 15
      },
      {
        title: 'Jar',
        image_sources: ['../../../assets/img/jar_front.jpg'],
        description: 'Jar',
        size: Size.medium,
        price: 25
      },
      {
        title: 'Wine Glass',
        image_sources: ['../../../assets/img/wine_glass.jpg', '../../../assets/img/wine_glass_alt.jpg'],
        description: 'I love cooking with wine; sometimes I even add it to the food',
        size: Size.small,
        price: 18
      },
      {
        title: 'Mini Jars',
        image_sources: ['../../../assets/img/mini_jar_front.jpg', '../../../assets/img/mini_jar_iso.jpg'],
        description: 'Tiny containers',
        size: Size.mini,
        price: 10
      }
    ];
  }

  applyFilter(filterValue: string)
  {
    this.filteredCards.filter = filterValue.trim().toLowerCase();
  }

  filterBySelection(filterKey: string, filterSelection: string): void
  {
    console.log(filterKey);
    console.log(filterSelection);
    switch (filterKey)
    {
      case 'size':
        break;
      case 'price':
        const filterValue = filterSelection.trim().toLowerCase();
        console.log(filterValue);
        this.filteredCards.filter = filterValue;
        break;
      default:
        break;
    }
  }

  selectTerrarium(): void
  {
    console.log('test');
    //console.log(terrarium);
  }

}
