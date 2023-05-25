import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusPipe'
  })
export class StatusPipe implements PipeTransform {
    transform(value: string): string {
      switch (value) {
        case 'inprogress':
            return 'Đang tư vấn';
        case 'bookmeeting':
            return 'Hẹn đến trung tâm';
        case 'online':
            return 'Muốn học online';
        default:
            return '';
      }
    }
}