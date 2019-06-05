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


@Component({
    selector: 'app-create-modal',
    template: 'mock app-create-modal'
})
export class CreateModalMockComponent {
    @Input() repository: any;
}


@Component({
    selector: 'app-update-modal',
    template: 'mock app-update-modal'
})
export class UpdateModalMockComponent {
    @Input() repository: any;
    @Input() modelData: any;
}
