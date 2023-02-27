import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/Services/Logout/logout.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private logoutService: LogoutService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.logoutService.logout().subscribe(
      response => {
        // do something with the response if needed
        this.router.navigate(['/login']);
      },
      error => {
        // handle the error if needed
      }
    );
  }

}
