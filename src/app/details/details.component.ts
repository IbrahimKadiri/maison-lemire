import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  matchedItem: any;
  currentPath: string = '';

  constructor(private _router: Router, private _dataService: DataService){}

  ngOnInit(): void {
    this.currentPath = this._router.url;
    this.matchedItem = this._dataService.detailText.find(item => item.link === this.currentPath);
  }
}
