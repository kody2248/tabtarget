import { Component, OnInit } from '@angular/core';
import {UiService} from '../../shared/interfaces.service';
import {Tags} from '../../shared/models/tags.model'

@Component({
  selector: 'app-browse-filter-control',
  templateUrl: './browse-filter-control.component.html',
  styleUrls: ['./browse-filter-control.component.sass']
})
export class BrowseFilterControlComponent implements OnInit {

  public tags:Tags[] = [];
  public orderedTags: any;
  private activeTags: any;

  constructor( private UiService:UiService ) {}

  ngOnInit(): void {

    //Watch for updates on display subject from UiService
    this.UiService.activeTags$
      .subscribe(tags=>{

        //Format tags to be rendered
        this.orderedTags = this.UiService.tagFormatHierachy(tags);

        //Save separate array to update and track actives. Used to update subjects each time a new tag is selected
        this.activeTags = tags;

      })

  }

  updateFilter(event,id) {

    event.stopPropagation();

    //Find and store current index of passed ID
    let index = this.activeTags.findIndex(x => x._id ===id);
    //Get clicked tag object
    let tag = this.activeTags[index];
    //If the selected tag is a child, find the parent index
    let parentIndex = this.activeTags.findIndex(x => x._id === tag.parentTag);
    //Store parent object
    let parent = this.activeTags[parentIndex];

    //If tag is not already active, proceed. Otherwise just toggle
    if( !tag.active ) {

      console.log('not active')

      //Update tag active
      tag.active = true;

      //If all children are selected, make parent active and remove children
      if( this.isAllChildrenActive( tag.parentTag ) ) {

        console.log('all children')
        console.log(`test ${this.isAllChildrenActive(tag.parentTag)}`)

        //Set parent active true
        this.activeTags[parentIndex].active = true;

        //Find and set children active false
        let children = this.activeTags
                        .map((child, index) => child.parentTag === tag.parentTag ? index : '').filter(String)

        for (const child of children) {

          this.activeTags[child].active = false;

        }

        //Deactivate parent if active and child is selected
      } else if ( tag.parentTag ) {

        console.log('has parent')

        parent.active = false;

          //If Parent is clicked with children active
      } else if (!tag.parentTag) {

        console.log('this is a parent')

        //Find and set children active false
        let children = this.activeTags
                        .map((child, index) => child.parentTag === id ? index : '').filter(String)

        for (const child of children) {

          this.activeTags[child].active = false;

        }

      }

    } else {

      //Toggle
      tag.active = false;

    }

    //Pass active tags to service to update subjects for both displaying and pulling data
    this.UiService.updateActiveTags( this.activeTags);

  }

  //If tag is a parent, determine is all children are active
  isAllChildrenActive( id ){

    return (this.activeTags.filter(item=>{ return item.parentTag === id && item.active === false }).length > 0) ? false : true

  }

  //If tag is a parent, determine if any child is active
  isChildActive( id ) {
    return this.activeTags.filter(item=>{ return item.parentTag === id && item.active }).length > 0;
  }

  //Determine if tag is a parent
  isParent(id){
    let index = this.activeTags.findIndex(x => x._id ===id)
    return this.activeTags[index].parentTag === null;

  }

  //Determine if tag is active
  isActive(id){
    let index = this.activeTags.findIndex(x => x._id ===id)
    return this.activeTags[index].active;
  }

}
