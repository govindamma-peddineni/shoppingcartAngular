import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipesearch',
  pure: false
})
export class RecipesearchPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
//     if (!value) {
//     return [];
//     }
//     if (!searchtext) {
//       return value;
//     }
// searchtext = searchtext.toLowerCase();
// return value.filter( it => {
//       return it.toLowerCase().includes(searchtext);
//     });
 if (value.length === 0 || filterString === '') {
   return value;
 }
const resultArray = [];

for (const item of value) {

if (item[propName] === filterString) {
  resultArray.push(item);
}

}
return resultArray;
  }
  }

