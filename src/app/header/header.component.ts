import {Component, OnInit} from '@angular/core';
import {AuthService} from '../admin/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;

  constructor(private Authservice: AuthService) {
  }

  ngOnInit() {
  }

}
