import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {UiService} from '../shared/interfaces.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.sass']
})
export class BrowseComponent implements OnInit {

  constructor(private UiService:UiService ) {

    console.log(environment.mongoUrl)

  }

  ngOnInit(): void {

    //Fetch list of tags from DB to render filter list
    this.UiService.initialTagGet()
      .subscribe(tags=>{

        //Add Active property to tags
        tags = tags.map(tag=>{
          return {
                 _id:tag._id,
                 name: tag.name,
                 icon: tag.icon,
                 tagColor: tag.tagColor,
                 parentTag: tag.parentTag,
                 active: false
                }

         });

        //Update subjects to start tracking filters
        this.UiService.updateActiveTags(tags);

      });

    //Pull and populate a standard set of interfaces to display. Updated later in the component based on different filters and searches
    this.UiService.getNewestUi( 40 )

  }

}
