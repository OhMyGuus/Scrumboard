import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-update-story',
    template: 'mock app-update-story'
})
export class UpdateStoryMockComponent {
    @Input() storyData: any;
}

@Component({
    selector: 'app-create-story',
    template: 'mock app-create-story'
})
export class CreateStoryMockComponent {
    @Input() storyData: any;
}