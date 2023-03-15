import { list } from "postcss";


const Slug = ({ drawings }) => {
  console.log(drawings);
  const drawing = drawings[0];
  return (
    <div className="mt-5 grid grid-cols-2 gap-10">
      <div>
        <h2 className="card-title mb-5 text-3xl"> {drawing?.title}</h2>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={drawing?.image?.url}
              alt="Shoes"
              className="h-96 w-full"
            />
          </figure>
          <div className="card-body">
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Author: {drawing?.author?.username}</h1>
          <h1>Email: {drawing?.author?.email}</h1>
        </div>
        <p>{drawing?.drawing_categories[0].description}</p>
        <div className="flex justify-center rounded-none mt-5">
          <button className="bg-primary py-4 px-12 text-white">Download drawing</button>
        </div>
        <h1>Search by tag:</h1>
        <ul className=" grid grid-cols-2 gap-4 mt-5">
          {
            drawing?.tags.map((tag)=> <li key={tag.id} className="bg-gray-700 text-white p-4 rounded-lg text-center">{tag.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
};

export default Slug;

export async function getStaticPaths() {
  const res = await fetch(`https://www.planndesign.com/gapi/drawings`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { slug: [...post.slug] },
  }));
  return { paths, fallback: true };
}
export async function getStaticProps(context) {
  const params = context.params;
  const res = await fetch(
    `https://www.planndesign.com/gapi/drawings?slug=${params?.slug[1]}`
  );
  const data = await res.json();
  return {
    props: {
      drawings: data,
    },
  };
}
