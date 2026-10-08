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
      className="flex w-full items-end gap-4 rounded-2xl border border-[#4A4A4A]/20 bg-[#fd8c24] pt-6 px-6 pb-8"
    >
      <div className="flex flex-1 flex-col gap-2">
        <label
          htmlFor="pickup"
          className="text-left text-sm font-medium text-[#383737]"
        >
          Pickup Location
        </label>

        <select
          id="pickup"
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handelFormChange}
          className="h-11 w-full rounded-lg border border-[#4A4A4A]/30 bg-white px-3 text-sm text-[#383737] outline-none transition focus:border-[#FF9D00]"
        >
          <option value="" disabled>
            Select pickup Location
          </option>
          <option value="birtamode">Birtamode</option>
          <option value="charali">Charali</option>
          <option value="damak">Damak</option>
        </select>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <label
          htmlFor="drop"
          className="text-left text-sm font-medium text-[#383737]"
        >
          Drop Location
        </label>

        <select
          id="drop"
          name="dropLocation"
          value={formData.dropLocation}
          onChange={handelFormChange}
          className="h-11 w-full rounded-lg border border-[#4A4A4A]/30 bg-white px-3 text-sm text-[#383737] outline-none transition focus:border-[#FF9D00]"
        >
          <option value="" disabled>
            Select drop Location
          </option>
          <option value="birtamode">Birtamode</option>
          <option value="charali">Charali</option>
          <option value="damak">Damak</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="pickupTime"
          className="text-left text-sm font-medium text-[#383737]"
        >
          Pickup time
        </label>

        <input
          type="time"
          id="pickupTime"
          name="pickupTime"
          value={formData.pickupTime}
          onChange={handelFormChange}
          className="h-11 rounded-lg border border-[#4A4A4A]/30 bg-white px-3 text-sm text-[#383737] outline-none transition focus:border-[#FF9D00]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="dropTime"
          className="text-left text-sm font-medium text-[#383737]"
        >
          Drop time
        </label>

        <input
          type="time"
          id="dropTime"
          name="dropTime"
          value={formData.dropTime}
          onChange={handelFormChange}
          className="h-11 rounded-lg border border-[#4A4A4A]/30 bg-white px-3 text-sm text-[#383737] outline-none transition focus:border-[#FF9D00]"
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
