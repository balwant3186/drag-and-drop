import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { Board } from '../../models/board.model';
import { Column } from '../../models/column.model';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'Some random idea',
      'This is another random idea',
      'build an awesome application',
    ]),
    new Column('Research', [
      'Lorem ipsum',
      'foo',
      "This was in the 'Research' column",
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep',
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog',
    ]),
  ]);

  ideas = [
    'Some random idea',
    'This is another random idea',
    'build an awesome application',
  ];

  pending = ['Lorem ipsum', 'foo', "This was in the 'Research' column"];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
