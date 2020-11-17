import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
//declare var $: any;

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  public config: PerfectScrollbarConfigInterface = {};
  


  openBackDropCustomClass(content3:string) {
		this.modalService.open(content3, {backdropClass: 'light-red-backdrop'});
	}

	openWindowCustomClass(content3:string) {
		this.modalService.open(content3, { windowClass: 'light-modal' });
	}

	openSm(content3:string) {
		this.modalService.open(content3, { size: 'sm' });
	}

	openLg(content3:string) {
		this.modalService.open(content3, { size: 'lg' });
	}

	openVerticallyCentered(content3:string) {
		this.modalService.open(content3, { centered: true });
	}

	openstackmodal(contentstack:string) {
	    	this.modalService.open(contentstack, {size: 'lg'});
	}


	opensubmodal(contentsubmodal:string) {
	    	this.modalService.open(contentsubmodal, {size: 'lg'});
	}


    constructor(public router: Router,
      private modalService: NgbModal) {}

	public innerWidth: number=0;
	public defaultSidebar: string='';
	public showMobileMenu = false;
	public expandLogo = false;
  public sidebartype = 'full';
  
  

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/starter']);
    }
    this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = 'mini-sidebar';
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType() {
    switch (this.sidebartype) {
      case 'full':
        this.sidebartype = 'mini-sidebar';
        break;

      case 'mini-sidebar':
        this.sidebartype = 'full';
        break;

      default:
    }
  }
}
