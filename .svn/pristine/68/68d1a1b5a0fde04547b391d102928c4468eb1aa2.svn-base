import { forwardRef } from "react";

export class DateRange {
  constructor(start: Date, end: Date | null) {
    this.start = start;
    this.end = end;
  }

  start: Date;
  end: Date | null;
}

export const ExampleCustomInput = forwardRef<HTMLButtonElement, { value: string, onClick: React.MouseEventHandler<HTMLButtonElement> }>(({ value, onClick }, ref) => {
  // var v=  value.split('-', 'à')
  return (
    <button className="i i2" onClick={onClick} ref={ref}>
      {value}
    </button>)
});

