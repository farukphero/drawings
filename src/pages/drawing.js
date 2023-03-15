import Link from "next/link";


const Drawing = ({ drawing }) => {
  return (
    <Link href={`/drawings/${drawing.slug}`}>
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={drawing?.image?.url} alt="Shoes" className="h-96" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {drawing?.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div></Link>
  );
};

export default Drawing;
