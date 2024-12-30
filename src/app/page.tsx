import Image from "next/image";
import europe from "../../public/images/europe.jpg";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src={europe}
          alt="europe"
          height={300}
          width={400}
          className="rounded-md"
        />
      </div>
      {/* Text Content Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Study Abroad in Europe: Top 5 Countries for an Unforgettable
          Experience
        </h2>
        <p>
          Studying abroad is a transformative experience, and Europe offers some
          of the best destinations for international students. With world-class
          universities, rich cultural heritage, and vibrant cities, the
          continent is a hotspot for those seeking quality education and global
          exposure. Here&apos;s a look at the top 5 European countries for studying
          abroad.
        </p>
        <h3>1. Germany</h3>
        <p>
          Germany is a top destination for international students thanks to its
          tuition-free education at public universities for most courses,
          especially at the undergraduate level. The country is known for its
          strong emphasis on research and innovation, making it an excellent
          choice for STEM fields. Cities like Berlin, Munich, and Heidelberg
          offer a vibrant cultural experience, combining history, modernity,
          and a thriving international student community.
        </p>
        <h3>2. Austria</h3>
        <p>
          Austria combines academic excellence with a rich cultural heritage.
          The country&apos;s universities, such as the University of Vienna and Graz
          University of Technology, are renowned for their programs in the arts,
          music, and engineering. Austria&apos;s central European location makes it a
          hub for travel and exploration, while cities like Vienna, Salzburg,
          and Innsbruck offer a harmonious blend of historic charm and modern
          amenities. With affordable tuition fees and a high standard of living,
          Austria is an appealing choice for students worldwide.
        </p>
        <h3>3. Norway</h3>
        <p>
          Norway stands out for its free education at public universities, even
          for international students. Known for its exceptional quality of life
          and breathtaking natural landscapes, Norway is ideal for those who
          value sustainability and outdoor adventures. Universities like the
          University of Oslo and the Norwegian University of Science and
          Technology offer cutting-edge programs, particularly in technology and
          environmental studies. The country&apos;s emphasis on social equality and
          innovation makes it a unique study destination.
        </p>
        <h3>4. Finland</h3>
        <p>
          Finland is celebrated for its top-ranking education system, innovative
          teaching methods, and high-quality research opportunities. With a
          focus on creativity and critical thinking, Finnish universities excel
          in areas such as technology, education, and sustainable development.
          Cities like Helsinki and Tampere provide a welcoming atmosphere for
          international students, offering a mix of modern urban living and
          access to stunning natural landscapes, including the famous Northern
          Lights.
        </p>
        <h3>5. Italy</h3>
        <p>
          Italy is a treasure trove of art, history, and culinary delights,
          making it a unique choice for students. Universities like Sapienza
          University of Rome and the University of Bologna, the oldest university
          in the world, attract students with their prestigious academic programs
          in fields such as humanities, fashion, and architecture. The chance to
          live in cities like Florence, Milan, or Rome enriches the educational
          experience with world-class museums, historical landmarks, and a
          dynamic cultural lifestyle.
        </p>
      </div>
    </div>
  );
}

