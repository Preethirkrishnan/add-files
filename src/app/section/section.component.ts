import { Component } from '@angular/core';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
    text = "Join the community that is committed to making a difference in the world we share.";
    button = ['explore campaigns', 'start a campaign']
}
