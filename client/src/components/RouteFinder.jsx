import { ArrowRight } from "lucide-react";
import { useState } from "react";

const RouteFinder = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    pickupTime: "",
    dropTime: "",
  });

  function handelFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form
      id="routeFinder"
      onSubmit={handleSubmit}
      className="route-finder"
    >
      <div className="route-field">
        <label htmlFor="pickup">Pickup Location</label>

        <select
          id="pickup"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handelFormChange}
        >
          <option value="" disabled>
            Select pickup Location
          </option>
          <option value="birtamode">Birtamode</option>
          <option value="charali">Charali</option>
          <option value="damak">Damak</option>
        </select>
      </div>

      <div className="route-field">
        <label htmlFor="drop">Drop Location</label>

        <select
          id="drop"
          name="dropLocation"
          value={formData.dropLocation}
          onChange={handelFormChange}
        >
          <option value="" disabled>
            Select drop Location
          </option>
          <option value="birtamode">Birtamode</option>
          <option value="charali">Charali</option>
          <option value="damak">Damak</option>
        </select>
      </div>

      <div className="route-field">
        <label htmlFor="pickupTime">Pickup time</label>

        <input
          type="time"
          id="pickupTime"
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handelFormChange}
        />
      </div>

      <div className="route-field">
        <label htmlFor="dropTime">Drop time</label>

        <input
          type="time"
          id="dropTime"
          name="dropTime"
          value={formData.dropTime}
          onChange={handelFormChange}
        />
      </div>

      <button type="submit" className="primary-btn h-11">
        Find a Route
        <ArrowRight size={17} />
      </button>
    </form>
  );
};

export default RouteFinder;
