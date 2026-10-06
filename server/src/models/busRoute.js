import mongoose from 'mongoose';

const routePointsSchema = new mongoose.Schema({

  name:{
    type:String,
    required: true,
  },

  coordinates: {
    type: [Number],
    required: true,
  }
})

const routeSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
  },

  routePoints:{
    type: [routePointsSchema],
    required: true,
  },

})