import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    details = [
      {
        title: 'CREATE A CAMPAIGN',
        summary: "Easily create a beautiful looking campaign page that represents you and your story.",
      },
      {
        title: 'SPREAD THE WORD',
        summary: "Share your case and raise support and awareness through integrated social sharing tools.",
      },
      {
        title: 'RAISE MONEY',
        summary: "Securely collect donations directly on your campaign page, both online and on mobile devices.",
      },
    ] ;
}
