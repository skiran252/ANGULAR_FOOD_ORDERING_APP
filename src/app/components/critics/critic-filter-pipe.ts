import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'criticFilter',
})
export class CriticFilterPipe implements PipeTransform {
  transform(critics: any[], filterString: string): any {

    if (!critics || !filterString) {
      return critics;
    }

    return critics.filter((critic) => {
      return (
        critic.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
      );
    });
  }
}
