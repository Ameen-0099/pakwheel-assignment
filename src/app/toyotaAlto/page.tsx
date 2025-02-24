'use client'
import Image from "next/image";
import Link from "next/link";
const alto = () => {
  return (
    <div>
      <div className="main h-auto  ">
        <h1 className=" font-extrabold underline text-2xl ml-52 mt-5">
          Toyota ALto 2024 Price in Pakistan,Images,Reviews & Specs
        </h1>
        <div className="img ml-96">
          <Image
            src="/Suzuki_Alto_-_PNG.png"
            alt=""
            className="bg-cover"
            width={500}
            height={500}
          />
          <div className="buttons flex text-xs gap-4 text-white">
            <button className="w-32 rounded-sm h-10 text-xs border border-blue-600 bg-white text-blue-600 ">
              Book a test drive
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600 ">
              Request best finance
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600 ">
              Visit Place
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600">
              Car Inspection
            </button>
          </div>
        </div>
      </div>

      <div className="deatils flex justify-center mt-5">
        <form>
          <h1 className="ml-10"><b>Specification</b></h1>
          <table className="border">
             <tbody>
               <tr>
              <th>Make:</th>
              <td>Suzuki</td>
              </tr>
            <tr>
              <th>Transmission:</th>
              <td>Automatic</td>
            </tr>
            <tr>
              <th>Fuel Type:</th>
              <td>Petrol</td>
            </tr>
            <tr>
              <th>Engine:</th>
              <td>660 cc</td>
            </tr>
            <tr>
              <th>Varient :</th>
              <td>VXR</td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className="payment justify-center flex mt-2">
        <h1 className="text-green-600">PKR 23.3 - 30.5lacs</h1>
      </div>
      <div className="btn justify-center flex mt-2">
        <Link
          href="toyotaAlto/payment"
          className="rounded-sm bg-blue-700 text-white text-sm p-2"
        >
          {" "}
          Make Payment
        </Link>
      </div>
    </div>
  );
};
export default alto;





{/*  'use client'
import Image from "next/image";
import Link from "next/link";
const alto = () => {
  return (
    <div>
      <div className="main h-auto  ">
        <h1 className=" font-extrabold underline text-2xl ml-52 mt-5">
          Toyota ALto 2024 Price in Pakistan,Images,Reviews & Specs
        </h1>
        <div className="img ml-96">
          <Image
            src="/Suzuki_Alto_-_PNG.png"
            alt=""
            className="bg-cover"
            width={500}
            height={500}
          />
          <div className="buttons flex text-xs gap-4 text-white">
            <button className="w-32 rounded-sm h-10 text-xs border border-blue-600 bg-white text-blue-600 ">
              Book a test drive
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600 ">
              Request best finance
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600 ">
              Visit Place
            </button>
            <button className="w-32 rounded-sm  h-10 border border-blue-600 bg-white text-blue-600">
              Car Inspection
            </button>
          </div>
        </div>
      </div>

      <div className="deatils flex justify-center mt-5">
        <form>
          <table className="border">
            <tr>
              <th colSpan={3}>Specifications</th>
            </tr>
            <tr>
              <th>Make:</th>
              <td>Suzuki</td>
            </tr>
            <tr>
              <th>Transmission:</th>
              <td>Automatic</td>
            </tr>
            <tr>
              <th>Fuel Type:</th>
              <td>Petrol</td>
            </tr>
            <tr>
              <th>Engine:</th>
              <td>660 cc</td>
            </tr>
            <tr>
              <th>Varient :</th>
              <td>VXR</td>
            </tr>
          </table>
        </form>
      </div>
      <div className="payment justify-center flex mt-2">
        <h1 className="text-green-600">PKR 23.3 - 30.5lacs</h1>
      </div>
      <div className="btn justify-center flex mt-2">
        <Link
          href="toyotaAlto/payment"
          className="rounded-sm bg-blue-700 text-white text-sm p-2"
        >
          {" "}
          Make Payment
        </Link>
      </div>
    </div>
  );
};
export default alto; */}
