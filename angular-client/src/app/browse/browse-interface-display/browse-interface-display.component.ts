import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import {UiService} from '../../shared/interfaces.service'
import {switchMap} from 'rxjs/operators'
import {Ui} from '../../shared/models/ui.model'
import {Tags} from '../../shared/models/tags.model'

@Component({
  selector: 'app-browse-interface-display',
  templateUrl: './browse-interface-display.component.html',
  styleUrls: ['./browse-interface-display.component.sass']
})
export class BrowseInterfaceDisplayComponent implements OnInit {

  public interfaces: Ui[];
  private interfacesMaster: Ui[];

  private tags: Tags[];

  //Parameters used to configure Angular Material pagination module
  public pagination = {
    pageIndex:0,
    length:0,
    pageSize: 6,
    pageSizeOptions: [6, 12]
  }

  constructor(private UiService: UiService) { }

  ngOnInit(): void {

    //Wait for both observables to emit (UiService updateActiveTags)
    // and use results to render interfaces
    zip(

      this.UiService.activeTags$,
      this.UiService.activeFilters$

    ).pipe(
      switchMap(data => {
        this.tags = data[0];
        console.log('tags');
        console.log(this.tags);
        return this.UiService.getUiByFilter(data[1])
      })
    )
    .subscribe(data=>{

      console.log(data);

      //Set interfaces to display
      this.interfacesMaster = data; //Manages pagination
      this.interfaces = this.interfacesMaster; //Displayed interfaces per page

      console.log(this.interfacesMaster)

      //Update interfaces to match tag ID's to proper display names
      this.populateTagNames();

      console.log(this.interfacesMaster)

      //Update pagination based on number of interface objects returned
      this.pagination.length = this.interfacesMaster.length; //Set total on pagination params
      this.populatePage(this.pagination); //Send pagination params to material module

    })

  }

  /** Callback used by pagination module on user interaction */
  populatePage( e ) {

    let start = (e.pageIndex > 0) ? e.pageIndex * e.pageSize: e.pageIndex ;
    let end = start + e.pageSize;

    this.interfaces = this.interfacesMaster.slice(start,end);

  }

  //Assign tag names to ID's
  populateTagNames() {
    for (const ui of this.interfacesMaster) {

      var tags = this.tags.filter(tag=>ui.tags.includes(tag._id))
                  .map(tag=>{return {name: tag.name, tagColor:tag.tagColor}})

      ui.tags = tags;

    }
  }

}
