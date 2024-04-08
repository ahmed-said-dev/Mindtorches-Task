import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-flippedCard',
  templateUrl: './flippedCard.component.html',
  styleUrls: ['./flippedCard.component.css']
})
export class flippedCardComponent implements OnInit {

  employee: any;

  constructor(private dataStoreService: DataStoreService) {
  }

  ngOnInit(): void {
    this.employee = this.dataStoreService.dataEmployees();
  }

  flip() {
    const card: HTMLElement | null = document.querySelector('.card-custom');
    const items: NodeListOf<HTMLElement> = document.querySelectorAll('.item-custom');

    if (card) {
      card.classList.toggle('flip-custom');
    }

    items.forEach((item: HTMLElement) => {
      item.classList.toggle('flip-custom');
    });
  }
}
