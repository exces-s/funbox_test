import { createPointObject } from '../../lib';


export const emptyInputText = '';
export const notEmptyInputText = 'test';

// point Ids
export const id1 = 1;
export const id2 = 2;
export const id3 = 3;

// geoObject Ids
export const id11 = 11;
export const id22 = 22;
export const id33 = 33;


export const option11 = {
  label: 'Соединённые Штаты Америки',
  value: { id: '11' },
}

export const geoObject11 = {
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
  id: '11',
  type: 'geoObject'
};

export const geoObject22 = {
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
  id: '22',
  type: 'geoObject'
};

export const geoObject33 = {
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
  id: '33',
  type: 'geoObject'
};

export const geoObjects1 = { [id11]: geoObject11 };
export const geoObjects2 = { [id11]: geoObject11 , [id22]: geoObject22 };
export const geoObjects3 = { [id11]: geoObject11 , [id22]: geoObject22 , [id33]: geoObject33 };


export const rawPoint1 = createPointObject(geoObject11);
export const rawPoint2 = createPointObject(geoObject22);
export const rawPoint3 = createPointObject(geoObject33);

export const point1 = {
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
  type: 'point',
  id: '1'
};

export const point2 = {
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
  type: 'point',
  id: '2'
};

export const point3 = {
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
  type: 'point',
  id: '3'
};

export const pointsOrder1 = [id1, id2];
export const pointsOrder2 = [id3, id2, id1];
export const pointsOrder3 = [id1];

export const points1 = { [id1]: point1, [id2]: point2 };
export const points2 = { [id1]: point1, [id2]: point2, [id3]: point3 };
export const points3 = { [id1]: point1 };


