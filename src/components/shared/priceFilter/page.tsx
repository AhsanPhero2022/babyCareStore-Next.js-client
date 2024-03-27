"use client";

const PriceFilter = () => {

    

  return (
    <div className=" border px-16 py-12 border-1 ">
      <h1 className="text-2xl font-semibold mb-8">Price Range</h1>
      <div className="space-y-5">
        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span>$20.00 - $50.00</span>
        </p>

        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span>$50.00 - $100.00</span>
        </p>

        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span>$100.00 - $150.00</span>
        </p>
        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />
          <span>$150.00 - $200.00</span>
        </p>
      </div>
    </div>
  );
};

export default PriceFilter;
