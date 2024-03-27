
import Image from "next/image";
import { TProduct } from "../../../components/type/type";

const DashboardPage = async () => {
  const products = await fetch("https://baby-care-store-server.vercel.app/products");
  const data = await products.json();
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>
      <div className="overflow-x-auto">
        <table className="table my-12">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Category</th>
              <th>Name</th>
              <th>Discount</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              data?.map((item: TProduct)=>(
                <tr key={item._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={100}
                        height={100}
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.category}</div>
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td className="text-red-500">{item.discount}</td>
            
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
