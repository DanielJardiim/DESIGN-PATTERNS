import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 10);
        const meat = new Meat('Carne', 20);
        this._meal.add(rice, beans, meat);
        return this;
    }
    makeBeverage(): this {
        throw new Error('Method not implemented.');
    }
    makeDessert(): this {
        throw new Error('Method not implemented.');
    }
}
