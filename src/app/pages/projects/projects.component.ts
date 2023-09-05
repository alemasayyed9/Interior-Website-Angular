import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectListService } from 'src/app/services/project-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor(private service: ProjectListService, private router: Router){}

  galleryData: any;

  ngOnInit(): void {
    
    this.galleryData = this.service.galleryDetails;

    // Navbar css 
    const navId = Array.from(
      document.getElementsByClassName('navbar navbar-expand-lg') as HTMLCollectionOf<HTMLElement>,
    );

    const navtitle = Array.from(
      document.getElementsByClassName('navbar-brand') as HTMLCollectionOf<HTMLElement>,
    );

    if(this.router.url === '/projects')
    {
    navtitle.forEach(nav => {
      nav.style.fontSize = '25px';
      nav.style.color ='black';
    });
  }

    if(this.router.url === '/projects')
    {
    navId.forEach(nav => {
      nav.style.backgroundImage = 'linear-gradient(to left, black , white)';
      nav.style.padding = '5px';
      nav.style.position = 'sticky';
    });
  }
  }



}
