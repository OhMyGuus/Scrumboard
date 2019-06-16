import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-create-modal',
    template: 'mock app-create-modal'
})
export class CreateModalMockComponent {
    @Input() repository: any;
}

@Component({
    selector: 'app-burndown',
    template: 'mock app-burndown'
})
export class BurndownMockComponent {
    @Input() sprint: any;
}

@Component({
    selector: 'app-update-modal',
    template: 'mock app-update-modal'
})
export class UpdateModalMockComponent {
    @Input() repository: any;
    @Input() modelData: any;
}

