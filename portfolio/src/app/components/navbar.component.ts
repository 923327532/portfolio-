import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         [class]="isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <a href="#hero" class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
            RL
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a *ngFor="let item of navItems"
               [href]="item.href"
               class="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-inter text-sm uppercase tracking-wider"
               [class.active]="activeSection === item.id">
              {{ item.label }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()"
                  class="md:hidden text-slate-300 hover:text-white transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div *ngIf="isMobileMenuOpen"
             class="md:hidden py-4 border-t border-white/10 animate-slide-in">
          <div class="flex flex-col space-y-4">
            <a *ngFor="let item of navItems"
               [href]="item.href"
               (click)="closeMobileMenu()"
               class="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-inter text-sm uppercase tracking-wider py-2">
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .active {
      @apply text-blue-400;
      position: relative;
    }

    .active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #60A5FA, #FB923C);
      border-radius: 1px;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slide-in {
      animation: slideIn 0.3s ease-out;
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';

  navItems = [
    { id: 'hero', label: 'Inicio', href: '#hero' },
    { id: 'about', label: 'Sobre Mí', href: '#about' },
    { id: 'skills', label: 'Habilidades', href: '#skills' },
    { id: 'projects', label: 'Proyectos', href: '#projects' },
    { id: 'experience', label: 'Experiencia', href: '#experience' },
    { id: 'certifications', label: 'Certificaciones', href: '#certifications' },
    { id: 'contact', label: 'Contacto', href: '#contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = this.navItems.map(item => item.id);
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections.reverse()) {
      const element = document.getElementById(sectionId);
      if (element && element.offsetTop <= scrollPosition) {
        this.activeSection = sectionId;
        break;
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}

