import { createRawPointObject, createLable } from '../../lib';

// texts
export const emptyInputText = '';
export const notEmptyInputText = 'test';

// point Ids
export const id_p_USA = 1;
export const id_p_BRN = 2;
export const id_p_MSK = 3;

// geoObject Ids
export const id_go_USA = 11;
export const id_go_BRN = 22;
export const id_go_MSK = 33;


// geoObjects
export const geoObject_USA = {
  metaDataProperty: {
    GeocoderMetaData: {
      kind: 'country',
      text: 'Соединённые Штаты Америки',
      precision: 'other',
      Address: {
        country_code: 'US',
        formatted: 'Соединённые Штаты Америки',
        Components: [
          {
            kind: 'country',
            name: 'Соединённые Штаты Америки'
          }
        ]
      },
      AddressDetails: {
        Country: {
          AddressLine: 'Соединённые Штаты Америки',
          CountryNameCode: 'US',
          CountryName: 'Соединённые Штаты Америки'
        }
      }
    }
  },
  name: 'Соединённые Штаты Америки',
  boundedBy: {
    Envelope: {
      lowerCorner: '-193.546079 16.530514',
      upperCorner: '-66.910205 71.49891'
    }
  },
  Point: {
    pos: '-99.115868 36.952915'
  },
  id: id_go_USA,
  type: 'geoObject'
};
export const geoObject_BRN = {
  metaDataProperty: {
    GeocoderMetaData: {
      kind: 'locality',
      text: 'Россия, Брянск',
      precision: 'other',
      Address: {
        country_code: 'RU',
        formatted: 'Россия, Брянск',
        Components: [
          {
            kind: 'country',
            name: 'Россия'
          },
          {
            kind: 'province',
            name: 'Центральный федеральный округ'
          },
          {
            kind: 'province',
            name: 'Брянская область'
          },
          {
            kind: 'area',
            name: 'городской округ Брянск'
          },
          {
            kind: 'locality',
            name: 'Брянск'
          }
        ]
      },
      AddressDetails: {
        Country: {
          AddressLine: 'Россия, Брянск',
          CountryNameCode: 'RU',
          CountryName: 'Россия',
          AdministrativeArea: {
            AdministrativeAreaName: 'Брянская область',
            SubAdministrativeArea: {
              SubAdministrativeAreaName: 'городской округ Брянск',
              Locality: {
                LocalityName: 'Брянск'
              }
            }
          }
        }
      }
    }
  },
  description: 'Россия',
  name: 'Брянск',
  boundedBy: {
    Envelope: {
      lowerCorner: '34.191155 53.183819',
      upperCorner: '34.557452 53.374503'
    }
  },
  Point: {
    pos: '34.363443 53.243562'
  },
  id: id_go_BRN,
  type: 'geoObject'
};
export const geoObject_MSK = {
  metaDataProperty: {
    GeocoderMetaData: {
      kind: 'province',
      text: 'Россия, Москва',
      precision: 'other',
      Address: {
        country_code: 'RU',
        formatted: 'Россия, Москва',
        Components: [
          {
            kind: 'country',
            name: 'Россия'
          },
          {
            kind: 'province',
            name: 'Центральный федеральный округ'
          },
          {
            kind: 'province',
            name: 'Москва'
          }
        ]
      },
      AddressDetails: {
        Country: {
          AddressLine: 'Россия, Москва',
          CountryNameCode: 'RU',
          CountryName: 'Россия',
          AdministrativeArea: {
            AdministrativeAreaName: 'Москва'
          }
        }
      }
    }
  },
  description: 'Россия',
  name: 'Москва',
  boundedBy: {
    Envelope: {
      lowerCorner: '36.803259 55.142627',
      upperCorner: '37.967682 56.021281'
    }
  },
  Point: {
    pos: '37.622504 55.753215'
  },
  id: id_go_MSK,
  type: 'geoObject'
};

// geoObjects states
export const geoObjects1 = { 
  [id_go_USA]: geoObject_USA
};
export const geoObjects2 = {
  [id_go_USA]: geoObject_USA,
  [id_go_BRN]: geoObject_BRN
};
export const geoObjects3 = {
  [id_go_USA]: geoObject_USA,
  [id_go_BRN]: geoObject_BRN,
  [id_go_MSK]: geoObject_MSK
};

// options
export const option_USA = {
  label: createLable(geoObject_USA),
  value: { id: id_go_USA },
};
export const option_BRN = {
  label: createLable(geoObject_BRN),
  value: { id: id_go_BRN },
};
export const option_MSK = {
  label: createLable(geoObject_MSK),
  value: { id: id_go_MSK },
};

// rawPoints
export const rawPoint_USA = createRawPointObject(geoObject_USA);
export const rawPoint_BRN = createRawPointObject(geoObject_BRN);
export const rawPoint_MSK = createRawPointObject(geoObject_MSK);

// pointObjects
export const point_USA = { id: id_p_USA, ...rawPoint_USA };
export const point_BRN = { id: id_p_BRN, ...rawPoint_BRN };
export const point_MSK = { id: id_p_MSK, ...rawPoint_MSK };

// pointsOrders
export const pointsOrder1 = [id_p_USA];
export const pointsOrder2 = [id_p_USA, id_p_BRN];
export const pointsOrder3 = [id_p_MSK, id_p_BRN, id_p_USA];

// points states
export const points1 = {
  [id_p_USA]: point_USA,
};
export const points2 = {
  [id_p_USA]: point_USA,
  [id_p_BRN]: point_BRN,
};
export const points3 = {
  [id_p_USA]: point_USA,
  [id_p_BRN]: point_BRN,
  [id_p_MSK]: point_MSK,
};

// for lib tests
export const point_lib_USA = {
  Point: {
    pos: '-99.115868 36.952915'
  },
  boundedBy: {
    Envelope: {
      lowerCorner: '-193.546079 16.530514',
      upperCorner: '-66.910205 71.49891'
    }
  },
  metaDataProperty: {
    GeocoderMetaData: {
      Address: {
        Components: [
          {
            kind: 'country',
            name: 'Соединённые Штаты Америки'
          }
        ],
        country_code: 'US',
        formatted: 'Соединённые Штаты Америки'
      },
      AddressDetails: {
        Country: {
          AddressLine: 'Соединённые Штаты Америки',
          CountryName: 'Соединённые Штаты Америки',
          CountryNameCode: 'US'
        }
      },
      kind: 'country',
      precision: 'other',
      text: 'Соединённые Штаты Америки'
    }
  },
  name: 'Соединённые Штаты Америки',
  type: 'point'
};

export const optionsArr1 = [
  {
    label: 'Соединённые Штаты Америки',
    value: { id : '11' },
  },
];

export const optionsArr2 = [
  {
    label: 'Соединённые Штаты Америки',
    value: { id : '11' },
  },
  {
    label: 'Брянск (Россия)',
    value: { id: '22' },
  },
];

export const polylineCoords_pointsOrder3 = [['55.753215', '37.622504'], ['53.243562', '34.363443'], ['36.952915', '-99.115868']];