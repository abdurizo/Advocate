import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private router: Router) {}
  menus = [
    {
      id: 1,
      title: 'Menu',
      path: '/menu',
    },
    {
      id: 2,
      title: 'Blog',
      path: '/blog',
    },
    {
      id: 3,
      title: 'Pricing',
      path: '/pricing-page',
    },
    {
      id: 4,
      title: 'Contact',
      path: '/contact',
    },
  ];
  modalType: 'login' | 'sing_up' | null = null;
  /**
   *
   */
  closeModal() {
    this.modalType = null;
    document.body.style.overflow = '';
  }
  /**
   *
   */
  openLogin() {
    this.modalType = 'login';
    document.body.style.overflow = 'hidden';
  }
  /**
   *
   */
  openSingUp() {
    this.modalType = 'sing_up';
    document.body.style.overflow = 'hidden';
  }
  /**
   *
   */
  menuOpen = false;
  closeMenu() {
    this.menuOpen = false;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
  /**
   *
   */
  goTo(path: string) {
    this.router.navigate([path]);
    document.body.style.overflow = '';
  }
}
