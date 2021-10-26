import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantFilter',
})
export class RestaurantFilterPipe implements PipeTransform {
  transform(value: any[], filterString: string): any {

    if (!value || !filterString) {
      return value;
    }

    return value.filter((item) => {
      return (
        item.restaurant.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
      );
    });
  }
}
