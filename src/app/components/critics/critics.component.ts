import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-critics',
  templateUrl: './critics.component.html',
  styleUrls: ['./critics.component.css'],
})
export class CriticsComponent implements OnInit {
  critics = [
    {
      id: 1,
      name: 'Isa Runnicles',
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      description: 'Speech Pathologist',
    },
    {
      id: 2,
      name: 'Che Newborn',
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      description: 'Senior Cost Accountant',
    },
    {
      id: 3,
      name: 'Tansy Ivasyushkin',
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      description: 'Social Worker',
    },
    {
      id: 4,
      name: 'Silvester Worshall',
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      description: 'Database Administrator I',
    },
    {
      id: 5,
      name: 'Stefano Chadburn',
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      description: 'Graphic Designer',
    },
    {
      id: 6,
      name: 'Andie Sygroves',
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      description: 'Civil Engineer',
    },
    {
      id: 7,
      name: 'Jenifer Brabender',
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      description: 'Staff Accountant III',
    },
    {
      id: 8,
      name: 'Papagena Farbrace',
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      description: 'VP Marketing',
    },
    {
      id: 9,
      name: 'Farrah Perris',
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      description: 'Occupational Therapist',
    },
    {
      id: 10,
      name: 'Britt Figg',
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      description: 'Product Engineer',
    },
  ];

  public criticQuery:string="";
  constructor() {}

  ngOnInit(): void {}
}
