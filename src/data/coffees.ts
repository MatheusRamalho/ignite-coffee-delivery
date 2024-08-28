import { v4 as uuidv4 } from 'uuid'

import { Coffee } from '@/types/Coffee'

import CoffeeAmericanoImg from '@/assets/imgs/coffees/coffee-americano.png'
import CoffeeArabeImg from '@/assets/imgs/coffees/coffee-arabe.png'
import CoffeeCapuccinoImg from '@/assets/imgs/coffees/coffee-capuccino.png'
import CoffeeChocolateQuenteImg from '@/assets/imgs/coffees/coffee-chocolate-quente.png'
import CoffeeComLeiteImg from '@/assets/imgs/coffees/coffee-com-leite.png'
import CoffeeCubanoImg from '@/assets/imgs/coffees/coffee-cubano.png'
import CoffeeExpressoCremosoImg from '@/assets/imgs/coffees/coffee-expresso-cremoso.png'
import CoffeeExpressoImg from '@/assets/imgs/coffees/coffee-expresso.png'
import CoffeeGeladoImg from '@/assets/imgs/coffees/coffee-gelado.png'
import CoffeeHavaianoImg from '@/assets/imgs/coffees/coffee-havaiano.png'
import CoffeeIrlandesImg from '@/assets/imgs/coffees/coffee-irlandes.png'
import CoffeeLatteImg from '@/assets/imgs/coffees/coffee-latte.png'
import CoffeeMacchiatoImg from '@/assets/imgs/coffees/coffee-macchiato.png'
import CoffeeMocaccinoImg from '@/assets/imgs/coffees/coffee-mocaccino.png'

export const COFFEES_CART_DATA: Coffee[] = [
    {
        id: uuidv4(),
        image: CoffeeExpressoImg,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 990,
        types: ['Tradicional'],
    },
    {
        id: uuidv4(),
        image: CoffeeAmericanoImg,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 990,
        types: ['Tradicional'],
    },
]

export const COFFEES_DATA: Coffee[] = [
    {
        id: uuidv4(),
        image: CoffeeExpressoImg,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 990,
        types: ['Tradicional'],
    },
    {
        id: uuidv4(),
        image: CoffeeAmericanoImg,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 990,
        types: ['Tradicional'],
    },
    {
        id: uuidv4(),
        image: CoffeeExpressoCremosoImg,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 990,
        types: ['Tradicional'],
    },
    {
        id: uuidv4(),
        image: CoffeeGeladoImg,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 990,
        types: ['Tradicional', 'Gelado'],
    },
    {
        id: uuidv4(),
        image: CoffeeComLeiteImg,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 990,
        types: ['Tradicional', 'Com Leite'],
    },
    {
        id: uuidv4(),
        image: CoffeeLatteImg,
        name: 'Latte',
        description:
            'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 990,
        types: ['Tradicional', 'Com Leite'],
    },
    {
        id: uuidv4(),
        image: CoffeeCapuccinoImg,
        name: 'Capuccino',
        description:
            'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 990,
        types: ['Tradicional', 'Com Leite'],
    },
    {
        id: uuidv4(),
        image: CoffeeMacchiatoImg,
        name: 'Macchiato',
        description:
            'Café expresso misturado com um pouco de leite quente e espuma',
        price: 990,
        types: ['Tradicional', 'Com Leite'],
    },
    {
        id: uuidv4(),
        image: CoffeeMocaccinoImg,
        name: 'Mocaccino',
        description:
            'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 990,
        types: ['Tradicional', 'Com Leite'],
    },
    {
        id: uuidv4(),
        image: CoffeeChocolateQuenteImg,
        name: 'Chocolate Quente',
        description:
            'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 990,
        types: ['Tradicional', 'Com Leite'],
    },
    {
        id: uuidv4(),
        image: CoffeeCubanoImg,
        name: 'Cubano',
        description:
            'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 990,
        types: ['Tradicional', 'Alcoólico', 'Gelado'],
    },
    {
        id: uuidv4(),
        image: CoffeeHavaianoImg,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 990,
        types: ['Especial'],
    },
    {
        id: uuidv4(),
        image: CoffeeArabeImg,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 990,
        types: ['Especial'],
    },
    {
        id: uuidv4(),
        image: CoffeeIrlandesImg,
        name: 'Irlandês',
        description:
            'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 990,
        types: ['Especial', 'Alcoólico'],
    },
]
