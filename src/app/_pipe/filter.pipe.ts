import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  /*transform(items: any[], searchTerm: string): any[] {
    if(!items) return [];
    if(!searchTerm) return items;
searchTerm = searchTerm.toLowerCase();

return items.filter( it => {
		alert(JSON.stringify(it))
      return it.toLowerCase().includes(searchTerm);
    });
   }*/

   /*
  transform(items: any [], searchTerm: string) : any[] {
  	if(!items) return [];
    if(!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => item.name.toLowerCase().indexOf(searchTerm) !== -1);
  }*/


  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: any) => this.applyFilter(item, searchText));
   /* return items.filter( it => {
      return it.toLowerCase().includes(filter);
    });*/
   
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Book} book The book to compare to the filter.
   * @param {Book} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(item: any, searchText: string): boolean {
    for (let field in item) {
    	
          	if (item[field].toString().toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
          		return false;
        	}
    }
    return true;
  }

}
