const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const promise = require('bluebird');

const rawPath = path.join(`${__dirname}/../restaurant.txt`);
const readFile = promise.promisify(fs.readFile);

mongoose.connect('mongodb://student:student1@ds149742.mlab.com:49742/restaurants');

const restaurantSchema = {
  id: { type: Number, unique: true },
  name: { type: String },
  url: { type: String },
  price: { type: String },
  rating: { type: Number },
  review_count: { type: Number },
  phone: { type: String },
  location: {
    address1: { type: String },
    city: { type: String },
    state: { type: String },
    zip_code: { type: Number },
    country: { type: String },
  },
  hours: [
    {
      open: [
        {
          end: { type: Number },
          day: { type: Number },
          start: { type: Number },
        },
        {
          end: { type: Number },
          day: { type: Number },
          start: { type: Number },
        },
        {
          end: { type: Number },
          day: { type: Number },
          start: { type: Number },
        },
        {
          end: { type: Number },
          day: { type: Number },
          start: { type: Number },
        },
        {
          end: { type: Number },
          day: { type: Number },
          start: { type: Number },
        },
        {
          end: { type: Number },
          day: { type: Number },
          start: { type: Number },
        },
        {
          end: { type: Number },
          day: { type: Number },
          start: { type: Number },
        },
      ],
    },
  ],
  categories: [
    {
      type: { type: String },
    },
  ],
  'From the Business': { type: String },
  more_info: {
    'Has Soy-free Options': { type: Boolean },
    'Liked by Vegetarians': { type: Boolean },
    'Takes Reservations': { type: Boolean },
    Delivery: { type: Boolean },
    'Take-out': { type: Boolean },
    'Accepts Credit Cards': { type: Boolean },
    'Accepts Apple Pay': { type: Boolean },
    'Accepts Google Pay': { type: Boolean },
    'Good For': { type: String },
    'Parking Street': { type: Boolean },
    'Bike Parking': { type: Boolean },
    'Wheelchair Accessible': { type: Boolean },
    'Good for Kids': { type: Boolean },
    'Good for Groups': { type: Boolean },
    'Attire Casual': { type: String },
    'Noise Level Average': { type: String },
    Alcohol: { type: Boolean },
    'Outdoor Seating': { type: Boolean },
    'Wi-Fi': { type: Boolean },
    'Has TV': { type: Boolean },
    'Waiter Service': { type: Boolean },
    Caters: { type: Boolean },
    'Gender Neutral Restroom': { type: Boolean },
  },
  reports: 0,
};

const restaurant = mongoose.model('restaurant', restaurantSchema);

// reads the created restaurant file

const saveEverything = () => {
  readFile(rawPath, 'utf8').then((contents) => {
    const jsonArr = JSON.parse(contents);
    for (let i = 0; i < jsonArr.length; i++) {
      const rest = new restaurant(jsonArr[i]);
      rest.save((err) => {
        if (err) {
          console.log(err, ' there was an error');
        }
      });
    }
  });
};

const findRestaurant = (restaurantID, callback) => {
  restaurant.findOne({ id: restaurantID }, callback);
};

module.exports.saveEverything = saveEverything;
module.exports.findRestaurant = findRestaurant;
