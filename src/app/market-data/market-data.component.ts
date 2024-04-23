import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-market-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-data.component.html',
  styleUrl: './market-data.component.css',
})
export class MarketDataComponent {
  main_data: any = [
    {
      id: 1,
      name: 'Vanguard S&P 500 Etf',
      code: 'VOO',
      change: 2.62,
      percentage: 0.57,
      price: 462.61,
      sub_name: 'Vanguard'
    },
    {
      id: 2,
      name: 'Telo Genomics Corp',
      code: 'TELO',
      change: 4.23,
      percentage: 0,
      price: 43.23,
      sub_name: 'Genomics'
    },
    {
      id: 3,
      name: 'Asmi Holding Nv',
      code: 'ASML',
      change: 5.21,
      percentage: 2,
      price: 521,
      sub_name: 'Asmi'
    },
    {
      id: 4,
      name: 'Apple Inc',
      code: 'AAPL',
      change: 3.24,
      percentage: 1,
      price: 452,
      sub_name: 'Apple'
    },
    {
      id: 5,
      name: 'Nvidia Corporation',
      code: 'NVDA',
      change: 2.12,
      percentage: 1.52,
      price: 322,
      sub_name: 'Nvidia'
    },
    {
      id: 6,
      name: 'Tesla Motors Inc',
      code: 'TSLA',
      change: 4.13,
      percentage: 0.67,
      price: 422,
      sub_name: 'Tesla'
    },
    {
      id: 7,
      name: 'Taiwan Semiconductor',
      code: 'TSM',
      change: 3.23,
      percentage: 2.61,
      price: 534,
      sub_name: 'Taiwan'
    },
    {
      id: 8,
      name: 'Direxion Daily China Bull',
      code: 'TSM',
      change: 1.03,
      percentage: 2.02,
      price: 231,
      sub_name: 'Direxion'
    },
    {
      id: 9,
      name: 'Etherium Tracker',
      code: 'XBTE',
      change: 6.24,
      percentage: 4,
      price: 632,
      sub_name: 'Etherium'
    },
    {
      id: 10,
      name: 'Blackrock Capital Allocation',
      code: 'BCAT',
      change: 2.85,
      percentage: 0.52,
      price: 231,
      sub_name: 'Blackrock'
    },
  ];
  market_data:any = []
  modal_buttons: any = [
    { id: 1, name: 'Buy', color: 'bg-emerald-400', icon: 'buy_icon' },
    { id: 2, name: 'Sell', color: 'bg-rose-500', icon: 'sell_icon' },
  ];
  isPopover:boolean = false
  isDataAvailable:boolean = true
  selectedData:any = {}
  constructor() {}

  ngOnInit() {
    this.market_data = [...this.main_data]
    setInterval(() => {
      this.changePrice()
    },1000)
  }

  showHidePopover(obj:any = {}) {
    this.isPopover = !this.isPopover;
    if(Object.keys(obj).length > 0) this.selectedData = obj
  }

  onSearch(event:any) {
    this.market_data = [...this.main_data]
    let tmpTxt = event.target.value.toLowerCase()
    this.market_data = this.market_data.filter((f:any) => f.name.toLowerCase().includes(tmpTxt));
    if(this.market_data.length == 0) this.isDataAvailable = false
    else this.isDataAvailable = true
  }

  randomNumber() {
    const min = -5;
    const max = 5;
    const decimalPlaces = 2  
    const randomNumber = Math.random() * (max - min) + min;  
    return parseFloat(randomNumber.toFixed(decimalPlaces));
  }
  
  changePrice() {
    if(this.market_data.length > 0) {
      let tmpVal = this.randomNumber();
      let tmpIndex =  Math.floor(Math.random() * 10);
      let item = this.market_data[tmpIndex]
      item.change = tmpVal
      item.price = Math.floor(item.price + tmpVal)
    } 
  }
  

}
