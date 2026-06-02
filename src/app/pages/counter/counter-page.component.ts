import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
    templateUrl: './counter-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class counterPageComponent {
    firstValue: number = 10;
    counter: number = this.firstValue;
    counterSignal = signal(10);

    increaseBy(value: number) {
        this.counter += value;

        //** Con signals
        this.counterSignal.update(current => current + value);
    }

    resetValue() {
        this.counter = this.firstValue;
        this.counterSignal.set(0) //Con signals
    }
}