export interface IPizza {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const pizzasList: IPizza[] = [
  {
    id: 1,
    name: 'Пеперони',
    description: 'Салями, томаты и великолепный сыр на подложке из тончайшего теста',
    image: 'image_part_001.jpg',
    price: 99000
  },
  {
    id: 2,
    name: 'Греческая мечта',
    description: 'Креветки, фета и маслины на воздушном тесте',
    image: 'image_part_002.jpg',
    price: 109000
  },
  {
    id: 3,
    name: 'Сальса',
    description: 'Фета, маслины и жгучий чили на хрустящем чурро',
    image: 'image_part_003.jpg',
    price: 89000
  },
  {
    id: 4,
    name: 'Сладкий бекон',
    description: 'Очумительное сочетание бекона, ананасов и томатного соуса на воздушном тесте',
    image: 'image_part_004.jpg',
    price: 89000
  },
  {
    id: 5,
    name: 'Машрум',
    description: 'Грибы, сладкий перец и лук, вместе с веганским сыром - ваша диета не будет нарушена!',
    image: 'image_part_005.jpg',
    price: 79000
  },
  {
    id: 6,
    name: 'Халапеньо',
    description: 'Фета, томаты и лук, немного маринованного халапеньо и пряный сыр',
    image: 'image_part_006.jpg',
    price: 79000
  },
  {
    id: 7,
    name: 'Гавайи',
    description: 'Креветки и ананасы, маслины и лосось на плавленном молочном сыре',
    image: 'image_part_007.jpg',
    price: 109000
  },
  {
    id: 8,
    name: 'Острый машрум',
    description: 'Тот же машрум - но с маринованным халапеньо и острой сырной присыпкой - Ммм...',
    image: 'image_part_008.jpg',
    price: 79000
  },
  {
    id: 9,
    name: 'Мужской каприз',
    description: 'Двойная порция салями и бекона, сладкий перец и острый чили, чесночок - не берите на свиданиях, пожалуйста',
    image: 'image_part_009.jpg',
    price: 119000
  },
]
