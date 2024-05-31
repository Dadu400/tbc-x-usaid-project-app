import Image from "next/image";

function Banner() {
  return (
    <section className="w-[100%]  flex gap-2 mt-[40px]">
      <div className="flex-1 rounded-[15px]">
        <img
          src="https://sonic.ge/dyn/8X0DNwLHRwrej1rPM6Jceg0nftW36B4KlmDo4YGwcxI/rs:fit:1530:0/plain/images/banner/b00d844a-1c48-4478-8c5c-dd5a80cc93f3.jpg"
          alt="Banner Image"
          className="w-full rounded-[15px]"
        />
      </div>
      <div className="flex-1 rounded-[15px]">
        <img
          src="https://sonic.ge/dyn/kr9jr_qfObyXeYhFXtsJzWaiaPPJE-hUjhGUtdf6hKg/rs:fit:1530:0/plain/images/banner/3242bc47-70aa-4f41-8730-f1f64970c505.jpg"
          alt="Banner Image"
          className="w-full rounded-[15px]"
        />
      </div>
    </section>
  );
}

export default Banner;
