import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
  
  priavate subscription: Subscription;
  message: any;

  constructor(private alertServe: AlertService) { }

  ngOnInit(): void {
    this.subscription = this.alertServe.getMessage().subscribe(message =>{
      this.message = message;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
