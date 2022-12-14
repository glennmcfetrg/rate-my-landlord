import { useState } from 'react';

export interface IPropertyForm {}

const PropertyForm: React.FC<IPropertyForm> = () => {
  const [propertyName, setPropertyName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Update state with the current form field values
    alert(propertyName + ', ' + propertyAddress);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-screen max-w-sm bg-zinc-800 text-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label className="block text-slate-300 text-sm font-bold mb-2">
          Postcode
        </label>
        <input
          type="text"
          name="postcode"
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-slate-300 text-sm font-bold mb-2">
          Property Name
        </label>
        <input
          type="text"
          name="propertyName"
          value={propertyName}
          onChange={(event) => setPropertyName(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-slate-300 text-sm font-bold mb-2">
          Property Address
        </label>
        <input
          type="text"
          name="propertyAddress"
          value={propertyAddress}
          onChange={(event) => setPropertyAddress(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button onClick={handleSubmit} type="submit" className="btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;
