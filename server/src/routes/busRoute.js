import mongoose from 'mongoose';


const stopSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
  },

  lat: {
    type: Number,
    required: true
  },

  lng: {
    type: Number,
    required: true
  }
})


const routeSchema = new mongoose.Schema({
    stops: {
        type: [stopSchema],
        required: true
    },

    name: {
    type: String,
    required: true
  },
})

const Route = mongoose.model("Route", routeSchema);

export default Route;