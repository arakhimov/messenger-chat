import {Chat} from '../types';

// получение случайной даты с 2019.01.01
function randomDate(start:Date, end:Date) {
  const temp:Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return {
    day: `${temp.getFullYear()}-${/\d\d/.test(`${temp.getMonth()}`) ? temp.getMonth() + 1 : `0${temp.getMonth() + 1}`}-${/\d\d/.test(`${temp.getDate()}`) ? temp.getDate() : `0${temp.getDate()}`}`,
    time: `${/\d\d/.test(`${temp.getHours()}`) ? temp.getHours() : `0${temp.getHours()}`}:${/\d\d/.test(`${temp.getMinutes()}`) ? temp.getMinutes() : `0${temp.getMinutes()}`}`,
  }
}

// Спасибо вам за комментарии и разъяснения. 
// Поправил все моменты кроме изменения структуры данных. Также добавил оператор опциональной
// последоватальности ?. для проверки наличия ключа объекта. Долго думал над изменением структуры данных. 
// Изменил структуру входных данных, но возникли сложности с сортировкой в объекте. Сначала произвел сортировку по всем 
// ключам(названиям чатов) методом for..in для сортировки сообщений в чате. 
// Потом хотел использовать метод Object.intries и сортировать ключи и значения. Еще думаю над этим решением.
// Не совсем пока осознал преимущества этой структуры данных.

export const initialChats: Chat[] = [
  {
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    name: 'Архыз',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    name: 'Челябинская область',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Иваново',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Камчатка',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Холмогорский район',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Байкал',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Нургуш',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Тулиновка',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Остров Желтухина',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  },
  {
    name: 'Владивосток',
    urlImage: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg',
    messages: [
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      {
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: 'arakhimov',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      }
    ]
  }
];