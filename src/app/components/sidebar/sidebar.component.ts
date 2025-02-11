import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,CommonModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  menuItems: MenuItem[] = [
    { icon: 'fas fa-tachometer-alt', label: 'Dashboard', route: '/home' },
    { icon: 'fas fa-users', label: 'Users', route: '/users' },
    { icon: 'fas fa-box', label: 'Products', route: '/products' },
    { icon: 'fas fa-shopping-cart', label: 'Orders', route: '/orders' },
    { icon: 'fas fa-chart-bar', label: 'Analytics', route: '/analytics' },
    { icon: 'fas fa-cog', label: 'Settings', route: '/settings' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
