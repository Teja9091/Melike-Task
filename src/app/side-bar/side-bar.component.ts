import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
selectedButton:number = 2
navbar_buttons:any = [
  {id: 1, name: 'Button 1'},  {id: 2, name: 'Button 2'},  {id: 3, name: 'Button 3'},  {id: 4, name: 'Button 4'},
  {id: 5, name: 'Button 5'},  {id: 6, name: 'Button 6'}]
}
