import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Subject, Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {environment} from '../../environments/environment';

import {Ui} from './models/ui.model'
import {Tags} from './models/tags.model'

@Injectable({providedIn: 'root'})
export class UiService {

  //Subject to pass filter IDs to mongoose
  public activeFilters$ = new Subject<Tags[]>();
  //Subject to pass active filters to display components
  public activeTags$ = new Subject<Tags[]>();
  //Subject to pass filtered interface items
  public browseInterfaces$ = new Subject<Ui[]>();

  constructor( private http: HttpClient ) {}

  /**Pull all tags
  Typically utilized on page load to popualte filters, or rendering a component that requires a name to tag ID match**/
  initialTagGet():Observable<any[]> {
    return this.http.get<{data:Tags[]}>(environment.apiUrl+'/api/tags')
    .pipe(map(res=>{
      return res.data
    }))
  }

  /**Alter tag object to format hierarchy.
  Tags can be a child of another based on a "parentTag" property. This needs to be rendered appropriately in some cases (filter list)**/
  tagFormatHierachy( tags ) {

    var parents =[];

    //Build parents
    for (const tag of tags) {

      if( tag.parentTag === null) {

        parents.push({
          _id:tag._id,
          name:tag.name,
          icon: tag.icon,
          tagColor: tag.tagColor,
          children: tags.filter(item=>item.parentTag === tag._id)
        })

      }

    }

    return parents;

  }

  /*
  * Take array of all filters, active and non and only return the ID for each. To be passed in Mongoose as a filtering option
  * @param {object} value - Tags interface with additional Active boolean property
  * @return {object} Return object of _id properties
  */
  formatFilters( filters ) {

    return filters
      .filter(tag=>{return tag.active;})
      .map(
        tag=>{

          //Add children to filters if parent is selected
          if (tag.parentTag === null && tag.active) {

            let children = filters.filter(item=>{return item.parentTag === tag._id})
                                  .map(child=>{return child._id})

            children.push(tag._id)
            return children;

          } else if (tag.active){

            return tag._id;

          }

        })
        .flat();

  }

  /**Pull All Interfaces by upload date (newest first)
  Typically utilized on page load of browse component. Limited to pull one page at a time, defined by pagination variable*/
  getNewestUi( count ){

    return this.http.get<{data:Ui[]}>(environment.apiUrl+'/api/ui/'+count)
    .pipe(map(res=>{ return res.data; }))
    .subscribe(items=>{
      this.browseInterfaces$.next(items);
    })
  }

  //Update filtering options
  updateActiveTags( activeTags) {

    let filters = this.formatFilters( activeTags );
    //Return all tags if filters empty
    filters = ( filters.length ) ? filters : activeTags.filter(tag=>{return tag.active == false;}).map(tag=>{return tag._id}).flat();

    //Update subject for use in updating filter control display components
    this.activeTags$.next(activeTags);

    //Update filter IDs for use in pulling from database
    this.activeFilters$.next(filters);

  }

  getUiByFilter(filter) {

    return this.http.post<{message: string, data: any}>(environment.apiUrl+'/api/ui/filtered',filter)
      .pipe(map(res=>{return res.data;}))

  }

}
