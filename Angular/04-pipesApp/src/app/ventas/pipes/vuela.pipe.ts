import { Pipe, PipeTransform } from "@angular/core";
import { TrendingDatetimeEnum } from '../../../../../02-gifsApp/src/app/gifs/interface/gifs.interfaces';
import { Translations } from '../../../../../03-paisesApp/src/app/pais/interfaces/pais.interface';

@Pipe({
	name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
	transform(valor: boolean): string{
		return (valor) ? 'vuela' : 'no vuela'
	}
}